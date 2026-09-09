const stats = [
  { label: "Duration", value: "8 weeks" },
  { label: "Format", value: "Remote, live weekly" },
  { label: "Who it's for", value: "Ambitious builders" },
  { label: "Admissions", value: "Rolling basis" },
];

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-73px)] flex-col justify-center border-b border-cream-darker bg-cream">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 text-center">
        <span className="mx-auto inline-flex items-center rounded-sm border border-cream-darker bg-cream-dark px-4 py-1.5 font-mono text-sm text-teal-dark">
          Cohort 1. Applications open.
        </span>

        <h1 className="mx-auto mt-6 max-w-5xl font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-[5rem]">
          Build something the
          <br />
          world actually needs.
        </h1>

        <p className="mx-auto mt-6 max-w-4xl text-base text-ink-soft sm:text-lg">
          A selective fellowship for builders who love to ship, learn from
          industry leaders, build real projects, and develop the skills,
          network, and experience needed to stand out.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/apply"
            className="rounded-sm bg-teal px-8 py-4 text-base font-semibold text-white-warm transition-colors hover:bg-teal-dark"
          >
            Apply now
          </a>
          <a
            href="/program"
            className="rounded-sm border border-ink/20 px-8 py-4 text-base font-semibold text-ink transition-colors hover:border-ink/40"
          >
            See the program
          </a>
        </div>

        <dl className="mx-auto mt-36 grid max-w-6xl grid-cols-2 divide-x divide-y divide-cream-darker border border-cream-darker text-left sm:grid-cols-4 sm:divide-y-0">
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
