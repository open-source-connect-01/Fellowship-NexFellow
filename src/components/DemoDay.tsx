const awards = [
  "Builder of the cohort",
  "Best product",
  "Best AI product",
  "Best Open Source Project",
  "Best Design",
  "Best Web3 Project",
  "Best Growth Strategy",
  "People's Choice",
];

export default function DemoDay() {
  return (
    <section className="border-b border-ink/10 bg-night text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            NexFellow Builder Fellowship{" "}
            <span className="italic text-amber">Demo Day</span>
          </h2>
          <p className="mt-5 max-w-md text-sm text-cream/70 sm:text-base">
            The fellowship comes together with one event. The top projects
            presented, live feedback, industry guests, and the wider
            NexFellow community.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-xl border border-cream/15 bg-cream/5 px-5 py-4">
              <div className="text-sm font-bold text-amber">Top 10</div>
              <div className="mt-1 text-xs text-cream/60">
                Projects presented
              </div>
            </div>
            <div className="rounded-xl border border-cream/15 bg-cream/5 px-5 py-4">
              <div className="text-sm font-bold text-amber">All fellows</div>
              <div className="mt-1 text-xs text-cream/60">
                Final showcase
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-amber">
            Assembly
          </p>
          <p className="mt-1 text-xs text-cream/60">
            Recognizing the standout builders of the cohort
          </p>
          <ul className="mt-5 space-y-3">
            {awards.map((award) => (
              <li
                key={award}
                className="flex items-center gap-3 border-b border-cream/10 pb-3 text-sm text-cream/85 last:border-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0 text-amber"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
