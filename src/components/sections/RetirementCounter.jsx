import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { Sunrise } from "lucide-react"

import { profile } from "@/config/site"

function diffParts(target) {
  const ms = Math.max(0, Date.now() - target)
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms % 86400000) / 3600000),
    minutes: Math.floor((ms % 3600000) / 60000),
    seconds: Math.floor((ms % 60000) / 1000),
  }
}

const pad = (n) => String(n).padStart(2, "0")

function Flip({ value }) {
  return (
    <span className="relative inline-flex min-w-[1.6ch] items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 8, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="tabular-nums"
        >
          {pad(value)}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function RetirementCounter() {
  const target = new Date(profile.retirementDate).getTime()
  const [parts, setParts] = useState(() => diffParts(target))
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [countedDays, setCountedDays] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const to = parts.days
    const tick = (now) => {
      const p = Math.min((now - start) / 1100, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCountedDays(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, parts.days])

  useEffect(() => {
    const id = setInterval(() => setParts(diffParts(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.38 }}
      className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/5 px-4 py-2"
    >
      <Sunrise className="size-4 shrink-0 text-primary" />
      <span className="text-sm text-muted-foreground">
        <motion.span
          key={countedDays}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="font-serif text-base font-semibold tabular-nums text-primary"
        >
          {countedDays}
        </motion.span>{" "}
        gündür emeklisin
        <span className="ml-2 font-medium tabular-nums text-foreground/80">
          <Flip value={parts.hours} />:<Flip value={parts.minutes} />:
          <Flip value={parts.seconds} />
        </span>
      </span>
    </motion.div>
  )
}
