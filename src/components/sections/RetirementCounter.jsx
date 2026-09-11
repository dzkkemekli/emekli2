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

// Tek rakam hücresi — yalnızca değişen hane animasyonlanır,
// sabit hücre boyutu sayesinde yerleşim hiç oynamaz.
function Digit({ char }) {
  return (
    <span className="relative inline-block h-[1em] w-[0.62em] overflow-hidden leading-none">
      <AnimatePresence initial={false}>
        <motion.span
          key={char}
          initial={{ y: "65%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-65%", opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {char}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// Pirinç ayraç — üst boşluğu kart ile hizalanır
function Colon() {
  return (
    <span
      aria-hidden
      className="flex items-start px-0.5 pt-[0.625rem] sm:pt-[0.65rem]"
    >
      <span className="font-serif text-[1.35rem] font-semibold leading-none text-secondary/70 sm:text-2xl">
        :
      </span>
    </span>
  )
}

function TimeTile({ value, label, minDigits = 2 }) {
  const text = String(value).padStart(minDigits, "0")
  return (
    <div className="relative flex min-w-[3.15rem] flex-col items-center overflow-hidden rounded-lg border border-border bg-card px-2 py-2.5 shadow-sm sm:min-w-[4.25rem] sm:px-3">
      {/* Üst pirinç çizgi vurgusu */}
      <span
        aria-hidden
        className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent"
      />
      <div className="flex font-serif text-[1.35rem] font-semibold leading-none text-primary sm:text-2xl">
        {text.split("").map((c, i) => (
          <Digit key={`${i}:${c}`} char={c} />
        ))}
      </div>
      <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
        {label}
      </span>
    </div>
  )
}

export default function RetirementCounter() {
  const target = new Date(profile.retirementDate).getTime()
  const [parts, setParts] = useState(() => diffParts(target))
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  // Gün sayısı görünür olunca 0'dan sarılır (odometre etkisi)
  const [countedDays, setCountedDays] = useState(null)

  useEffect(() => {
    const id = setInterval(() => setParts(diffParts(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const to = diffParts(target).days
    const duration = 1100
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCountedDays(Math.round(eased * to))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setCountedDays(null) // sayım bitti — gerçek değer akışa döner
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  const days = countedDays ?? parts.days

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.38 }}
      className="relative mt-8 inline-flex flex-col gap-3 overflow-hidden rounded-xl border border-border/80 bg-card/80 p-3.5 pr-5 shadow-sm sm:p-5 sm:pr-6"
    >
      {/* Kart üstü pirinç ışık çizgisi */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent"
      />

      <div className="flex items-center gap-2">
        <Sunrise className="size-4 shrink-0 text-secondary" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Emeklilikte Geçen Zaman
        </span>
      </div>

      <div className="flex items-start gap-1.5 sm:gap-2.5">
        <TimeTile value={days} label="Gün" />
        <Colon />
        <TimeTile value={parts.hours} label="Saat" />
        <Colon />
        <TimeTile value={parts.minutes} label="Dakika" />
        <Colon />
        <TimeTile value={parts.seconds} label="Saniye" />
      </div>

      <p className="text-xs text-muted-foreground">
        {parts.days} gündür emeklisin.
      </p>
    </motion.div>
  )
}
