import { motion } from "motion/react"
import { ShieldCheck } from "lucide-react"

import SectionHeading from "@/components/sections/SectionHeading"
import Timeline from "@/components/sections/Timeline"
import RankLadder from "@/components/sections/RankLadder"
import DocumentFrame from "@/components/sections/DocumentFrame"
import { profile } from "@/config/site"

export default function Ozgecmis() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Kariyer"
        title="Özgeçmiş"
        description="Askeri kariyer boyunca kazanılan rütbeler, görevlendirilmeler ve hayatın önemli dönüm noktaları."
      />

      <div className="mt-12">
        <DocumentFrame>
          {/* Belge başlığı */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-center"
          >
            <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary">
              <ShieldCheck className="size-6" />
            </div>
            <h2 className="font-serif text-2xl font-semibold tracking-wide sm:text-3xl">
              HİZMET BELGESİ
            </h2>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {profile.name} — {profile.rank}
            </p>
            <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </motion.div>

          {/* Rütbe merdiveni (masaüstünde yan, mobilde üst) */}
          <div className="grid gap-10 lg:grid-cols-[1fr_220px] lg:gap-14">
            <div>
              <Timeline />
            </div>
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <RankLadder />
            </aside>
          </div>
        </DocumentFrame>
      </div>
    </section>
  )
}
