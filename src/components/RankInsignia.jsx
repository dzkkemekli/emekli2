import { rankInsigniaMap } from "@/data/ranks"
import { cn } from "@/lib/utils"

// Türk astsubay nişanını SVG olarak çizer.
// chevrons: ters-V sayısı (1-3), arc: üstteki yay, stars: yıldız sayısı, retired: emekli rozeti
function InsigniaSvg({ chevrons = 0, arc = false, stars = 0, retired = false }) {
  // Chevron koordinatları (24x32 viewBox)
  const chevronYs = [8, 13, 18]
  return (
    <svg
      viewBox="0 0 24 32"
      className="size-full"
      role="img"
      aria-label={
        retired
          ? "Emekli astsubay nişanı"
          : `${chevrons} chevron${chevrons > 1 ? "s" : ""}${arc ? " arc" : ""}${stars ? ` ${stars} star${stars > 1 ? "s" : ""}` : ""}`
      }
    >
      {/* Arkaya yıldızlar */}
      {Array.from({ length: stars }).map((_, i) => (
        <g key={`star-${i}`} transform={`translate(${8 + i * 8}, 4)`}>
          <path
            d="M4 0 L5 2.8 L8 2.8 L5.6 4.6 L6.5 7.4 L4 5.6 L1.5 7.4 L2.4 4.6 L0 2.8 L3 2.8 Z"
            fill="currentColor"
          />
        </g>
      ))}

      {/* Arc (yay) — en üst chevron'un üzerinde */}
      {arc && (
        <path
          d="M3 7 Q12 1.5 21 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}

      {/* Chevrons (ters-V) */}
      {Array.from({ length: chevrons }).map((_, i) => (
        <path
          key={`chevron-${i}`}
          d={`M3 ${chevronYs[i]} L12 ${chevronYs[i] - 5} L21 ${chevronYs[i]}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      {/* Emekli rozeti — küçük yay altında "E" yerine çapraz bayrak çizgisi */}
      {retired && (
        <g transform="translate(0, 24)" opacity="0.55">
          <line x1="4" y1="2" x2="20" y2="2" stroke="currentColor" strokeWidth="1" />
        </g>
      )}
    </svg>
  )
}

export default function RankInsignia({ rank, className, size = 40 }) {
  const data = rankInsigniaMap[rank]
  if (!data) return null

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-primary/10 text-primary",
        className
      )}
      style={{ width: size, height: (size * 4) / 3 }}
    >
      <InsigniaSvg {...data} />
    </span>
  )
}
