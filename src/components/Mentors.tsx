"use client";

import Image from "next/image";
import { useState } from "react";

const mentors = [
  {
    name: "Aiswarya Venkitesh",
    bio: "13 years in data and AI. A Principal Cloud Solution Architect at Microsoft, she helps teams build production-ready agentic AI, multi-agent systems, and RAG solutions that actually scale.",
    role: "Principal Cloud Solution Architect",
    context: "Microsoft",
    image: "/mentors/aiswarya-venkitesh.png",
    color: "from-slate-700 to-slate-900",
  },
  {
    name: "Sunil Divvela",
    bio: "22 years across AI, cloud, enterprise architecture, and software engineering. Brings practical experience evaluating technical projects across execution, innovation, usability, and real-world impact.",
    role: "Worldwide Senior Solutions Architect",
    context: "Amazon Web Services (AWS)",
    image: "/mentors/sunil-divvela.png",
    color: "from-amber-200 to-orange-400",
  },
  {
    name: "Tanvi Kopardekar",
    bio: "Building reliable AI agents at Zoom, with experience reducing hallucinations and improving agent performance. Focuses on practical AI evaluation and reliability.",
    role: "Senior Product Manager",
    context: "Zoom",
    image: "/mentors/tanvi-kopardekar.png",
    color: "from-teal/40 to-teal-dark/60",
  },
  {
    name: "Serena Lekhrajani",
    bio: "Software Engineer at Microsoft working across Generative AI and cybersecurity. Brings research and mentorship experience to help builders create practical solutions.",
    role: "Software Engineer II",
    context: "Microsoft Corporation",
    image: "/mentors/serena-lekhrajani.png",
    color: "from-sky-200 to-sky-400",
  },
  {
    name: "Angus Wyllie",
    bio: "Product strategy and user research specialist who helps teams get in front of customers, define useful products, and turn ideas into businesses. He works across UI/UX, AI agents, hiring, fundraising, and building the tools teams need to scale.",
    role: "Chief of Staff",
    context: "Iridium Credit",
    image: "/mentors/angus-wyllie.png",
    color: "from-slate-500 to-slate-700",
  },
  {
    name: "Nisha Sherra",
    bio: "15 years in software development. Brings practical experience helping tech teams turn ideas into working solutions, with a focus on execution, outcomes, and real-world impact.",
    role: "Engineering Leader",
    context: "Optum",
    image: "/mentors/nisha-sherra.png",
    color: "from-rose-200 to-rose-400",
  },
    {
    name: "Anisha Ramakrishna Yarlapati",
    bio: "8+ years in product management at Adobe and SAP, working across AI and creative products. Helps builders turn complex ideas into impactful, user-focused products.",
    role: "Product Manager",
    context: "Adobe",
    image: "/mentors/anisha-ramakrishna-yarlapati.png",
    color: "from-sky-200 to-sky-400",
  },
    {
    name: "Kunal Sharma",
    bio: "Industry experience across Stripe, AWS, and Capital One at scale. Brings practical insights, mentorship, and leadership guidance to help builders grow.",
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
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
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
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((mentor) => (
              <div
                key={`${start}-${mentor.name}`}
                tabIndex={0}
                aria-label={`${mentor.name}, ${mentor.role}, ${mentor.context}. Hover or focus to read bio.`}
                onClick={(e) => e.currentTarget.classList.toggle("is-flipped")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.currentTarget.classList.toggle("is-flipped");
                  }
                }}
                className="group h-40 cursor-pointer rounded-lg [perspective:1000px] sm:h-48 animate-[fadeSlideIn_0.35s_ease-out] focus-visible:outline-2 focus-visible:outline-teal"
              >
                <div className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] [transform-style:preserve-3d] motion-reduce:duration-0 group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)] group-[.is-flipped]:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex items-stretch overflow-hidden rounded-lg border border-cream-darker bg-white-warm [backface-visibility:hidden]">
                    <div
                      className={`relative w-[42%] shrink-0 bg-gradient-to-br ${mentor.color}`}
                    >
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        fill
                        sizes="(min-width: 1024px) 130px, (min-width: 768px) 20vw, 42vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="relative flex flex-1 flex-col justify-center gap-1 p-4 sm:p-5">
                      <h3 className="line-clamp-2 text-base font-bold sm:text-lg leading-tight text-ink">
                        {mentor.name}
                      </h3>
                      <p className="line-clamp-2 text-[11px] font-semibold uppercase leading-tight tracking-wider text-teal-dark">
                        {mentor.role}
                      </p>
                      <p className="line-clamp-1 text-[15px] leading-snug text-ink-soft">
                        {mentor.context}
                      </p>
                      <span className="mt-3 flex h-7 w-7 items-center justify-center self-end text-teal-dark">
                        <ChevronIcon direction="right" />
                      </span>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-lg border border-teal/40 bg-[#F2EAD9] p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-5">
                    <p className="text-[13px] leading-snug text-ink sm:text-sm">
                      {mentor.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasSlider && (
            <div className="mt-6 flex justify-center gap-3 xl:mt-0 xl:block">
              <button
                type="button"
                onClick={() => setStart((s) => Math.max(0, s - STEP))}
                disabled={start === 0}
                aria-label="Previous mentors"
                className="flex h-10 w-10 items-center xl:absolute xl:-left-4 xl:top-1/2 xl:-translate-x-full xl:-translate-y-1/2 justify-center rounded-full border border-ink/15 bg-white-warm text-ink shadow-sm transition hover:border-teal-dark hover:text-teal-dark disabled:cursor-not-allowed disabled:opacity-30 xl:-left-6"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={() => setStart((s) => Math.min(maxStart, s + STEP))}
                disabled={start === maxStart}
                aria-label="Next mentors"
                className="flex h-10 w-10 items-center xl:absolute xl:-right-4 xl:top-1/2 xl:translate-x-full xl:-translate-y-1/2 justify-center rounded-full border border-ink/15 bg-white-warm text-ink shadow-sm transition hover:border-teal-dark hover:text-teal-dark disabled:cursor-not-allowed disabled:opacity-30 xl:-right-6"
              >
                <ChevronIcon direction="right" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
