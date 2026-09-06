const stats = [
  { value: "8", label: "weeks of guided building" },
  { value: "2", label: "tracks to choose from" },
  { value: "10+", label: "live learning sessions" },
];

export default function QuoteSection() {
  return (
    <section className="border-b border-ink/10 bg-cream-dark">
      <div className="mx-auto max-w-6xl px-6 py-16 md:grid md:grid-cols-[1.6fr_1fr] md:items-center md:gap-10">
        <div className="border-l-4 border-teal pl-6">
          <p className="text-2xl font-bold italic leading-snug text-ink sm:text-4xl">
            You won&apos;t graduate with just a certificate. You&apos;ll
            graduate with something to show.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
            Every fellow leaves with a real project, practical experience,
            feedback from industry leaders, and a network of builders that
            continues beyond the fellowship.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l-[1.6px] border-cream-darker pl-4"
            >
              <div className="text-4xl font-extrabold text-teal">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-ink-soft">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
