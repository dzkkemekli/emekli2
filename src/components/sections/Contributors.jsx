import { motion } from "motion/react"
import { Heart } from "lucide-react"

import { contributors } from "@/config/site"

export default function Contributors() {
  return (
    <section className="border-t border-border/70 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-8 flex items-center gap-2">
          <Heart className="size-4 text-primary" />
          <h2 className="font-serif text-xl font-semibold text-foreground">
            Emeği Geçenler
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contributors.map((person, i) => (
            <motion.li
              key={person.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="rounded-lg border border-border bg-background/60 p-4"
            >
              <p className="font-serif text-base font-semibold text-foreground">
                {person.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {person.role}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
