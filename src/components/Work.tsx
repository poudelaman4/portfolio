import { ArrowUpRight, Lock } from "lucide-react"
import { projects } from "../data"
import { Reveal } from "./Reveal"

type Project = (typeof projects)[number]

function Card({ p }: { p: Project }) {
  const isPrivate = !p.href

  const inner = (
    <>
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-surface ${p.aspect}`}
        style={
          !p.image
            ? {
                background: `radial-gradient(130% 110% at 12% 0%, ${p.accent}26, transparent 55%), linear-gradient(165deg, #16161a 0%, #0b0b0d 70%)`,
              }
            : undefined
        }
      >
        {!p.image ? (
          <span
            aria-hidden
            className="pointer-events-none absolute -right-3 top-6 select-none text-[8.5rem] font-semibold leading-none tracking-tighter"
            style={{ color: p.accent, opacity: 0.14 }}
          >
            {p.id}
          </span>
        ) : (
          <img
            src={p.image}
            alt={`${p.title} project preview`}
            loading="lazy"
            className="h-full w-full object-cover opacity-80 saturate-[0.85] transition-all duration-[900ms] ease-out group-hover:scale-[1.05] group-hover:opacity-100 group-hover:saturate-100"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
          <span className="rounded-full border border-white/15 bg-ink/50 px-3 py-1 font-mono text-[11px] tracking-wider text-cream/80 backdrop-blur-md">
            {p.id} / {p.year}
          </span>
          {isPrivate ? (
            <span className="inline-flex translate-y-1 items-center gap-1.5 rounded-full border border-white/15 bg-ink/50 px-3 py-1 text-[11px] text-cream/70 backdrop-blur-md">
              <Lock className="size-3" />
              Private
            </span>
          ) : (
            <span className="grid size-10 translate-y-1 place-items-center rounded-full border border-white/15 bg-ink/50 text-cream opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:border-acid/60 group-hover:text-acid">
              <ArrowUpRight className="size-4" />
            </span>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-none tracking-[-0.03em]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-cream/60">{p.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-ink/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-cream/60 backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div
            className="mt-5 h-px w-full origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
            style={{ background: p.accent }}
          />
        </div>
      </div>
    </>
  )

  if (isPrivate) {
    return (
      <div
        className="group relative block cursor-default"
        aria-label={`${p.title} — private production work`}
      >
        {inner}
      </div>
    )
  }

  return (
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative block"
      aria-label={`${p.title} — view source on GitHub`}
    >
      {inner}
    </a>
  )
}

export function Work() {
  const left = projects.filter((_, i) => i % 2 === 0)
  const right = projects.filter((_, i) => i % 2 === 1)

  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-8 bg-acid" />
              02 — Selected work
            </p>
            <h2 className="text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              Things I've
              <br />
              <em className="font-display font-normal italic">built lately</em>.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Six products shipped at INEV Technologies, plus four open source
            projects on GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col gap-6 max-md:contents md:gap-8">
            {left.map((p, i) => (
              <Reveal
                key={p.id}
                delay={i * 0.06}
                style={{ order: projects.indexOf(p) }}
              >
                <Card p={p} />
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col gap-6 max-md:contents md:gap-8 md:pt-20">
            {right.map((p, i) => (
              <Reveal
                key={p.id}
                delay={0.06 + i * 0.06}
                style={{ order: projects.indexOf(p) }}
              >
                <Card p={p} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-surface px-6 py-6 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">
              Production code at INEV stays private. Personal projects are open
              source.
            </p>
            <a
              href="https://github.com/poudelaman4"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 text-sm font-medium text-cream transition-colors hover:text-acid"
            >
              Browse GitHub
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
