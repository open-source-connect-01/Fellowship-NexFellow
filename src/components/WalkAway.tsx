const items = [
  "A real project",
  "A shipped MVP or prototype",
  "A portfolio case study",
  "Real user feedback",
  "Mentor feedback",
  "Industry exposure",
  "Practical product building experience",
  "A professional network",
  "A stronger personal brand",
  "A polished portfolio or GitHub",
  "Final Demo Day presentation experience",
  "Lifelong NexFellow community access",
];

export default function WalkAway() {
  return (
    <section className="border-b border-ink/10 bg-cream-dark">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-black tracking-tight sm:text-6xl md:text-7xl">
          What you&apos;ll{" "}
          <span className="whitespace-nowrap italic text-teal-dark">
            walk away
          </span>
          <br />
          with
        </h2>
        <p className="mt-4 text-sm text-ink-soft sm:text-base">
          By the end of eight weeks, every fellow should have:
        </p>

        <ul className="mt-1 divide-y divide-cream-darker border-y border-cream-darker text-left">
          {items.map((item, i) => (
            <li key={item} className="flex items-center gap-4 py-3.5">
              <span className="w-6 shrink-0 font-mono text-xs font-semibold text-teal-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-ink sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
