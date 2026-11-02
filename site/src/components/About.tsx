import { ArrowUpRight, Target } from "lucide-react"
import { profile, skills } from "../data"
import { Reveal } from "./Reveal"

const facts = [
  { k: "Based in", v: "Bharatpur, Nepal" },
  { k: "Focus", v: "Full-stack web applications" },
  { k: "Stack", v: "React, Node.js, PHP, MySQL" },
  { k: "Education", v: "B.E. Computer Engineering, 2025" },
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted">
                <span className="h-px w-8 bg-acid" />
                01 — About
              </p>
              <h2 className="text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                A developer
                <br />
                who <em className="font-display font-normal italic text-acid">ships</em>.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
                I work end-to-end: data model, API, interface — then I ship it.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {skills.slice(0, 8).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-cream/70 transition-colors hover:border-acid/40 hover:text-acid"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-cream/85 sm:text-xl">
              {profile.bio.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className={i === 0 ? "text-cream" : "text-muted"}>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                {facts.map((f) => (
                  <div key={f.k} className="bg-ink px-5 py-5">
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">
                      {f.k}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-cream">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.15}>
              <figure className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-surface p-7 sm:p-9">
                <Target className="size-7 text-acid/70" />
                <blockquote className="mt-4 text-xl leading-snug tracking-tight text-cream sm:text-2xl">
                  I'm looking for a junior full-stack role where I can own
                  features end to end and keep learning from a strong team.
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">Currently</p>
                    <p className="text-xs text-muted">Open to junior full-stack roles</p>
                  </div>
                  <a
                    href="/resume.pdf"
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 transition-colors hover:border-acid/50 hover:text-acid"
                    aria-label="Download résumé"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
