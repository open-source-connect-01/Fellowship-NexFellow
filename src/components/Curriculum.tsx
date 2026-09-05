const weeks = [
  {
    week: "Week 01",
    phase: "Get oriented",
    title: "Orientation and idea validation",
    description:
      "Meet your cohort, understand how the fellowship runs, and lock in the project you'll build for the next eight weeks.",
  },
  {
    week: "Week 02",
    phase: "Get oriented",
    title: "Foundations",
    description:
      "Scope your first milestone, get matched with a mentor, and learn how the peer review process works.",
  },
  {
    week: "Week 03",
    phase: "Build in public",
    title: "Build sprint one",
    description:
      "Ship a first working version of your project and get your first round of structured peer feedback.",
  },
  {
    week: "Week 04",
    phase: "Build in public",
    title: "Guest session and mentor hours",
    description:
      "Hear from an industry leader on how they actually built and shipped, then bring your open questions to mentor office hours.",
  },
  {
    week: "Week 05",
    phase: "Build in public",
    title: "Build sprint two",
    description:
      "Iterate on the feedback from week three and take on the hardest part of your build.",
  },
  {
    week: "Week 06",
    phase: "Build in public",
    title: "Second guest session and deep review",
    description:
      "A second industry leader session, followed by a full peer review round on your near finished project.",
  },
  {
    week: "Week 07",
    phase: "Show your work",
    title: "Polish and prepare",
    description:
      "Refine your project based on final feedback and put together your demo day presentation.",
  },
  {
    week: "Week 08",
    phase: "Show your work",
    title: "Demo day",
    description:
      "Present your finished project to mentors, peers, and the wider NexFellow community.",
    highlight: true,
  },
];

export default function Curriculum() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-dark">
          The curriculum
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Week by week
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          Every week combines a live session, build time, and structured
          feedback.
        </p>

        <div className="mt-10 divide-y divide-cream-darker border-t border-cream-darker">
          {weeks.map((item) => (
            <div
              key={item.week}
              className={`flex flex-col gap-1 rounded-lg px-4 py-5 -mx-4 sm:flex-row sm:items-center sm:gap-8 ${
                item.highlight ? "bg-amber/10" : ""
              }`}
            >
              <span
                className={`w-20 shrink-0 font-mono text-xs tracking-wide ${
                  item.highlight ? "text-amber-dark" : "text-ink-soft/70"
                }`}
              >
                {item.week}
              </span>
              <div className="w-48 shrink-0">
                <h3
                  className={`text-sm font-bold sm:text-base ${
                    item.highlight ? "text-amber-dark" : "text-ink"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs text-ink-soft/70">
                  Phase: {item.phase}
                </p>
              </div>
              <p className="text-sm text-ink-soft sm:max-w-xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
