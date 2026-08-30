const { chromium } = require("@playwright/test");

(async () => {
  console.log("Launching headless browser...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ permissions: ["clipboard-read", "clipboard-write"] });
  const page = await context.newPage();

  page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  page.on("pageerror", (err) => console.log("PAGE ERROR:", err.message));

  console.log("Navigating to local site with query params...");
  // Using the port Next.js is running on: 3002
  await page.goto("http://127.0.0.1:3002/?postcode=SW1A1AA&miles=12000&mpg=40&homeRate=25&mode=tco#calculator");

  console.log("Waiting for page load and hydration...");
  // Wait for the calculator form to appear
  await page.waitForSelector("form[aria-label='EV vs petrol cost calculator']", { timeout: 15000 });

  console.log("Verifying pre-filled fields in UI...");
  const postcode = await page.inputValue("#your-postcode-\\(optional\\)");
  const miles = await page.inputValue("#annual-mileage");
  const mpg = await page.inputValue("#current-car-fuel-economy");
  const homeRate = await page.inputValue("#home-electricity-rate");

  console.log(`Parsed inputs from UI: postcode="${postcode}", miles="${miles}", mpg="${mpg}", homeRate="${homeRate}"`);

  if (postcode !== "SW1A 1AA" && postcode !== "SW1A1AA") {
    throw new Error(`Expected postcode SW1A 1AA, got: "${postcode}"`);
  }
  if (parseInt(miles) !== 12000) {
    throw new Error(`Expected annual miles 12000, got: "${miles}"`);
  }
  if (parseInt(mpg) !== 40) {
    throw new Error(`Expected MPG 40, got: "${mpg}"`);
  }
  if (parseFloat(homeRate) !== 25) {
    throw new Error(`Expected home rate 25, got: "${homeRate}"`);
  }

  // Check TCO mode is selected (tab is active)
  const isTcoActive = await page.locator("button[aria-selected='true']").innerText();
  console.log(`Active mode tab: "${isTcoActive}"`);
  if (!isTcoActive.toLowerCase().includes("cost over time")) {
    throw new Error(`Expected TCO mode active, got: "${isTcoActive}"`);
  }

  // Verify that results card is visible (crossover year)
  const resultsText = await page.locator("[role='status']").innerText();
  console.log(`Results banner text: "${resultsText}"`);
  if (!resultsText.includes("EV breaks even") && !resultsText.includes("EV does not break even")) {
    throw new Error("TCO results verdict banner is missing or incorrect.");
  }

  // Verify Share Results copy link button
  console.log("Printing all buttons on page for debugging...");
  const buttons = await page.locator("button").allInnerTexts();
  console.log("Found buttons:", buttons);

  console.log("Clicking 'Copy share link' button...");
  const copyBtn = page.locator("button", { hasText: "Copy share link" }).first();
  await copyBtn.scrollIntoViewIfNeeded();
  await copyBtn.click({ force: true });

  console.log("Waiting for button to transition to copied state...");
  const copiedBtn = page.locator("button", { hasText: "copied" }).first();
  await copiedBtn.waitFor({ state: "visible", timeout: 5000 });
  const copiedText = await copiedBtn.innerText();
  console.log(`Button text after click: "${copiedText}"`);
  if (!copiedText.toLowerCase().includes("copied")) {
    throw new Error(`Expected button text to change to 'copied', got: "${copiedText}"`);
  }

  // Navigate to Q3 2026 Index page
  console.log("Navigating to Q3 2026 EV running cost index guide...");
  await page.goto("http://127.0.0.1:3002/guides/ev-running-cost-index-q3-2026");

  // Verify title is correct
  const title = await page.title();
  console.log(`Report page title: "${title}"`);
  if (!title.includes("Q3 2026 Report")) {
    throw new Error(`Expected Q3 2026 report in title, got: "${title}"`);
  }

  // Verify index table is loaded
  const hasTable = await page.locator("table").isVisible();
  console.log(`Report page contains table: ${hasTable}`);
  if (!hasTable) {
    throw new Error("Report page is missing the programmatic cost index table.");
  }

  console.log("All UI verifications completed successfully!");
  await browser.close();
  process.exit(0);
})().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});
