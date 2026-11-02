import { ArrowUp } from "lucide-react"
import { profile } from "../data"

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full bg-cream text-[11px] font-bold text-ink">
            AP
          </span>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. Designed & built with
            care.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-muted">
          <span className="hidden sm:inline">React · Tailwind · Motion</span>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 text-cream/70 transition-colors hover:text-acid"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
