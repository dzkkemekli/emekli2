import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination } from "swiper/modules"
import Lightbox from "yet-another-react-lightbox"
import Video from "yet-another-react-lightbox/plugins/video"
import Captions from "yet-another-react-lightbox/plugins/captions"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import { motion } from "motion/react"
import { Play, ImageIcon } from "lucide-react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/captions.css"

import { gallery } from "@/data/gallery"

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  // Lightbox için slaytları hazırla
  const slides = gallery
    .filter((item) => item.src)
    .map((item) =>
      item.type === "video"
        ? { type: "video", src: item.src, poster: item.poster, caption: item.caption }
        : { src: item.src, caption: item.caption }
    )

  const openLightbox = (itemIndex) => {
    const filtered = gallery.filter((g) => g.src)
    if (filtered.length === 0) return
    const clickedId = gallery[itemIndex].id
    const idx = filtered.findIndex((g) => g.id === clickedId)
    setIndex(idx >= 0 ? idx : 0)
    setOpen(true)
  }

  return (
    <>
      {/* Swiper karosel */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45 }}
      >
        <Swiper
          modules={[FreeMode, Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          freeMode
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          className="!pb-12"
        >
          {gallery.map((item, i) => (
            <SwiperSlide key={item.id}>
              <button
                type="button"
                onClick={() => openLightbox(i)}
                disabled={!item.src}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-card cursor-pointer disabled:cursor-default"
              >
                {item.src ? (
                  item.type === "video" ? (
                    <>
                      {item.poster && (
                        <img
                          src={item.poster}
                          alt={item.caption}
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
                {item.src && item.caption && (
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {item.caption}
                  </span>
                )}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Video, Captions, Zoom]}
      />
    </>
  )
}
