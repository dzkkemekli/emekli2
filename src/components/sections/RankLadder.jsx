import { motion } from "motion/react"

import { rankOrder, rankInsigniaMap } from "@/data/ranks"
import RankInsignia from "@/components/RankInsignia"

// Özgeçmiş sayfasının yanında gösterilen dikey rütbe merdiveni.
// En altta en düşük rütbe, en üstte emekli — "yükseliş" görseli.
export default function RankLadder() {
  // En düşük rütbe alta, en yüksek üste gelir
  const ordered = [...rankOrder].reverse()

  return (
    <div className="relative">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        Rütbe Yükselişi
      </p>

      <div className="relative flex flex-col gap-3">
        {/* Dikey bağlantı çizgisi */}
        <div
          aria-hidden
          className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-t from-primary/20 via-primary/40 to-primary"
        />

        {ordered.map((rank, i) => {
          const data = rankInsigniaMap[rank]
          const isTop = i === 0
          return (
            <motion.div
              key={rank}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="relative flex items-center gap-3"
            >
              <RankInsignia
                rank={rank}
                size={40}
                className={isTop ? "ring-2 ring-primary/40" : ""}
              />
              <div className="leading-tight">
                <p
                  className={
                    isTop
                      ? "text-sm font-semibold text-primary"
                      : "text-sm font-medium text-foreground"
                  }
                >
                  {rank}
                </p>
                {data?.retired && (
                  <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    Emekli
                  </p>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
