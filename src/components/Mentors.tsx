"use client";

import Image from "next/image";
import { useState } from "react";

const mentors = [
  {
    name: "Aiswarya Venkitesh",
    role: "Principal Cloud Solution Architect",
    context: "Microsoft",
    image: "/mentors/aiswarya-venkitesh.png",
    color: "from-slate-700 to-slate-900",
  },
  {
    name: "Sunil Divvela",
    role: "Worldwide Senior Solutions Architect",
    context: "Amazon Web Services (AWS)",
    image: "/mentors/sunil-divvela.png",
    color: "from-amber-200 to-orange-400",
  },
  {
    name: "Tanvi Kopardekar",
    role: "Senior Product Manager",
    context: "Zoom",
    image: "/mentors/tanvi-kopardekar.png",
    color: "from-teal/40 to-teal-dark/60",
  },
  {
    name: "Serena Lekhrajani",
    role: "Software Engineer II",
    context: "Microsoft Corporation",
    image: "/mentors/serena-lekhrajani.png",
    color: "from-sky-200 to-sky-400",
  },
  {
    name: "Angus Wyllie",
    role: "Chief of Staff",
    context: "Iridium Credit",
    image: "/mentors/angus-wyllie.png",
    color: "from-slate-500 to-slate-700",
  },
  {
    name: "Nisha Sherra",
    role: "Engineering Leader",
    context: "Optum",
    image: "/mentors/nisha-sherra.png",
    color: "from-rose-200 to-rose-400",
  },
];

const CARDS_PER_PAGE = 6;

function chunk<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 ${direction === "left" ? "rotate-180" : ""}`}
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Mentors() {
  const pages = chunk(mentors, CARDS_PER_PAGE);
  const [page, setPage] = useState(0);
  const hasSlider = pages.length > 1;

  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex max-w-md items-center gap-3">
          <span className="whitespace-nowrap font-mono text-xs uppercase tracking-widest text-teal-dark">
            Who you&apos;ll learn from
          </span>
          <span className="h-px w-16 bg-cream-darker" />
          <span className="h-2 w-2 rotate-45 bg-teal" />
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Mentors and speakers
        </h2>
        <p className="mt-4 max-w-md text-sm text-ink-soft sm:text-base">
          Fellows learn directly from people building and operating real
          companies. Full lineup announced closer to the cohort start.
        </p>

        <div className="relative mt-10">
          <div className="grid grid-cols-1 gap-5 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-3">
            {pages[page].map((mentor) => (
              <div
                key={mentor.name}
                className="flex h-full items-stretch overflow-hidden rounded-lg border border-cream-darker bg-white-warm"
              >
                <div
                  className={`relative w-[42%] shrink-0 bg-gradient-to-br ${mentor.color}`}
                >
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    sizes="(min-width: 1024px) 161px, (min-width: 640px) 21vw, 42vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative flex flex-1 flex-col justify-center gap-1 p-5">
                  <h3 className="text-lg font-bold text-ink">{mentor.name}</h3>
                  <p className="text-[11px] font-semibold uppercase leading-tight tracking-wider text-teal-dark">
                    {mentor.role}
                  </p>
                  <p className="text-[15px] leading-snug text-ink-soft">
                    {mentor.context}
                  </p>
                  <span className="mt-3 flex h-7 w-7 items-center justify-center self-end text-teal-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {hasSlider && (
            <>
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                aria-label="Previous mentors"
                className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/15 bg-white-warm text-ink shadow-sm transition hover:border-teal-dark hover:text-teal-dark disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
                disabled={page === pages.length - 1}
                aria-label="Next mentors"
                className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-ink/15 bg-white-warm text-ink shadow-sm transition hover:border-teal-dark hover:text-teal-dark disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronIcon direction="right" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
