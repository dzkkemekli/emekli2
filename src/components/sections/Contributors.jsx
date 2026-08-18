import { motion } from "motion/react"
import { Heart } from "lucide-react"

import { contributors } from "@/config/site"
import { cn } from "@/lib/utils"

export default function Contributors() {
  return (
    <section className="border-t border-border/70 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-8 flex items-center gap-2">
          <Heart className="size-4 text-primary" />
          <h2 className="font-serif text-xl font-semibold text-foreground">
            Emeği Geçen Silah Arkadaşları
          </h2>
          <span className="ml-auto text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {contributors.length} kişi
          </span>
        </div>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {contributors.map((person, i) => (
            <motion.li
              key={person.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: (i % 10) * 0.04 }}
              className={cn(
                "flex flex-col rounded-md border border-border bg-background/60 px-3 py-2.5",
                "transition-colors hover:border-primary/40 hover:bg-background"
              )}
            >
              <span className="truncate text-sm font-medium text-foreground">
                {person.name}
              </span>
              <span className="mt-0.5 truncate text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                {person.role}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
