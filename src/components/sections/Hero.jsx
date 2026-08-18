import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { ArrowRight, Medal, Images, MapPin } from "lucide-react"

import { profile } from "@/config/site"
import { Button } from "@/components/ui/button"
import TextureOverlay from "@/components/sections/TextureOverlay"
import { useCountUp } from "@/lib/useCountUp"

function StatItem({ stat }) {
  const { value, ref } = useCountUp(stat.value)
  return (
    <div ref={ref}>
      <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {stat.label}
      </dt>
      <dd className="mt-1 font-serif text-2xl font-semibold text-primary">{value}+</dd>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      {/* Arka plan dokusu */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/5 via-background to-muted/40"
      />
      <TextureOverlay variant="topo" opacity={0.05} />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
        {/* Sol: metin */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            {profile.rank}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-serif text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground/90"
          >
            {profile.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <Link to="/ozgecmis">
                Özgeçmiş'i İncele
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/galeri">
                <Images />
                Galeriyi Aç
              </Link>
            </Button>
          </motion.div>

          {/* Hizmet özeti — sayar */}
          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border/70 pt-6"
          >
            {profile.stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </motion.dl>
        </div>

        {/* Sağ: portre çerçevesi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card shadow-xl">
            {profile.portrait ? (
              <img
                src={profile.portrait}
                alt={`${profile.name} portresi`}
                className="size-full object-cover"
              />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-muted to-secondary/10 text-center">
                <div className="flex size-16 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary">
                  <Medal className="size-7" />
                </div>
                <p className="px-6 text-sm text-muted-foreground">
                  Portre fotoğrafı eklenecek
                  <br />
                  <span className="text-xs">
                    src/assets/portrait.jpg
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Dekoratif rozet */}
          <div className="absolute -bottom-4 -left-4 hidden items-center gap-2 rounded-md border border-border bg-background px-4 py-3 shadow-md sm:flex">
            <MapPin className="size-4 text-primary" />
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Hizmet Yeri
              </p>
              <p className="text-sm font-semibold text-foreground">Çeşitli Birlikler</p>
            </div>
          </div>

          {/* Dekoratif köşe çizgisi */}
          <div
            aria-hidden
            className="absolute -right-3 -top-3 size-16 border-r-2 border-t-2 border-primary/40"
          />
        </motion.div>
      </div>
    </section>
  )
}
