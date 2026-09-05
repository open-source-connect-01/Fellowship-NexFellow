const items = [
  {
    number: "01",
    title: "Learn from experts",
    description:
      "Weekly sessions with founders, engineers, product leaders, and professionals who have built and shipped in the real world.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    number: "02",
    title: "Build something real",
    description:
      "Work on your own product throughout the fellowship. Turn an idea into something people can actually use.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      />
    ),
  },
  {
    number: "03",
    title: "Get meaningful feedback",
    description:
      "Receive structured feedback from mentors and fellow builders throughout the journey. Improve your work every week.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    ),
  },
  {
    number: "04",
    title: "Showcase your work",
    description:
      "Take your project from idea to launch and present what you built at Demo Day to mentors, peers, and the NexFellow community.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941"
      />
    ),
  },
];

export default function BuiltOn() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-teal-dark">
          Program structure
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          What the fellowship is built on
        </h2>

        <div className="mt-12 grid divide-y divide-cream-darker rounded-md border border-cream-darker sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.number} className="relative overflow-hidden p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="h-5 w-5 text-teal"
              >
                {item.icon}
              </svg>
              <h3 className="mt-4 text-sm font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
              <span className="pointer-events-none absolute bottom-2 right-4 text-6xl font-extrabold text-ink/5">
                {item.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
