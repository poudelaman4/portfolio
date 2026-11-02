import { useState } from "react"
import { ArrowUpRight, Check, Copy } from "lucide-react"
import { profile, socials } from "../data"
import { Reveal } from "./Reveal"
import { Magnetic } from "./Interactive"

const brands: Record<string, React.ReactNode> = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]" aria-hidden>
      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.17 9.05 7.57 10.52.55.1.75-.24.75-.53v-2.06c-3.08.67-3.73-1.3-3.73-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.68.08-.68 1.11.08 1.7 1.14 1.7 1.14.99 1.7 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.41.1-2.94 0 0 .93-.3 3.05 1.13a10.5 10.5 0 0 1 5.55 0c2.12-1.43 3.05-1.13 3.05-1.13.6 1.53.22 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.26-2.6 5.2-5.06 5.47.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.76.53a11.1 11.1 0 0 0 7.57-10.52C23.1 5.33 18.27.5 12 .5Z" />
    </svg>
  ),
  mail: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-[18px]"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[16px]" aria-hidden>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.03 4.13H5.06l12.02 15.64Z" />
    </svg>
  ),
  dribbble: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm7.94 5.53a10.2 10.2 0 0 1 2.31 6.38c-.34-.07-3.73-.76-7.15-.33-.08-.17-.15-.35-.23-.53-.21-.5-.44-.99-.68-1.47 3.78-1.54 5.5-3.75 5.75-4.05ZM12 1.73c2.6 0 4.98.98 6.79 2.58-.21.3-1.76 2.37-5.4 3.74-1.68-3.09-3.55-5.62-3.84-6.01.79-.2 1.61-.31 2.45-.31ZM7.63 2.77c.28.38 2.11 2.92 3.81 5.94-4.8 1.28-9.04 1.26-9.5 1.26A10.3 10.3 0 0 1 7.63 2.77ZM1.73 12v-.31c.44.01 5.44.07 10.58-1.47.29.58.57 1.17.83 1.76-.14.04-.28.08-.41.12-5.31 1.71-8.13 6.39-8.37 6.79A10.26 10.26 0 0 1 1.73 12Zm10.27 10.27c-2.38 0-4.57-.82-6.3-2.2.18-.38 2.27-4.4 8.08-6.43l.07-.02a42.9 42.9 0 0 1 2.21 7.85 10.2 10.2 0 0 1-4.06.8Zm5.71-1.83a44.5 44.5 0 0 0-2.01-7.42c3.22-.51 6.04.33 6.39.44a10.27 10.27 0 0 1-4.38 6.98Z" />
    </svg>
  ),
}

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[520px] bg-[radial-gradient(60%_100%_at_50%_100%,rgba(201,247,90,0.14),transparent_70%)]"
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-acid" />
            04 — Contact
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="max-w-4xl text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.94] tracking-[-0.045em]">
            Have a role?
            <br />
            Let's make it{" "}
            <em className="font-display font-normal italic text-acid">real</em>.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted">
            I'm open to junior full-stack roles and freelance web work. Tell me
            what you're building — I'll reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic strength={0.14} className="w-full sm:w-auto">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-cream px-6 py-4 text-sm font-semibold text-ink transition-colors hover:bg-acid sm:w-auto"
              >
                {profile.email}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>

            <button
              onClick={copy}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-4 text-sm text-cream/80 transition-colors hover:border-white/35 hover:bg-white/5"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-acid" /> Copied
                </>
              ) : (
                <>
                  <Copy className="size-4" /> Copy email
                </>
              )}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full border border-white/10 text-cream/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-acid/50 hover:text-acid"
                >
                  {brands[s.icon]}
                </a>
              ))}
            </div>
            <p className="flex items-center gap-2 text-xs text-muted">
              <span className="size-1.5 animate-pulse-soft rounded-full bg-acid" />
              {profile.location} · {profile.timezone}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
