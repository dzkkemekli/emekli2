import { motion } from "motion/react"

// Türk bayrağı SVG — resmi geometrik konstrüksiyona uygun (hilal + 5 köşeli yıldız).
// Boyut ne kadar küçük olursa olsun keskin görünür; harici görsel gerekmez.
const TurkishFlagSvg = ({ className }) => (
  <svg
    viewBox="0 0 1200 800"
    className={className}
    role="img"
    aria-label="Türk bayrağı"
  >
    <rect width="1200" height="800" fill="#E30A17" />
    <defs>
      <mask id="tr-crescent">
        <circle cx="400" cy="400" r="200" fill="white" />
        <circle cx="490" cy="400" r="170" fill="black" />
      </mask>
    </defs>
    <rect width="1200" height="800" fill="#ffffff" mask="url(#tr-crescent)" />
    <polygon
      points="600,400 669.1,377.5 669.1,304.9 711.8,363.7 780.9,341.2 738.2,400 780.9,458.8 711.8,436.3 669.1,495.1 669.1,422.5"
      fill="#ffffff"
    />
  </svg>
)

export default function FlagBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex items-center justify-center gap-3 overflow-hidden border-b border-border/70 bg-secondary px-4 py-2.5"
    >
      {/* İnce bayrak kırmızısı aksesuar çizgisi */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[#E30A17]"
      />

      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative block h-7 w-10 shrink-0 overflow-hidden rounded-[2px] shadow-md shadow-black/30 sm:h-8 sm:w-12"
        style={{ transformOrigin: "left center" }}
      >
        {/* Dalgalanan bayrak — solventen sabit, içeriği eğimle dalga */}
        <motion.span
          aria-hidden
          className="absolute inset-0 block"
          animate={{
            skewX: [0, -7, 5, -3, 0],
            scaleX: [1, 0.94, 1.04, 0.97, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "left center" }}
        >
          <TurkishFlagSvg className="size-full" />
        </motion.span>

        {/* Hareketli ışık parıltısı — kumaşın üzerinde gezinen yansıma */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
          }}
          animate={{ x: ["-120%", "120%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.span>
    </motion.div>
  )
}
