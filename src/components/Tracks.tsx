const tracks = [
  {
    number: "Track 01",
    title: "SaaS & Products",
    description:
      "Build software products that solve real problems for individuals, teams, or businesses.",
    tags: [
      "SaaS applications",
      "Productivity tools",
      "B2B software",
      "Consumer products",
      "Marketplaces",
    ],
  },
  {
    number: "Track 02",
    title: "AI & Agents",
    description:
      "Build intelligent products using AI, LLMs, agents, and automation.",
    tags: [
      "AI applications",
      "AI agents",
      "AI automation",
      "LLM products",
      "AI developer tools",
    ],
  },
  {
    number: "Track 03",
    title: "Developer & Open Source",
    description:
      "Build tools and platforms that developers and technical teams actually use.",
    tags: [
      "Developer tools",
      "APIs & platforms",
      "Open source projects",
      "Infrastructure",
      "Cloud & DevOps",
    ],
  },
  {
    number: "Track 04",
    title: "Web3 & Emerging Tech",
    description:
      "Build software around new technologies and emerging digital ecosystems.",
    tags: [
      "Web3 applications",
      "Blockchain",
      "Decentralized platforms",
      "Digital identity",
      "Emerging technologies",
    ],
  },
];

export default function Tracks() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-dark">
          Specializations
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Choose your track
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          Every fellow chooses a track based on the kind of software they
          want to create, then takes it from idea to working product.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="rounded-sm border border-cream-darker bg-gradient-to-tr from-white-warm via-white-warm to-teal/10 p-7"
            >
              <span className="inline-block rounded-sm border border-teal/20 bg-teal/5 px-2.5 py-1 text-xs font-semibold text-teal-dark">
                {track.number}
              </span>
              <h3 className="mt-4 text-3xl font-black tracking-tight text-ink">
                {track.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {track.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {track.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-cream-darker bg-cream-dark px-2.5 py-1 text-xs font-medium text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
