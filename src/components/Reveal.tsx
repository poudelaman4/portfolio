import { motion, type Variants, type MotionStyle } from "motion/react"
import type { ReactNode } from "react"

const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}

export function Reveal({
  children,
  delay = 0,
  className,
  y = 26,
  style,
}: {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
  style?: MotionStyle
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}
