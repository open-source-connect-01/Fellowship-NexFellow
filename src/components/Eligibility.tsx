const items = [
  "Have a project, idea, or skill you want to build on, even an early one",
  "Ready to commit meaningful time throughout the eight weeks",  
  "Want practical experience, honest feedback, and guidance from industry leaders",
  "Excited to build, collaborate, experiment, and ship something real",
];

export default function Eligibility() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-teal-dark">
              Eligibility
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Who it&apos;s for
            </h2>
            <p className="mt-4 max-w-sm text-sm text-ink-soft sm:text-base">
              The fellowship is selective, but not about your resume.
              It&apos;s about whether you&apos;ll actually build.
            </p>
            <a
              href="/apply"
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-teal px-7 py-3 text-sm font-semibold text-white-warm transition-colors hover:bg-teal-dark"
            >
              Apply now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <ul className="divide-y divide-cream-darker border-y border-cream-darker">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 py-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-teal" />
                <span className="text-sm text-ink sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
