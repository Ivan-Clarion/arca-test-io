import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

/**
 * Shared layout for legal/policy pages (Privacy, Terms).
 * Renders a page header plus a list of { heading, body } sections,
 * where body is a string or an array of paragraphs.
 */
export default function LegalPage({ eyebrow, title, updated, intro, sections }) {
  return (
    <main className="flex-1">
      <PageHeader eyebrow={eyebrow} title={title} subtitle={intro} />

      <section className="mx-auto max-w-3xl px-6 py-20">
        {updated && (
          <p className="mb-12 text-sm text-muted">Last updated: {updated}</p>
        )}

        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 60}>
              <article>
                <h2 className="text-xl font-semibold text-foreground">
                  {section.heading}
                </h2>
                <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-muted">
                  {(Array.isArray(section.body)
                    ? section.body
                    : [section.body]
                  ).map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
