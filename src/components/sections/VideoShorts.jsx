import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Play, X } from "lucide-react"

import { videoShorts } from "@/config/site"
import { cn } from "@/lib/utils"

function getThumb(v) {
  if (v.thumbnail) return v.thumbnail
  if (v.provider === "youtube") return `https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`
  return null
}

function getEmbed(v) {
  if (v.provider === "youtube") return `https://www.youtube.com/embed/${v.videoId}?autoplay=1&rel=0`
  return null
}

export default function VideoShorts() {
  const [active, setActive] = useState(null)

  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    if (!active) return
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
  }, [active, close])

  return (
    <>
      <motion.ul
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {videoShorts.map((v, i) => (
          <li key={v.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
            >
              <button
                type="button"
                onClick={() => setActive(v)}
                className="group/thumb relative block aspect-video w-full overflow-hidden rounded-lg border border-border bg-black cursor-pointer"
              >
                {getThumb(v) ? (
                  <img
                    src={getThumb(v)}
                    alt={v.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center bg-gradient-to-br from-secondary/30 to-muted">
                    <Play className="size-8 text-primary/50" />
                  </div>
                )}
                <span className="absolute inset-0 bg-black/20 transition-opacity group-hover/thumb:bg-black/35" />
                <span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-primary shadow transition-transform group-hover/thumb:scale-110">
                  <Play className="size-5" />
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-left">
                  <span className="block truncate text-xs text-white sm:text-sm">
                    {v.title}
                  </span>
                </span>
              </button>
            </motion.div>
          </li>
        ))}
      </motion.ul>

      <AnimatePresence>
        {active && getEmbed(active) && (
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
                src={getEmbed(active)}
                title={active.title}
                className={cn("size-full")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
