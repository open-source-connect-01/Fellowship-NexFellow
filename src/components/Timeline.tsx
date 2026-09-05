const weeks = [
  {
    week: "Week 01",
    title: "Orientation.",
    description: "Meet your cohort and define your project.",
  },
  {
    week: "Week 02",
    title: "Foundations.",
    description: "Scope the build and meet your mentor.",
  },
  {
    week: "Week 03",
    title: "Build sprint.",
    description: "Ship a first working version.",
  },
  {
    week: "Week 04",
    title: "Guest session.",
    description: "Talk and office hours with an industry leader.",
  },
  {
    week: "Week 05",
    title: "Build sprint.",
    description: "Iterate on feedback from your review.",
  },
  {
    week: "Week 06",
    title: "Deep review.",
    description: "A second guest session and full peer review round.",
  },
  {
    week: "Week 07",
    title: "Polish.",
    description: "Refine your build and prepare your presentation.",
  },
  {
    week: "Week 08",
    title: "Demo day.",
    description: "Present your work to the fellowship and NexFellow community.",
    highlight: true,
  },
];

export default function Timeline() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-teal" />
          <span className="h-1.5 w-1.5 rotate-45 bg-teal" />
          <span className="h-px w-10 bg-teal" />
        </div>

        <h2 className="mt-6 text-center text-6xl font-extrabold tracking-tight sm:text-7xl">
          Eight weeks, one build
        </h2>
        <p className="mt-3 text-center text-sm text-ink-soft sm:text-base">
          From orientation to demo day, every week moves your project forward.
        </p>

        <ol className="mx-auto mt-14 max-w-2xl">
          {weeks.map((item, i) => (
            <li key={item.week} className="relative flex gap-4">
              <span
                className={`hidden w-16 shrink-0 pt-3 font-mono text-xs font-semibold sm:block ${
                  item.highlight ? "text-amber-dark" : "text-teal-dark"
                }`}
              >
                {item.week}
              </span>

              <div className="relative flex shrink-0 flex-col items-center">
                {i !== weeks.length - 1 && (
                  <span className="absolute top-4 h-full w-px bg-cream-darker" />
                )}
                <span
                  className={`relative z-10 mt-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border-2 bg-cream ${
                    item.highlight ? "border-amber" : "border-teal"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      item.highlight ? "bg-amber" : "bg-teal"
                    }`}
                  />
                </span>
              </div>

              <div
                className={`mb-4 flex-1 rounded-sm border border-l-2 px-4 py-3 text-sm ${
                  item.highlight
                    ? "border-amber/40 border-l-amber bg-amber/10"
                    : "border-cream-darker border-l-teal bg-white-warm"
                }`}
              >
                <span
                  className={`block font-mono text-xs font-semibold sm:hidden ${
                    item.highlight ? "text-amber-dark" : "text-teal-dark"
                  }`}
                >
                  {item.week}
                </span>
                <span
                  className={`font-bold ${
                    item.highlight ? "text-amber-dark" : "text-ink"
                  }`}
                >
                  {item.title}
                </span>{" "}
                <span className="text-ink-soft">{item.description}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
