import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { ScrollText, MapPin, Images, ArrowRight } from "lucide-react"

const sections = [
  {
    to: "/ozgecmis",
    title: "Özgeçmiş",
    description: "Askeri kariyer boyunca kazanılan rütbeler ve önemli dönüm noktaları.",
    icon: ScrollText,
  },
  {
    to: "/gorevler",
    title: "Görev Yapılan Yerler",
    description: "Yıllar içinde hizmet edilen birlikler, görev yerleri ve anılar.",
    icon: MapPin,
  },
  {
    to: "/galeri",
    title: "Galeri",
    description: "Yıllara yayılan fotoğraf arşivinden bir seçki.",
    icon: Images,
  },
]

export default function SectionOverview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Bölümler
        </p>
        <h2 className="font-serif text-2xl font-semibold sm:text-3xl md:text-4xl">
          Hizmetin İzinden Bir Derleme
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {sections.map((section, i) => (
          <motion.div
            key={section.to}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Link
              to={section.to}
              className="group flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <section.icon className="size-5" />
                </span>
                <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
