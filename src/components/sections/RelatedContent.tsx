import Link from "next/link";

interface RelatedContentLink {
  href: string;
  label: string;
}

interface RelatedContentProps {
  title?: string;
  links: RelatedContentLink[];
}

export function RelatedContent({ title = "Related", links }: RelatedContentProps) {
  return (
    <section className="mt-10 pt-8 border-t border-border-light">
      <h3 className="text-sm font-semibold text-navy mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-ev-blue hover:underline">
              {link.label} →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
