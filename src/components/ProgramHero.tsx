const stats = [
  { label: "Duration", value: "8 weeks" },
  { label: "Format", value: "Remote, live weekly" },
  { label: "Phases", value: "3 structured phases" },
  { label: "Culminates", value: "Public demo day" },
];

export default function ProgramHero() {
  return (
    <section className="relative overflow-hidden border-b border-cream-darker bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-[36rem] bg-gradient-to-tr from-amber/25 via-amber/10 to-transparent blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
        <span className="inline-flex items-center rounded-sm border border-cream-darker bg-cream-dark px-4 py-1.5 text-xs font-semibold text-teal-dark">
          Eight weeks
        </span>

        <h1 className="mt-6 max-w-2xl font-heading text-6xl font-bold leading-tight tracking-tight sm:text-7xl">
          One Project,
          <br />
          Start to Finish.
        </h1>

        <p className="mt-6 max-w-3xl text-base text-ink-soft sm:text-lg">
          The fellowship runs in three phases: get oriented and scope your
          project, build it in public with weekly review, then polish and
          present. Here&apos;s what each week actually covers.
        </p>

        <dl className="mt-14 grid grid-cols-2 divide-y divide-cream-darker border border-cream-darker text-left sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-5">
              <dt className="text-xs font-semibold uppercase tracking-wider text-ink-soft/70">
                {stat.label}
              </dt>
              <dd className="mt-2 text-base font-semibold text-ink">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
