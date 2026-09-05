const details = [
  "~10 minutes to complete",
  "Applications reviewed on a rolling basis",
  "Every applicant receives a decision",
];

export default function ApplyForm() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-dark">
          Apply now
        </span>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Ready? The form takes about 10 minutes.
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          The application takes about 10 minutes. We review every application
          carefully and select builders who are curious, committed, and ready
          to put their ideas into action.
        </p>

        <ul className="mt-6 flex flex-col gap-3">
          {details.map((detail) => (
            <li
              key={detail}
              className="flex items-center gap-3 text-sm font-medium text-ink-soft sm:text-base"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal"
              />
              {detail}
            </li>
          ))}
        </ul>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-teal px-7 py-3 text-sm font-semibold text-white-warm transition-colors hover:bg-teal-dark"
        >
          Open application form
          <span aria-hidden>&#8599;</span>
        </a>
        <p className="mt-3 text-xs text-ink-soft/70">
          Opens Google Forms in a new tab
        </p>
      </div>
    </section>
  );
}
