import Link from "next/link";
import { ContactStrip } from "@/components/contact-strip";
import { PhotoBand } from "@/components/photo-band";
import { TopicIndex } from "@/components/topic-index";
import { fields } from "@/lib/site";
import { slugify } from "@/lib/slug";
import { topicsFor, type Block, type Topic } from "@/lib/topics";

function headingOf(block: Block) {
  return "heading" in block ? block.heading : undefined;
}

export function TopicPage({ topic }: { topic: Topic }) {
  const field = fields.find((f) => f.slug === topic.field);
  const siblings = topicsFor(topic.field).filter((t) => t.slug !== topic.slug);

  const indexItems = topic.blocks
    .map((b) => headingOf(b))
    .filter((h): h is string => Boolean(h))
    .map((h) => ({ id: slugify(h), label: h }));

  return (
    <>
      <section className="border-b border-line">
        <div className="shell pb-12 pt-8 lg:pb-14">
          <p className="font-mono text-[11.5px] text-ink-500">
            <Link href="/nabidka-sluzeb" className="transition-colors hover:text-signal">
              Nabídka služeb
            </Link>
            <span className="px-2 text-ink-300">/</span>
            <Link
              href={`/${topic.field}`}
              className="transition-colors hover:text-signal"
            >
              {field?.title ?? topic.field}
            </Link>
            <span className="px-2 text-ink-300">/</span>
            <span className="text-ink-700">{topic.navTitle}</span>
          </p>
          <h1 className="mt-6 max-w-[26ch] text-[1.85rem] font-semibold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.4rem] lg:text-[2.75rem]">
            {topic.title}
          </h1>
          <p className="mt-6 max-w-measure text-[16px] leading-[1.75] text-ink-700">
            {topic.lead}
          </p>
        </div>
      </section>

      <div className="shell grid gap-12 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <TopicIndex items={indexItems} />
          </div>
        </aside>

        <div className="lg:col-span-9">
          <div className="space-y-14">
            {topic.blocks.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </div>
        </div>
      </div>

      {siblings.length > 0 ? (
        <section className="border-t border-line bg-paper-200">
          <div className="shell py-12">
            <h2 className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
              Další z oboru {field?.title.toLowerCase() ?? ""}
            </h2>
            <ul className="mt-5">
              {siblings.map((s) => (
                <li key={s.slug} className="border-t border-line last:border-b">
                  <Link
                    href={`/${s.field}/${s.slug}`}
                    className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <span className="w-[16rem] shrink-0 text-[15.5px] font-semibold text-ink transition-colors group-hover:text-signal">
                      {s.navTitle}
                    </span>
                    <span className="text-[13.5px] leading-relaxed text-ink-500">
                      {s.lead}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={`/${topic.field}`}
              className="mt-6 inline-block text-[14px] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
            >
              Přehled oboru {field?.title.toLowerCase() ?? ""}
            </Link>
          </div>
        </section>
      ) : null}

      <ContactStrip question="Řekněte nám, o jaký objekt jde, a ozveme se s termínem." />
    </>
  );
}

function BlockHeading({ text }: { text: string }) {
  return (
    <h2
      id={slugify(text)}
      className="scroll-mt-24 text-[1.3rem] font-semibold tracking-[-0.015em] text-ink"
    >
      {text}
    </h2>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.kind === "text") {
    return (
      <section>
        {block.heading ? <BlockHeading text={block.heading} /> : null}
        <div className="mt-5 max-w-[62ch] space-y-4">
          {block.paragraphs.map((p) => (
            <p key={p} className="text-[15.5px] leading-[1.75] text-ink-700">
              {p}
            </p>
          ))}
        </div>
      </section>
    );
  }

  if (block.kind === "list") {
    return (
      <section>
        <BlockHeading text={block.heading} />
        <ul className="mt-5 max-w-[62ch] space-y-3 border-t border-line pt-5">
          {block.items.map((item) => (
            <li
              key={item}
              className="grid grid-cols-[1.25rem_1fr] items-baseline gap-1 text-[15px] leading-[1.6] text-ink-700"
            >
              <span aria-hidden className="font-mono text-ink-300">
                &middot;
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (block.kind === "steps") {
    return (
      <section>
        <BlockHeading text={block.heading} />
        <ol className="mt-6">
          {block.steps.map((s, i) => (
            <li
              key={s.title}
              className="grid gap-2 border-t border-line py-6 last:border-b sm:grid-cols-[3rem_12rem_1fr] sm:gap-6"
            >
              <span className="font-mono text-[12.5px] text-ink-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[16px] font-semibold leading-snug text-ink">
                {s.title}
              </h3>
              <p className="max-w-[52ch] text-[14.5px] leading-[1.7] text-ink-700">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (block.kind === "table") {
    return (
      <section>
        <BlockHeading text={block.heading} />
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-line-strong">
                {block.head.map((h) => (
                  <th
                    key={h}
                    className="py-2.5 pr-8 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr
                  key={row[0]}
                  className={`border-b border-line align-top ${
                    i % 2 === 1 ? "bg-paper-200" : ""
                  }`}
                >
                  {row.map((cell, j) => (
                    <td
                      key={cell}
                      className={`py-4 pr-8 text-[14.5px] leading-snug ${
                        j === 0 ? "font-medium text-ink" : "text-ink-700"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  if (block.kind === "specs") {
    return (
      <section>
        <BlockHeading text={block.heading} />
        <dl className="mt-6 max-w-[44rem] border-t border-line">
          {block.rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-line py-3.5"
            >
              <dt className="text-[13.5px] text-ink-500">{r.label}</dt>
              <dd className="font-mono text-[13.5px] text-ink">{r.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    );
  }

  if (block.kind === "note") {
    return (
      <p className="max-w-[62ch] border-l-2 border-signal pl-5 text-[14.5px] leading-[1.7] text-ink-700">
        {block.text}
      </p>
    );
  }

  return (
    <section>
      {block.heading ? <BlockHeading text={block.heading} /> : null}
      <div className="mt-6">
        <PhotoBand files={block.files} full />
      </div>
    </section>
  );
}
