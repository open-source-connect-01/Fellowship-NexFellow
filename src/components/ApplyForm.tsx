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
          href="https://docs.google.com/forms/d/e/1FAIpQLSf0zGalmRgS8WSeGmGieYkRzSDCX5zo2PDSc4mxTqlTBmS4Ig/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 rounded-md bg-teal px-8 py-4 text-base font-semibold text-white-warm transition-colors hover:bg-teal-dark"
        >
          Open application form
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="h-4 w-4"
          >
            <path d="M6 14 14 6M7 6h7v7" />
          </svg>
        </a>
        <p className="mt-3 text-sm text-ink-soft/80">
          Opens Google Forms in a new tab
        </p>
      </div>
    </section>
  );
}
