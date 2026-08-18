import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Play, X } from "lucide-react"

import { featuredVideo } from "@/config/site"
import SectionHeading from "@/components/sections/SectionHeading"

// YouTube thumbnail: kullanıcı tanımlı yoksa YouTube'tan otomatik alınır.
function getThumbnail(video) {
  if (video.thumbnail) return video.thumbnail
  if (video.provider === "youtube") {
    return `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
  }
  return null
}

export default function VideoSection() {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, close])

  const thumbnail = getThumbnail(featuredVideo)
  const embedUrl =
    featuredVideo.provider === "youtube"
      ? `https://www.youtube.com/embed/${featuredVideo.id}?autoplay=1&rel=0`
      : null

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Anı Filmi"
        title={featuredVideo.title}
        description={featuredVideo.description}
      />

      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="group relative mt-10 block aspect-video w-full overflow-hidden rounded-lg border border-border bg-black cursor-pointer"
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={featuredVideo.title}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-gradient-to-br from-secondary/30 to-muted">
            <Play className="size-12 text-primary/50" />
          </div>
        )}

        {/* Karartma katmanı */}
        <span className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />

        {/* Oynat düğmesi */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-20 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg transition-transform duration-300 group-hover:scale-110 sm:size-24">
            <Play className="size-8 sm:size-10" />
          </span>
        </span>

        {/* Başlık katmanı */}
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-left">
          <span className="block font-serif text-lg text-white sm:text-xl">
            {featuredVideo.title}
          </span>
        </span>
      </motion.button>

      {/* Modal oynatıcı */}
      <AnimatePresence>
        {open && embedUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Kapat"
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
            >
              <X className="size-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="aspect-video w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={embedUrl}
                title={featuredVideo.title}
                className="size-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
