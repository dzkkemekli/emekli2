import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { Sunrise } from "lucide-react"

import { profile } from "@/config/site"

function diffParts(target) {
  const now = Date.now()
  const ms = Math.max(0, now - target)
  const days = Math.floor(ms / 86400000)
  const hours = Math.floor((ms % 86400000) / 3600000)
  const minutes = Math.floor((ms % 3600000) / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  return { days, hours, minutes, seconds }
}

function pad(n) {
  return String(n).padStart(2, "0")
}

// Tek haneli basamakları animasyonlu flip ile gösteren küçük kutu
function FlipUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border border-primary/20 bg-background/80 sm:h-11 sm:w-11">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ y: -14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 14, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="font-serif text-base font-semibold tabular-nums text-foreground sm:text-lg"
          >
            {pad(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
    </div>
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
    const from = 0
    const to = parts.days
    const tick = (now) => {
      const p = Math.min((now - start) / 1200, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCountedDays(Math.round(from + (to - from) * eased))
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
    <section ref={ref} className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-card to-secondary/5 p-6 text-center shadow-sm sm:p-8"
      >
        {/* Dekoratif güneş rozeti */}
        <div className="mb-3 flex justify-center">
          <motion.span
            initial={{ rotate: -20, scale: 0.8, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary"
          >
            <Sunrise className="size-5" />
          </motion.span>
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Emeklilik Sayacı
        </p>

        <div className="mt-4 flex items-baseline justify-center gap-2">
          <motion.span
            key={countedDays}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="font-serif text-5xl font-semibold tabular-nums text-primary sm:text-6xl"
          >
            {countedDays}
          </motion.span>
          <span className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            gündür
          </span>
        </div>
        <p className="mt-1 font-serif text-lg text-foreground/80 sm:text-xl">
          emeklisin 🎖️
        </p>

        {/* Canlı saat */}
        <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
          <FlipUnit value={parts.hours} label="Saat" />
          <span className="font-serif text-xl text-muted-foreground/60">:</span>
          <FlipUnit value={parts.minutes} label="Dakika" />
          <span className="font-serif text-xl text-muted-foreground/60">:</span>
          <FlipUnit value={parts.seconds} label="Saniye" />
        </div>
      </motion.div>
    </section>
  )
}
