import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from "lucide-react"
import { profile, stats } from "../data"
import { CountUp, Magnetic } from "./Interactive"

const ease = [0.22, 1, 0.36, 1] as const

const lines = ["I build web", "products, from", "schema to"]

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 90])
  const yText = useTransform(scrollYProgress, [0, 1], [0, -40])
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100svh] overflow-hidden pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_70%_-10%,rgba(201,247,90,0.10),transparent_60%),radial-gradient(50%_50%_at_10%_40%,rgba(167,139,250,0.06),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:84px_84px] [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]"
      />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-6 pb-16 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <motion.div style={{ y: reduce ? 0 : yText }} className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-acid/30 bg-acid/10 px-3 py-1.5 text-xs font-medium text-acid">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-acid opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-acid" />
              </span>
              Open to junior roles
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <MapPin className="size-3.5" />
              {profile.location} · {profile.timezone}
            </span>
          </motion.div>

          <h1 className="text-[clamp(2.9rem,7.6vw,6.6rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden py-[0.18em] -my-[0.18em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.09, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden py-[0.22em] -my-[0.22em]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.42, ease }}
              >
                <em className="font-display font-normal italic text-acid">
                  screen.
                </em>
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="mt-8 max-w-md"
          >
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.18}>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-acid"
                >
                  View selected work
                  <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
              </Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm text-cream/90 transition-colors hover:border-white/35 hover:bg-white/5"
              >
                <Mail className="size-4 text-acid" />
                Email me
                <ArrowUpRight className="size-4 opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: reduce ? 0 : yImg }}
          className="relative hidden lg:col-span-5 lg:block"
        >
          <div className="relative mx-auto w-full max-w-[420px]">
            <div
              aria-hidden
              className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(201,247,90,0.16),transparent_65%)] blur-2xl"
            />
            <Magnetic strength={0.045} className="relative z-10">
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface">
                <div className="flex items-center gap-4 border-b border-white/10 p-6">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-acid text-lg font-bold text-ink">
                    AP
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-lg font-semibold tracking-tight">
                      {profile.name}
                    </p>
                    <p className="truncate text-sm text-muted">
                      {profile.role}
                    </p>
                  </div>
                </div>

                <dl className="divide-y divide-white/10 px-6">
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">
                      Currently
                    </dt>
                    <dd className="text-right text-sm font-medium">
                      Full-Stack Developer · INEV
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">
                      Based in
                    </dt>
                    <dd className="text-right text-sm font-medium">
                      {profile.location}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">
                      Status
                    </dt>
                    <dd className="flex items-center gap-2 text-right text-sm font-medium">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-acid opacity-70" />
                        <span className="relative inline-flex size-2 rounded-full bg-acid" />
                      </span>
                      Open to junior roles
                    </dd>
                  </div>
                </dl>

                <div className="flex gap-2 border-t border-white/10 p-4">
                  <a
                    href="https://github.com/poudelaman4"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-cream/80 transition-colors hover:border-acid/50 hover:text-acid"
                  >
                    GitHub
                    <ArrowUpRight className="size-3.5" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-cream/80 transition-colors hover:border-acid/50 hover:text-acid"
                  >
                    Email
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </Magnetic>

            <div className="pointer-events-none absolute -bottom-12 -left-12 z-0 grid size-32 place-items-center rounded-full border border-white/10 bg-ink/70 backdrop-blur-md">
              <svg viewBox="0 0 200 200" className="absolute size-full animate-spin-slow">
                <defs>
                  <path
                    id="badge-circle"
                    d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
                  />
                </defs>
                <text
                  className="fill-cream/60"
                  fontSize="15"
                  letterSpacing="2.2"
                  style={{ textTransform: "uppercase" }}
                >
                  <textPath href="#badge-circle">
                    Full-stack developer · React · Node.js ·
                  </textPath>
                </text>
              </svg>
              <ArrowDownRight className="size-6 text-acid" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: reduce ? 1 : fade }}
        className="relative mx-auto max-w-[1400px] px-6 lg:px-10"
      >
        <div className="grid grid-cols-2 gap-y-8 border-t border-white/10 py-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 + i * 0.08, ease }}
              className="md:border-l md:border-white/10 md:pl-6 md:first:border-0 md:first:pl-0"
            >
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="mt-1 text-xs text-muted sm:text-[13px]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
