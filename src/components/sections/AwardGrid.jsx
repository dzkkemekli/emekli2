import { useRef, useEffect } from "react"
import { motion } from "motion/react"
import { Medal } from "lucide-react"

import { awards } from "@/config/site"

export default function AwardGrid() {
  const cardRefs = useRef({})

  // Ribbon rack'ten gelen özel olayı dinle
  useEffect(() => {
    const handler = (e) => {
      const el = cardRefs.current[e.detail]
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" })
    }
    window.addEventListener("award:scrollTo", handler)
    return () => window.removeEventListener("award:scrollTo", handler)
  }, [])

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {awards.map((award, i) => (
        <motion.figure
          key={award.id}
          ref={(el) => (cardRefs.current[award.id] = el)}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Medal className="size-5" />
            </div>
            <span className="shrink-0 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              {award.date}
            </span>
          </div>
          <h3 className="mt-4 font-serif text-lg font-semibold leading-snug">
            {award.title}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {award.issuer}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {award.description}
          </p>
        </motion.figure>
      ))}
    </div>
  )
}
