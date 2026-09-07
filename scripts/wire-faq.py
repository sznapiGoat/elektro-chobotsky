# -*- coding: utf-8 -*-
"""Zapojí časté dotazy do šablony podstránky a doladí značky na rozvaděči."""
import io, os

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))


def edit(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        if old not in s:
            raise SystemExit("NENALEZENO v %s:\n%s" % (path, old[:140]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8", newline="\n").write(s)
    print("ok", path)


# --- doladeni znacek na fotografii rozvadece --------------------------------
edit("lib/board.ts", [
    ('    id: "privod",\n    x: 23,', '    id: "privod",\n    x: 25,'),
    ('    id: "svorkovnice",\n    x: 82,\n    y: 42,', '    id: "svorkovnice",\n    x: 84,\n    y: 50,'),
])

# --- sablona podstranky: FAQ blok, obsah a strukturovana data ---------------
edit("components/topic-page.tsx", [
    ('import { ContactStrip } from "@/components/contact-strip";',
     'import { ContactStrip } from "@/components/contact-strip";\nimport { FaqList } from "@/components/faq-list";'),
    ('import { fields } from "@/lib/site";',
     'import { faqFor } from "@/lib/faq";\nimport { fields } from "@/lib/site";'),
    ("""  const indexItems = topic.blocks
    .map((b) => headingOf(b))
    .filter((h): h is string => Boolean(h))
    .map((h) => ({ id: slugify(h), label: h }));""",
     """  const faq = faqFor(topic.field, topic.slug);

  const indexItems = [
    ...topic.blocks
      .map((b) => headingOf(b))
      .filter((h): h is string => Boolean(h))
      .map((h) => ({ id: slugify(h), label: h })),
    ...(faq.length > 0 ? [{ id: "caste-dotazy", label: "Časté dotazy" }] : []),
  ];"""),
    ("""  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />""",
     """  const faqSchema =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}"""),
    ("""          <div className="space-y-14">
            {topic.blocks.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </div>""",
     """          <div className="space-y-14">
            {topic.blocks.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}

            {faq.length > 0 ? (
              <section>
                <h2
                  id="caste-dotazy"
                  className="scroll-mt-24 text-[1.3rem] font-semibold tracking-[-0.015em] text-ink"
                >
                  Časté dotazy
                </h2>
                <FaqList items={faq} />
              </section>
            ) : null}
          </div>"""),
])

print("hotovo")
