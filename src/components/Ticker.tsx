import { skills } from "../data"

export function Ticker() {
  const items = [...skills, ...skills]

  return (
    <div className="relative z-10 my-6 select-none overflow-hidden border-y border-ink/20 bg-acid py-4 text-ink sm:py-6">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_right,var(--color-acid),transparent_6%,transparent_94%,var(--color-acid))]" />
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap will-change-transform motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 text-xl font-semibold uppercase tracking-[-0.01em] sm:text-3xl"
          >
            {item}
            <span aria-hidden className="text-lg leading-none opacity-40 sm:text-2xl">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
