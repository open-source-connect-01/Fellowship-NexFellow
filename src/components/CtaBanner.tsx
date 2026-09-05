type CtaBannerProps = {
  subtitle?: string;
  href?: string;
  buttonText?: string;
};

export default function CtaBanner({
  subtitle,
  href = "/program",
  buttonText = "See the full program",
}: CtaBannerProps) {
  return (
    <section className="bg-cream px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 rounded-2xl bg-teal px-6 py-14 text-center shadow-lg shadow-teal/20 sm:gap-8 sm:rounded-3xl sm:py-28">
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white-warm sm:text-6xl">
            Ready to build something real?
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm text-white-warm/80 sm:text-base">
              {subtitle}
            </p>
          )}
        </div>
        <a
          href={href}
          className="inline-flex items-center gap-3 rounded-lg bg-night py-2 pl-5 pr-2 text-xs font-semibold capitalize text-cream transition-colors hover:bg-black sm:pl-7 sm:text-sm"
        >
          {buttonText}
          <span
            aria-hidden
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cream-darker/40 bg-night"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
