import { cn } from "@/lib/utils"

export default function SectionHeading({ eyebrow, title, description, className }) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
