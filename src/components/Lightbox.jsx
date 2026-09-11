import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight, X, Play, ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// Paylaşılan tam ekran görüntüleyici — Galeri ve Zaman Çizelgesi kullanır.
// items: [{ id, type: "photo" | "video", src, poster?, caption? }]
export default function Lightbox({
  open,
  index,
  direction,
  items,
  onClose,
  onPrev,
  onNext,
  onJump,
}) {
  const [zoomed, setZoomed] = useState(false)

  const resetZoom = useCallback(() => setZoomed(false), [])
  const handlePrev = useCallback(() => {
    resetZoom()
    onPrev()
  }, [onPrev, resetZoom])
  const handleNext = useCallback(() => {
    resetZoom()
    onNext()
  }, [onNext, resetZoom])
  const handleJump = useCallback(
    (i) => {
      resetZoom()
      onJump(i)
    },
    [onJump, resetZoom]
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
      else if (e.key === "ArrowRight") handleNext()
      else if (e.key === "ArrowLeft") handlePrev()
    }
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose, handlePrev, handleNext])

  // Komşu görselleri ön-yükle
  useEffect(() => {
    if (!open) return
    ;[-1, 1].forEach((d) => {
      const n = index + d
      if (n >= 0 && n < items.length) {
        const it = items[n]
        if (it.src && it.type !== "video") {
          const img = new Image()
          img.src = it.src
        }
      }
    })
  }, [open, index, items])

  const item = items[index]
  if (!item) return null

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.96 }),
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          {/* Üst bar: sayaç + kapat */}
          <div
            className="flex items-center justify-between px-4 py-4 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-serif text-sm text-white/80">
              {index + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Kapat"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Sahne */}
          <div
            className={cn(
              "relative flex flex-1 items-center justify-center px-4 sm:px-20",
              zoomed && "overflow-auto"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Önceki */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={items.length <= 1}
              aria-label="Önceki"
              className="absolute left-2 z-10 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-30 sm:left-6 sm:size-14 cursor-pointer"
            >
              <ChevronLeft className="size-6 sm:size-7" />
            </button>

            {/* Slayt */}
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative flex max-h-[72vh] max-w-[90vw] items-center justify-center"
              >
                {item.src ? (
                  item.type === "video" ? (
                    <video
                      key={item.src}
                      src={item.src}
                      poster={item.poster}
                      controls
                      autoPlay
                      className="max-h-[72vh] max-w-[90vw] rounded-md object-contain shadow-2xl"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.caption}
                      onClick={() => setZoomed((z) => !z)}
                      className={cn(
                        "max-h-[72vh] max-w-[90vw] rounded-md object-contain shadow-2xl transition-transform duration-300",
                        zoomed
                          ? "scale-[1.8] cursor-zoom-out"
                          : "cursor-zoom-in"
                      )}
                    />
                  )
                ) : (
                  <div className="flex aspect-[4/3] max-h-[72vh] w-full max-w-2xl flex-col items-center justify-center gap-4 rounded-md border border-white/10 bg-gradient-to-br from-white/5 to-secondary/20 px-8 text-center">
                    {item.type === "video" ? (
                      <Play className="size-12 text-white/40" />
                    ) : (
                      <ImageIcon className="size-12 text-white/40" />
                    )}
                    <p className="font-serif text-lg text-white/80">
                      {item.caption}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Fotoğraf eklenecek
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Sonraki */}
            <button
              type="button"
              onClick={handleNext}
              disabled={items.length <= 1}
              aria-label="Sonraki"
              className="absolute right-2 z-10 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-30 sm:right-6 sm:size-14 cursor-pointer"
            >
              <ChevronRight className="size-6 sm:size-7" />
            </button>
          </div>

          {/* Alt: başlık + film şeridi */}
          <div
            className="px-4 pb-5 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {item.caption && (
              <p className="mb-4 text-center text-sm text-white/80">
                {item.caption}
              </p>
            )}
            <div className="flex justify-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {items.map((it, i) => (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => handleJump(i)}
                  aria-label={`${i + 1}. ögeye git`}
                  aria-current={i === index}
                  className={cn(
                    "relative size-14 shrink-0 overflow-hidden rounded-md border transition-all cursor-pointer sm:size-16",
                    i === index
                      ? "border-primary ring-2 ring-primary"
                      : "border-white/15 opacity-60 hover:opacity-100"
                  )}
                >
                  {it.src ? (
                    it.type === "video" ? (
                      <>
                        {it.poster ? (
                          <img
                            src={it.poster}
                            alt=""
                            className="size-full object-cover"
                          />
                        ) : (
                          <span className="flex size-full items-center justify-center bg-white/10 text-white/70">
                            <Play className="size-4" />
                          </span>
                        )}
                      </>
                    ) : (
                      <img src={it.src} alt="" className="size-full object-cover" />
                    )
                  ) : (
                    <span className="flex size-full items-center justify-center bg-white/5 text-white/40">
                      {it.type === "video" ? (
                        <Play className="size-4" />
                      ) : (
                        <ImageIcon className="size-4" />
                      )}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
