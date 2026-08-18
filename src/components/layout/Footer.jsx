import { Link } from "react-router-dom"

import { navLinks } from "@/data/nav"

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-xl font-semibold text-foreground">Yunus Ağabey</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Bir ömür verilmiş hizmetin anıları, görev yapılan yerler ve takdir edilen
              değerler bir arada.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-border/70 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Saygı ve minnetle.
        </div>
      </div>
    </footer>
  )
}
