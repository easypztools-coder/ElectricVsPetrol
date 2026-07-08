import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EV Salary Sacrifice UK Guide 2026 | ElectricVsPetrol.co.uk",
  description:
    "Learn how salary sacrifice EV leasing works in the UK, who qualifies, how much you can save versus paying from net salary, and how it stacks with running-cost savings.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/ev-salary-sacrifice-uk",
  },
};

const faqItems = [
  {
    q: "What is EV salary sacrifice?",
    a: "Salary sacrifice lets you lease an EV through your employer using gross salary before Income Tax and National Insurance are deducted. In practical terms, part of your salary is exchanged for the car lease, so the tax treatment usually makes the monthly cost lower than paying from take-home pay.",
  },
  {
    q: "Who can use salary sacrifice for an EV?",
    a: "It depends on whether your employer offers a scheme and whether you meet the provider's eligibility rules. Many schemes require you to be on a permanent contract, have enough salary to support the deduction, and remain within the employer's policy limits. Company car policies, probation rules, and minimum salary thresholds can all apply.",
  },
  {
    q: "How much can salary sacrifice save compared with paying from net salary?",
    a: "The saving varies with your tax band, lease price, vehicle choice, and whether employer National Insurance savings are shared with the employee. For many basic-rate and higher-rate taxpayers, the monthly outlay can be meaningfully lower than paying for the same car from net salary, especially once road tax and some maintenance costs are bundled into the lease.",
  },
  {
    q: "Does salary sacrifice replace the running-cost savings of an EV?",
    a: "No. Salary sacrifice is the financing method, while running-cost savings come from electricity being cheaper per mile than petrol. The two benefits can stack together. A driver can save on the lease via gross-salary treatment and still save again on fuel if they charge cheaply at home or at work.",
  },
];

export default function EvSalarySacrificeUkPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="text-ev-blue hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/guides" className="text-ev-blue hover:underline">
              Guides
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">
            EV Salary Sacrifice
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        EV Salary Sacrifice UK Guide 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        Last updated: June 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        Salary sacrifice has become one of the most talked-about ways to get into an
        electric car in the UK. The appeal is obvious: instead of paying for a lease
        from your take-home pay, you give up part of your gross salary and the tax
        system does some of the heavy lifting. But it only works well if the scheme,
        the car, and your own salary all line up.
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">
          Pair the lease savings with running-cost savings
        </p>
        <Link
          href="/#calculator"
          className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm"
        >
          Use the EV vs Petrol Cost Calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="how-it-works">
          <h2
            id="how-it-works"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            How salary sacrifice works in practice
          </h2>
          <p className="mb-4">
            In a salary sacrifice arrangement, you agree with your employer to give up
            part of your gross salary in exchange for an EV lease. Because the money is
            deducted before Income Tax and National Insurance, the real cost to you is
            often lower than paying the same lease from net salary.
          </p>
          <p className="mb-4">
            Many schemes bundle several costs into one monthly payment. Depending on the
            provider, that can include the lease itself, maintenance, servicing, road tax,
            breakdown cover, and even insurance support. The exact package matters,
            because a headline monthly figure can hide what is and is not included.
          </p>
          <p>
            This is why salary sacrifice is best treated as a finance wrapper, not a
            magic discount. The tax advantage can make the monthly payment attractive,
            but the underlying car still needs to be a sensible fit for your mileage,
            charging access, and family needs.
          </p>
        </section>

        <section aria-labelledby="eligibility">
          <h2
            id="eligibility"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Eligibility basics and common limits
          </h2>
          <p className="mb-4">
            The first requirement is simple: your employer needs to offer a scheme.
            After that, providers usually apply their own rules. Some require a minimum
            salary so the deduction does not push you below affordability thresholds.
            Others restrict the scheme to employees past probation or limit it to certain
            contract types.
          </p>
          <p className="mb-4">
            Another practical issue is benefit structure. If your employer already gives
            you a company car, car allowance, or another vehicle benefit, salary
            sacrifice may interact with those arrangements. The tax treatment can also
            differ depending on whether the car is classed as a benefit-in-kind and how
            your employer structures the lease.
          </p>
          <p>
            The result is that salary sacrifice is usually straightforward for the
            employee but highly dependent on the employer scheme rules. Before comparing
            cars, it is worth checking the provider&apos;s calculator, the included mileage,
            and whether the package assumes a private-use vehicle or a fleet-style
            arrangement.
          </p>
        </section>

        <section aria-labelledby="savings">
          <h2
            id="savings"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Typical savings versus buying from net salary
          </h2>
          <p className="mb-4">
            The size of the saving depends on your tax band. Basic-rate taxpayers may see
            a noticeable monthly reduction compared with paying a lease from take-home
            pay. Higher-rate taxpayers can often save more because the avoided tax and
            National Insurance are larger. If employer National Insurance savings are
            passed on, the employee value improves further.
          </p>
          <p className="mb-4">
            In some cases the monthly cost can compare favourably with a personal lease,
            especially when the scheme bundles maintenance and road tax. In other cases,
            a cheaper personal finance deal can still win on raw cash cost. The only way
            to know is to compare the salary sacrifice quote with an equivalent lease on a
            like-for-like car, then factor in the tax treatment properly.
          </p>
          <p>
            The strongest use case is usually a driver who already wants an EV, can charge
            at home or work, and wants a predictable all-in monthly cost. In that case the
            salary sacrifice benefit stacks on top of the running-cost benefit, which is
            where the economics become genuinely compelling.
          </p>
        </section>

        <section aria-labelledby="running-cost-link">
          <h2
            id="running-cost-link"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            How this interacts with EV running-cost savings
          </h2>
          <p className="mb-4">
            It is easy to focus only on the lease payment and forget the fuel bill. A
            salary sacrifice EV still needs electricity, and electricity is where the
            running-cost advantage comes from. If you charge cheaply at home overnight,
            the per-mile cost is often far below petrol. If you depend on public rapid
            charging, the case becomes weaker.
          </p>
          <p className="mb-4">
            That means the salary sacrifice decision should never be separated from the
            charging decision. A cheap lease on a poorly suited EV can still be expensive
            to run. By contrast, a car with a slightly higher lease cost but strong
            home-charging economics may be the better overall choice.
          </p>
          <p>
            For that reason, the main EV vs petrol calculator remains the best way to
            test the running-cost side of the decision. Salary sacrifice tells you how the
            car is financed; the calculator tells you how much it will cost to drive.
            Together they answer the full question.
          </p>
        </section>

        <section aria-labelledby="links">
          <h2
            id="links"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Start with the calculator and the main guide
          </h2>
          <p>
            Read the <Link href="/guides/ev-vs-petrol-running-costs" className="text-ev-blue hover:underline">main EV running costs guide</Link> for the fuel-versus-electricity comparison, then use the <Link href="/#calculator" className="text-ev-blue hover:underline">calculator</Link> to test your own mileage and charging split. If local petrol prices matter to your scheme comparison, the <Link href="/guides/local-fuel-prices" className="text-ev-blue hover:underline">local fuel prices guide</Link> explains why postcode data matters. To work through the actual monthly numbers for a specific lease and tax band, use the <Link href="/guides/ev-salary-sacrifice-calculator" className="text-ev-blue hover:underline">salary sacrifice calculator</Link>.
          </p>
        </section>
      </div>

      <section aria-labelledby="faq-heading" className="mt-12 pt-10 border-t border-border-light">
        <h2
          id="faq-heading"
          className="text-2xl font-bold text-navy mb-6 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div key={item.q}>
              <h3 className="text-base font-semibold text-navy mb-2">{item.q}</h3>
              <p className="text-sm text-ev-grey leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://electricvspetrol.co.uk",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Guides",
                item: "https://electricvspetrol.co.uk/guides",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "EV Salary Sacrifice",
                item: "https://electricvspetrol.co.uk/guides/ev-salary-sacrifice-uk",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
