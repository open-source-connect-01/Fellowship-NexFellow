const requirements = [
  "Love building products, projects, or ideas",
  "Have a project, idea, or skill you want to take further",
  "Can commit meaningful time to the fellowship for eight weeks",
  "Are excited to learn from industry leaders and other builders",
  "Want to build something real rather than just collect another certificate",
];

export default function ApplyRequirements() {
  return (
    <section className="border-b border-ink/10 bg-cream-dark">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-dark">
              Requirements
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Who should apply
            </h2>
            <p className="mt-4 max-w-sm text-sm text-ink-soft sm:text-base">
              The fellowship is selective. We are looking for people who
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            {requirements.map((requirement) => (
              <li
                key={requirement}
                className="flex items-start gap-4 border-b border-ink/10 pb-5"
              >
                <span
                  aria-hidden
                  className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-sm bg-teal"
                />
                <span className="text-sm font-medium text-ink sm:text-base">
                  {requirement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
