# -*- coding: utf-8 -*-
"""Nahradí vodorovně rolovatelné tabulky komponentou, která se na mobilu rozpadne."""
import io, os

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))


def edit(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        if old not in s:
            raise SystemExit("NENALEZENO v %s:\n%s" % (path, old[:150]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8", newline="\n").write(s)
    print("ok", path)


HOME_OLD = """        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-line-strong">
                <th className="py-2.5 pr-6 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Vydal
                </th>
                <th className="py-2.5 pr-6 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Doklad
                </th>
                <th className="py-2.5 pr-6 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Číslo
                </th>
                <th className="py-2.5 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Platnost
                </th>
              </tr>
            </thead>
            <tbody>
              {credentials.map((c) => (
                <tr key={c.ref} className="border-b border-line align-top">
                  <td className="py-4 pr-6 text-[14px] text-ink-700">{c.issuer}</td>
                  <td className="py-4 pr-6 text-[14px] font-medium text-ink">
                    {c.title}
                  </td>
                  <td className="py-4 pr-6 font-mono text-[13px] text-ink-700">
                    {c.ref}
                  </td>
                  <td className="py-4 font-mono text-[13px] text-ink-700">{c.valid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>"""

HOME_NEW = """        <DataTable
          className="mt-8"
          head={["Doklad", "Vydal", "Číslo", "Platnost"]}
          rows={credentials.map((c) => [
            c.title,
            c.issuer,
            <span key="ref" className="font-mono text-[13px]">
              {c.ref}
            </span>,
            <span key="valid" className="font-mono text-[13px]">
              {c.valid}
            </span>,
          ])}
        />"""

edit("app/page.tsx", [
    ('import { ContactStrip } from "@/components/contact-strip";',
     'import { ContactStrip } from "@/components/contact-strip";\nimport { DataTable } from "@/components/data-table";'),
    (HOME_OLD, HOME_NEW),
])

VYT_OLD = """        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-line-strong">
                <th className="w-[22rem] py-2.5 pr-8 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Varianta
                </th>
                <th className="py-2.5 pr-8 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Kde se používá
                </th>
                <th className="py-2.5 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Co je potřeba zajistit
                </th>
              </tr>
            </thead>
            <tbody>
              {variants.map((v, i) => (
                <tr
                  key={v.name}
                  className={`border-b border-line align-top ${
                    i % 2 === 1 ? "bg-paper-200" : ""
                  }`}
                >
                  <td className="py-4 pr-8 text-[15px] font-medium leading-snug text-ink">
                    {v.name}
                  </td>
                  <td className="py-4 pr-8 text-[14.5px] leading-snug text-ink-700">
                    {v.use}
                  </td>
                  <td className="py-4 text-[14.5px] leading-snug text-ink-700">
                    {v.need}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>"""

VYT_NEW = """        <DataTable
          className="mt-10"
          minWidth="min-w-[44rem]"
          head={["Varianta", "Kde se používá", "Co je potřeba zajistit"]}
          rows={variants.map((v) => [v.name, v.use, v.need])}
        />"""

edit("app/elektricke-vytapeni/page.tsx", [
    ('import { ContactStrip } from "@/components/contact-strip";',
     'import { ContactStrip } from "@/components/contact-strip";\nimport { DataTable } from "@/components/data-table";'),
    (VYT_OLD, VYT_NEW),
])

TOPIC_OLD = """        <div className="mt-6 overflow-x-auto">
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
        </div>"""

TOPIC_NEW = """        <DataTable
          className="mt-6"
          minWidth="min-w-[32rem]"
          head={block.head}
          rows={block.rows}
        />"""

edit("components/topic-page.tsx", [
    ('import { ContactStrip } from "@/components/contact-strip";',
     'import { ContactStrip } from "@/components/contact-strip";\nimport { DataTable } from "@/components/data-table";'),
    (TOPIC_OLD, TOPIC_NEW),
])

print("hotovo")
