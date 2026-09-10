const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nexfellow/",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM7.114 20.452H3.56V9h3.554v11.452z" />
    ),
  },
  {
    label: "X",
    href: "https://x.com/nexfellow",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/wTwm6aJUgJ",
    icon: (
      <path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.1 13.1 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.009c.12.099.246.198.373.292a.077.077 0 01-.006.127c-.598.35-1.22.645-1.873.893a.076.076 0 00-.04.106c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.029 19.84 19.84 0 006.001-3.03.077.077 0 00.032-.056c.5-5.177-.838-9.673-3.549-13.66a.061.061 0 00-.031-.028z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nexfellow/",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-night text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="text-base font-extrabold text-cream">
            NexFellow <span className="font-semibold text-cream/40">Fellowship</span>
          </p>

          <div className="mt-4 flex gap-3">
            {socials.map((social) => {
              const isExternal = social.href.startsWith("http");
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-cream/15 text-cream/70 transition-colors hover:border-cream/30 hover:text-cream"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    {social.icon}
                  </svg>
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-cream/50">
          <a href="#" className="transition-colors hover:text-cream">
            Terms and Conditions
          </a>
          <span aria-hidden className="text-lg leading-none">
            &middot;
          </span>
          <a href="#" className="transition-colors hover:text-cream">
            Privacy Policy
          </a>
          <span aria-hidden className="text-lg leading-none">
            &middot;
          </span>
          <a
            href="mailto:community@nexfellow.com"
            className="transition-colors hover:text-cream"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
