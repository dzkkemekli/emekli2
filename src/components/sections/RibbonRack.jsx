import { motion } from "motion/react"

import { awards } from "@/config/site"

// Askeri ribbon rack — renkli şerit barları.
// Tıklayınca ilgili ödül kartına kayar (id bazlı).
function RibbonBar({ ribbon, onClick, title, index }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      title={title}
      aria-label={title}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      className="group flex flex-col items-center gap-1.5 cursor-pointer"
    >
      {/* Şerit */}
      <div className="relative h-12 w-10 overflow-hidden rounded-sm shadow-sm ring-1 ring-black/10 transition-shadow group-hover:shadow-md">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: ribbon.center }}
        />
        {/* Sol & sağ panel */}
        <div
          className="absolute inset-y-0 left-0 w-1/4"
          style={{ backgroundColor: ribbon.left }}
        />
        <div
          className="absolute inset-y-0 right-0 w-1/4"
          style={{ backgroundColor: ribbon.right }}
        />
        {/* Üst parlama çizgisi */}
        <div className="absolute inset-x-0 top-0 h-1.5 bg-white/15" />
      </div>
      {/* Askı çubuğu */}
      <div className="h-0.5 w-10 bg-foreground/30" />
    </motion.button>
  )
}

export default function RibbonRack() {
  const ribbons = awards.filter((a) => a.ribbon)

  const select = (id) => {
    window.dispatchEvent(new CustomEvent("award:scrollTo", { detail: id }))
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Şeref Şeritleri
        </p>
        <h3 className="font-serif text-xl font-semibold">Ribbon Rack</h3>
        <p className="text-sm text-muted-foreground">
          Kazanılan takdir ve ödüllerin şerit temsilleri. Detay için şeride dokunun.
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
        {ribbons.map((award, i) => (
          <RibbonBar
            key={award.id}
            ribbon={award.ribbon}
            title={`${award.title} — ${award.date}`}
            index={i}
            onClick={() => select(award.id)}
          />
        ))}
      </div>
    </div>
  )
}
