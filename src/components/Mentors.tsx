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
    {
    name: "Anisha Ramakrishna Yarlapati",
    role: "Product Manager",
    context: "Adobe",
    image: "/mentors/anisha-ramakrishna-yarlapati.png",
    color: "from-sky-200 to-sky-400",
  },
    {
    name: "Kunal Sharma",
    role: "Product Lead",
    context: "Stripe",
    image: "/mentors/kunal-sharma.png",
    color: "from-slate-700 to-slate-900",
  },
];

const VISIBLE_COUNT = 6;
const STEP = 2;

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
  const [start, setStart] = useState(0);
  const maxStart = Math.max(0, mentors.length - VISIBLE_COUNT);
  const hasSlider = mentors.length > VISIBLE_COUNT;
  const visible = mentors.slice(start, start + VISIBLE_COUNT);

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
          <div className="grid grid-flow-col auto-cols-fr grid-rows-6 gap-5 sm:grid-rows-3 lg:grid-rows-2">
            {visible.map((mentor) => (
              <div
                key={`${start}-${mentor.name}`}
                className="flex h-48 items-stretch overflow-hidden rounded-lg border border-cream-darker bg-white-warm animate-[fadeSlideIn_0.35s_ease-out]"
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
                  <h3 className="line-clamp-2 text-lg font-bold leading-tight text-ink">
                    {mentor.name}
                  </h3>
                  <p className="line-clamp-2 text-[11px] font-semibold uppercase leading-tight tracking-wider text-teal-dark">
                    {mentor.role}
                  </p>
                  <p className="line-clamp-1 text-[15px] leading-snug text-ink-soft">
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
                onClick={() => setStart((s) => Math.max(0, s - STEP))}
                disabled={start === 0}
                aria-label="Previous mentors"
                className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-ink/15 bg-white-warm text-ink shadow-sm transition hover:border-teal-dark hover:text-teal-dark disabled:cursor-not-allowed disabled:opacity-30 sm:-left-6"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={() => setStart((s) => Math.min(maxStart, s + STEP))}
                disabled={start === maxStart}
                aria-label="Next mentors"
                className="absolute -right-4 top-1/2 flex h-10 w-10 translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-ink/15 bg-white-warm text-ink shadow-sm transition hover:border-teal-dark hover:text-teal-dark disabled:cursor-not-allowed disabled:opacity-30 sm:-right-6"
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
