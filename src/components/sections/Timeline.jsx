import { motion } from "motion/react"

import { career } from "@/config/site"
import RankInsignia from "@/components/RankInsignia"

export default function Timeline() {
  return (
    <div className="relative">
      {/* Ortadaki dikey çizgi — masaüstü */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block"
      />
      {/* Soldaki dikey çizgi — mobil */}
      <div
        aria-hidden
        className="absolute left-4 top-0 h-full w-px bg-border md:hidden"
      />

      <ol className="space-y-8 md:space-y-0">
        {career.map((entry, i) => {
          const isLeft = i % 2 === 0
          return (
            <motion.li
              key={entry.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative md:grid md:grid-cols-2 md:gap-12 md:py-6"
            >
              {/* Nokta */}
              <span
                aria-hidden
                className="absolute left-4 top-1.5 size-3.5 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:top-6"
              />

              {/* Kart */}
              <div
                className={
                  isLeft
                    ? "ml-12 md:ml-0 md:pr-12 md:text-right"
                    : "ml-12 md:col-start-2 md:ml-0 md:pl-12"
                }
              >
                <div className="rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md">
                  <div
                    className={
                      isLeft
                        ? "flex flex-col gap-1 md:items-end"
                        : "flex flex-col gap-1"
                    }
                  >
                    <span className="inline-flex w-fit items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                      {entry.year}
                    </span>
                    <div
                      className={
                        isLeft
                          ? "flex items-center gap-2 md:flex-row-reverse md:items-center"
                          : "flex items-center gap-2"
                      }
                    >
                      <RankInsignia rank={entry.rank} size={32} />
                      <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {entry.rank}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-2 font-serif text-lg font-semibold">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>

                  {entry.image && (
                    <div className="mt-4 overflow-hidden rounded-md border border-border">
                      <img
                        src={entry.image}
                        alt={entry.title}
                        className="aspect-video w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}
