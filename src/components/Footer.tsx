const navLinks = [
  { label: "Program", href: "/program" },
  { label: "Apply", href: "/apply" },
  { label: "nexfellow.com", href: "/" },
];

const socials = [
  {
    label: "X",
    href: "#",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    label: "Discord",
    href: "#",
    icon: (
      <path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.1 13.1 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.009c.12.099.246.198.373.292a.077.077 0 01-.006.127c-.598.35-1.22.645-1.873.893a.076.076 0 00-.04.106c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.029 19.84 19.84 0 006.001-3.03.077.077 0 00.032-.056c.5-5.177-.838-9.673-3.549-13.66a.061.061 0 00-.031-.028z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM7.114 20.452H3.56V9h3.554v11.452z" />
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.09-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.751 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-night text-cream/70">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-base font-extrabold text-cream">
              NexFellow<span className="font-semibold text-cream/40">Fellowship</span>
            </p>

            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
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
              ))}
            </div>
          </div>

          <div className="flex gap-8 text-sm text-cream/50">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} NexFellow</p>
          <div className="flex items-center gap-3">
            <a href="#" className="transition-colors hover:text-cream/70">
              Terms and Conditions
            </a>
            <span aria-hidden>&middot;</span>
            <a href="#" className="transition-colors hover:text-cream/70">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
