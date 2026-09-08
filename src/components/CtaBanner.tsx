type CtaBannerProps = {
  eyebrow?: string[];
  subtitle?: string;
  href?: string;
  buttonText?: string;
};

export default function CtaBanner({
  eyebrow = ["Eight weeks", "Build in public", "Demo day"],
  subtitle,
  href = "/program",
  buttonText = "See the full program",
}: CtaBannerProps) {
  return (
    <section className="bg-cream px-4 py-10 sm:px-6 sm:py-16">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl bg-teal px-6 py-14 text-center shadow-lg shadow-teal/20 sm:gap-8 sm:rounded-3xl sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white-warm/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-80 sm:w-80"
        />

        <div className="relative z-10">
          {eyebrow.length > 0 && (
            <div className="mb-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-medium uppercase tracking-[0.25em] text-white-warm/60 sm:mb-6 sm:text-xs">
              {eyebrow.map((item, index) => (
                <span key={item} className="flex items-center gap-x-3">
                  {index > 0 && (
                    <span aria-hidden className="text-white-warm/40">
                      &#9670;
                    </span>
                  )}
                  {item}
                </span>
              ))}
            </div>
          )}

          <h2 className="font-heading text-3xl font-bold leading-[1.05] tracking-tight text-white-warm sm:text-6xl">
            <span className="block">Ready to build</span>
            <span className="block">something real?</span>
          </h2>

          {subtitle && (
            <p className="mt-4 text-base font-medium text-white-warm/80 sm:mt-5 sm:text-lg sm:whitespace-nowrap">
              {subtitle}
            </p>
          )}
        </div>

        <a
          href={href}
          className="relative z-10 inline-flex items-center gap-3 rounded-lg bg-night py-2 pl-5 pr-2 text-xs font-semibold capitalize text-cream transition-colors hover:bg-black sm:pl-7 sm:text-sm"
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
