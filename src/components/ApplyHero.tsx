const details = [
  { label: "Applications close", value: "Date to be confirmed" },
  { label: "Decisions by", value: "Date to be confirmed" },
  { label: "Cohort starts", value: "Date to be confirmed" },
];

export default function ApplyHero() {
  return (
    <section className="border-b border-cream-darker bg-cream">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div>
            <span className="inline-flex items-center rounded-sm border border-cream-darker bg-cream-dark px-4 py-1.5 text-xs font-semibold text-teal-dark">
              Cohort 1
            </span>

            <h1 className="mt-6 font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Apply to the
              <br />
              fellowship.
            </h1>

            <p className="mt-6 max-w-md text-base text-ink-soft sm:text-lg">
              Applications take about ten minutes. We read every one and get
              back to you with a decision, not silence.
            </p>
          </div>

          <dl className="divide-y divide-cream-darker border border-cream-darker bg-white-warm">
            {details.map((detail) => (
              <div key={detail.label} className="px-6 py-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-soft/70">
                  {detail.label}
                </dt>
                <dd className="mt-2 text-base font-semibold text-ink">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
