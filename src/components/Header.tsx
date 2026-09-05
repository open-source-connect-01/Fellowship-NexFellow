"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-base font-extrabold tracking-tight sm:text-lg">
          NexFellow <span className="text-teal">Fellowship</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-8">
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <Link href="/program" className="transition-colors hover:text-ink">
              Program
            </Link>
            <Link href="/apply" className="transition-colors hover:text-ink">
              Apply
            </Link>
          </nav>

          <Link
            href="/apply"
            className="rounded-sm bg-teal px-4 py-2 text-sm font-semibold text-white-warm transition-colors hover:bg-teal-dark sm:px-5 sm:py-2.5"
          >
            <span className="sm:hidden">Apply</span>
            <span className="hidden sm:inline">Apply now</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink/10 text-ink md:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M3 3l12 12M15 3L3 15" />
              ) : (
                <path d="M2 4.5h14M2 9h14M2 13.5h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-cream px-4 py-3 text-sm font-medium text-ink-soft md:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="rounded-sm px-2 py-2 transition-colors hover:bg-cream-dark hover:text-ink"
          >
            Home
          </Link>
          <Link
            href="/program"
            onClick={() => setOpen(false)}
            className="rounded-sm px-2 py-2 transition-colors hover:bg-cream-dark hover:text-ink"
          >
            Program
          </Link>
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="rounded-sm px-2 py-2 transition-colors hover:bg-cream-dark hover:text-ink"
          >
            Apply
          </Link>
        </nav>
      )}
    </header>
  );
}
