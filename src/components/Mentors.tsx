import Image from "next/image";

const mentors = [
  {
    name: "Aiswarya Venkitesh",
    role: "Principal Cloud Solution Architect",
    context: "Microsoft",
    image: "/mentors/aiswarya-venkitesh.png",
    color: "from-slate-700 to-slate-900",
  },
  {
    name: "Sunil Divvela",
    role: "Worldwide Senior Solutions Architect",
    context: "Amazon Web Services (AWS)",
    image: "/mentors/sunil-divvela.png",
    color: "from-amber-200 to-orange-400",
  },
  {
    name: "Tanvi Kopardekar",
    role: "Senior Product Manager",
    context: "Zoom",
    image: "/mentors/tanvi-kopardekar.png",
    color: "from-teal/40 to-teal-dark/60",
  },
  {
    name: "Serena Lekhrajani",
    role: "Software Engineer II",
    context: "Microsoft Corporation",
    image: "/mentors/serena-lekhrajani.png",
    color: "from-sky-200 to-sky-400",
  },
  {
    name: "Angus Wyllie",
    role: "Chief of Staff",
    context: "Iridium Credit",
    image: "/mentors/angus-wyllie.png",
    color: "from-slate-500 to-slate-700",
  },
  {
    name: "Nisha Sherra",
    role: "Engineering Leader",
    context: "Optum",
    image: "/mentors/nisha-sherra.png",
    color: "from-rose-200 to-rose-400",
  },
];

export default function Mentors() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex max-w-md items-center gap-3">
          <span className="whitespace-nowrap font-mono text-xs uppercase tracking-widest text-teal-dark">
            Who you&apos;ll learn from
          </span>
          <span className="h-px w-16 bg-cream-darker" />
          <span className="h-2 w-2 rotate-45 bg-teal" />
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Mentors and speakers
        </h2>
        <p className="mt-4 max-w-md text-sm text-ink-soft sm:text-base">
          Fellows learn directly from people building and operating real
          companies. Full lineup announced closer to the cohort start.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="flex h-full items-stretch overflow-hidden rounded-lg border border-cream-darker bg-white-warm"
            >
              <div
                className={`relative w-[42%] shrink-0 bg-gradient-to-br ${mentor.color}`}
              >
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  sizes="(min-width: 1024px) 161px, (min-width: 640px) 21vw, 42vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative flex flex-1 flex-col justify-center gap-1 p-5">
                <h3 className="text-lg font-bold text-ink">{mentor.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-dark">
                  {mentor.role}
                </p>
                <p className="text-sm text-ink-soft">{mentor.context}</p>
                <span className="mt-3 flex h-7 w-7 items-center justify-center self-end text-teal-dark">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
