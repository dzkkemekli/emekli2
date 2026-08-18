import { useState } from "react"
import { motion } from "motion/react"
import Lightbox from "yet-another-react-lightbox"
import { Medal, ZoomIn } from "lucide-react"

import { awards } from "@/data/awards"

export default function AwardGrid() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = awards
    .filter((a) => a.image)
    .map((a) => ({ src: a.image, alt: a.title }))

  const openLightbox = (i) => {
    if (slides.length === 0) return
    setIndex(i)
    setOpen(true)
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((award, i) => {
          const slideIndex = slides.findIndex((s) => s.src === award.image)
          return (
            <motion.figure
              key={award.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
            >
              {/* Sertifika / placeholder */}
              <button
                type="button"
                onClick={() => openLightbox(slideIndex)}
                disabled={!award.image}
                className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden bg-muted disabled:cursor-default"
              >
                {award.image ? (
                  <>
                    <img
                      src={award.image}
                      alt={award.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                      <ZoomIn className="size-4" />
                    </span>
                  </>
                ) : (
                  <div className="flex size-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-muted to-secondary/10">
                    <div className="flex size-14 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary">
                      <Medal className="size-6" />
                    </div>
                    <p className="px-4 text-center text-xs text-muted-foreground">
                      Sertifika eklenecek
                    </p>
                  </div>
                )}
              </button>

              {/* Bilgiler */}
              <figcaption className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-lg font-semibold leading-snug">
                    {award.title}
                  </h3>
                  <span className="shrink-0 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    {award.date}
                  </span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {award.issuer}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {award.description}
                </p>
              </figcaption>
            </motion.figure>
          )
        })}
      </div>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={slides}
      />
    </>
  )
}
