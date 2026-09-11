import { useState, useCallback } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination } from "swiper/modules"
import { motion, AnimatePresence } from "motion/react"
import {
  Images,
  LayoutGrid,
  Columns3,
  Play,
  ImageIcon,
  Maximize2,
} from "lucide-react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import { gallery } from "@/config/site"
import { cn } from "@/lib/utils"
import Lightbox from "@/components/Lightbox"

const VIEWS = [
  { id: "carousel", label: "Karosel", icon: Images },
  { id: "feed", label: "Akış", icon: Columns3 },
  { id: "grid", label: "Izgara", icon: LayoutGrid },
]

// Akış görünümü için doğal masonry hissi veren çeşitli en-boy oranları
const FEED_ASPECTS = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[16/10]",
  "aspect-[3/4]",
]

function MediaTile({ item, aspect, onClick, eager = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative block w-full cursor-pointer overflow-hidden rounded-lg border border-border bg-card",
        aspect
      )}
    >
      {item.src ? (
        item.type === "video" ? (
          <>
            {item.poster && (
              <img
                src={item.poster}
                alt={item.caption}
                loading={eager ? "eager" : "lazy"}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <span className="absolute inset-0 flex items-center justify-center bg-black/20">
              <span className="flex size-14 items-center justify-center rounded-full bg-background/90 text-primary transition-transform group-hover:scale-110">
                <Play className="size-6" />
              </span>
            </span>
          </>
        ) : (
          <img
            src={item.src}
            alt={item.caption}
            loading={eager ? "eager" : "lazy"}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )
      ) : (
        <div className="flex size-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-muted to-secondary/10">
          {item.type === "video" ? (
            <Play className="size-8 text-primary/40" />
          ) : (
            <ImageIcon className="size-8 text-primary/40" />
          )}
          <p className="px-4 text-center text-xs text-muted-foreground">
            {item.caption}
          </p>
        </div>
      )}

      {/* Hover katmanı */}
      <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <Maximize2 className="size-4" />
      </span>
      {item.caption && (
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {item.caption}
        </span>
      )}
    </button>
  )
}

export default function Gallery() {
  const [view, setView] = useState("carousel")
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const openAt = useCallback((i) => {
    setDirection(0)
    setIndex(i)
    setOpen(true)
  }, [])

  const go = useCallback(
    (next) => {
      setIndex((cur) => {
        const total = gallery.length
        if (total === 0) return cur
        const n = (next + total) % total
        setDirection(n > cur || (cur === total - 1 && n === 0) ? 1 : -1)
        return n
      })
    },
    []
  )

  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])
  const jump = useCallback(
    (i) => {
      setDirection(i > index ? 1 : -1)
      setIndex(i)
    },
    [index]
  )

  return (
    <>
      {/* Görünüm değiştirici + öge sayısı */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div
          className="inline-flex items-center gap-1 rounded-lg border border-border bg-card p-1"
          role="tablist"
          aria-label="Galeri görünümü"
        >
          {VIEWS.map((v) => {
            const active = view === v.id
            const Icon = v.icon
            return (
              <button
                key={v.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setView(v.id)}
                className="relative inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer"
              >
                {active && (
                  <motion.span
                    layoutId="viewPill"
                    className="absolute inset-0 rounded-md bg-primary/10 ring-1 ring-primary/30"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon
                  className={cn(
                    "relative size-4",
                    active ? "text-primary" : "text-muted-foreground"
                  )}
                />
                <span
                  className={cn(
                    "relative",
                    active ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {v.label}
                </span>
              </button>
            )
          })}
        </div>

        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {gallery.length} öge
        </span>
      </div>

      {/* Görünümler */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {view === "carousel" && (
            <Swiper
              modules={[FreeMode, Pagination]}
              spaceBetween={16}
              slidesPerView={1.2}
              freeMode
              observer
              observeParents
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
              className="!pb-12"
            >
              {gallery.map((item, i) => (
                <SwiperSlide key={item.id}>
                  <MediaTile
                    item={item}
                    aspect="aspect-[4/3]"
                    eager={i < 3}
                    onClick={() => openAt(i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {view === "feed" && (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
              {gallery.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
                >
                  <MediaTile
                    item={item}
                    aspect={FEED_ASPECTS[i % FEED_ASPECTS.length]}
                    eager={i < 3}
                    onClick={() => openAt(i)}
                  />
                </motion.div>
              ))}
            </div>
          )}

          {view === "grid" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
                >
                  <MediaTile
                    item={item}
                    aspect="aspect-[4/3]"
                    eager={i < 3}
                    onClick={() => openAt(i)}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <Lightbox
        open={open}
        index={index}
        direction={direction}
        items={gallery}
        onClose={() => setOpen(false)}
        onPrev={prev}
        onNext={next}
        onJump={jump}
      />
    </>
  )
}
