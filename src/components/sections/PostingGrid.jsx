import { useState } from "react"
import { motion } from "motion/react"
import Lightbox from "yet-another-react-lightbox"
import { MapPin, Calendar, Building2, Images } from "lucide-react"

import { postings } from "@/config/site"

export default function PostingGrid() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0, slides: [] })

  const openLightbox = (slides, index) => {
    if (slides.length === 0) return
    setLightbox({ open: true, index, slides })
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {postings.map((posting, i) => {
          const slides = (posting.gallery.length > 0 ? posting.gallery : [posting.image]).filter(
            Boolean
          )
          const hasImages = slides.length > 0

          return (
            <motion.article
              key={posting.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
            >
              {/* Fotoğraf / placeholder */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {posting.image ? (
                  <img
                    src={posting.image}
                    alt={posting.location}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center bg-gradient-to-br from-muted to-secondary/10">
                    <MapPin className="size-9 text-primary/40" />
                  </div>
                )}
                <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                  {posting.period}
                </span>
              </div>

              {/* İçerik */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-xl font-semibold">{posting.location}</h3>
                <div className="mt-2 flex flex-col gap-1.5 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Building2 className="size-4 text-primary/70" />
                    {posting.unit}
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="size-4 text-primary/70" />
                    {posting.period}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {posting.description}
                </p>

                {hasImages && (
                  <button
                    type="button"
                    onClick={() => openLightbox(slides.map((s) => ({ src: s })), 0)}
                    className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 cursor-pointer"
                  >
                    <Images className="size-4" />
                    Fotoğrafları gör ({slides.length})
                  </button>
                )}
              </div>
            </motion.article>
          )
        })}
      </div>

      <Lightbox
        open={lightbox.open}
        index={lightbox.index}
        close={() => setLightbox((s) => ({ ...s, open: false }))}
        slides={lightbox.slides}
      />
    </>
  )
}
