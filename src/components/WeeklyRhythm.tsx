const items = [
  {
    title: "Live session",
    description:
      "One weekly call with the full cohort. Some weeks are a workshop, others are a guest session with an industry leader.",
  },
  {
    title: "Build time",
    description:
      "Dedicated time to work on your own project, on your own schedule, with a clear goal for the week.",
  },
  {
    title: "Peer review",
    description:
      "Structured feedback from other fellows on what you shipped, run through NexFellow's review process.",
  },
  {
    title: "Mentor office hours",
    description:
      "Optional time with your matched mentor to work through whatever is actually blocking you.",
  },
];

export default function WeeklyRhythm() {
  return (
    <section className="border-b border-ink/10 bg-cream-dark">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-dark">
          The rhythm
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          What a typical week looks like
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          The same rhythm repeats every week, so momentum builds instead of
          resetting.
        </p>

        <div className="mt-10 grid border border-cream-darker bg-white-warm/60 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`p-10 ${
                i > 0 ? "border-t border-cream-darker" : ""
              } ${i === 1 ? "sm:border-t-0" : ""} ${
                i % 2 === 1 ? "sm:border-l sm:border-cream-darker" : ""
              }`}
            >
              <span className="block h-0.5 w-6 bg-teal" />
              <h3 className="mt-4 text-base font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
