import { cn } from "@/lib/utils"

// Askeri dokular — topografik çizgiler, kamuflaj dokusu, kağıt arka plan.
// Tek başına dekoratif; aria-hidden.
const textures = {
  topo:
    "repeating-linear-gradient(135deg, var(--foreground) 0 1px, transparent 1px 12px)",
  topoDense:
    "repeating-linear-gradient(45deg, var(--foreground) 0 1px, transparent 1px 8px), repeating-linear-gradient(-45deg, var(--foreground) 0 1px, transparent 1px 8px)",
  grid:
    "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
}

export default function TextureOverlay({ variant = "topo", opacity = 0.04, className }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
      style={{
        backgroundImage: textures[variant],
        backgroundSize: variant === "grid" ? "24px 24px" : "auto",
        opacity,
      }}
    />
  )
}
