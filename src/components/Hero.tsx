const stats = [
  { label: "Duration", value: "8 weeks" },
  { label: "Format", value: "Remote, live weekly" },
  { label: "Who it's for", value: "Ambitious builders" },
  { label: "Admission", value: "Rolling basis" },
];

export default function Hero() {
  return (
    <section className="border-b border-cream-darker bg-cream">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-10 text-center sm:pt-20 sm:pb-16">
        <span className="inline-flex items-center rounded-sm border border-cream-darker bg-cream-dark px-4 py-1.5 text-xs font-semibold text-teal-dark">
          Cohort 1 &middot; Applications open
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Build something the
          <br />
          world actually needs.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base text-ink-soft sm:text-lg">
          A selective fellowship for builders who love to ship, learn from
          industry leaders, build real projects, and develop the skills,
          network, and experience needed to stand out.
        </p>

        <div className="mt-8 mb-12 flex flex-wrap items-center justify-center gap-4 sm:mb-35">
          <a
            href="/apply"
            className="rounded-sm bg-teal px-7 py-3 text-sm font-semibold text-white-warm transition-colors hover:bg-teal-dark"
          >
            Apply now
          </a>
          <a
            href="/program"
            className="rounded-sm border border-ink/20 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
          >
            See the program
          </a>
        </div>

        <dl className="mx-auto mt-10 mb-12 grid max-w-6xl grid-cols-2 divide-x divide-y divide-cream-darker border border-cream-darker text-left sm:mt-16 sm:mb-40 sm:grid-cols-4 sm:divide-y-0">
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
