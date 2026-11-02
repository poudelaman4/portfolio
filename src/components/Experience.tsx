import { ArrowUpRight } from "lucide-react"
import { experience } from "../data"
import { Reveal } from "./Reveal"

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-acid" />
            03 — Experience
          </p>
          <h2 className="text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            Where I've
            <br />
            <em className="font-display font-normal italic text-acid">been</em>.
          </h2>
        </div>

        <div className="border-t border-white/10">
          {experience.map((e, i) => (
            <Reveal key={`${e.company}-${e.role}`} delay={i * 0.05}>
              <div className="group grid grid-cols-1 gap-4 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.025] sm:grid-cols-[150px_1fr_auto] sm:gap-8 sm:px-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted">
                  {e.period}
                  <span className="hidden text-white/20 sm:inline">/</span>
                  <span className="text-[10px] normal-case tracking-normal text-white/30 sm:hidden">
                    {e.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                    {e.role}{" "}
                    <span className="text-muted">· {e.company}</span>
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {e.description}
                  </p>
                </div>

                <div className="flex items-start justify-between gap-4 sm:items-center">
                  <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[11px] text-cream/50 sm:inline-block">
                    {e.type}
                  </span>
                  <span className="grid size-9 place-items-center rounded-full border border-white/10 text-cream/40 transition-all duration-300 group-hover:border-acid/50 group-hover:text-acid">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-acid" />
              Open to junior full-stack roles
            </span>
            <a
              href="./resume.pdf"
              className="inline-flex items-center gap-1.5 text-cream/70 underline decoration-white/20 underline-offset-4 transition-colors hover:text-acid hover:decoration-acid/50"
            >
              Download résumé
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
