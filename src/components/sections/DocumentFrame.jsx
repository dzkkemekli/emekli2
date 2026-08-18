import { cn } from "@/lib/utils"

// Resmî "Hizmet Belgesi" görünümlü çerçeve — resmî kenarlık, mühür ve başlık süsleri.
export default function DocumentFrame({ children, className }) {
  return (
    <div
      className={cn(
        "relative rounded-lg border-2 border-primary/30 bg-card p-6 shadow-sm sm:p-10",
        className
      )}
    >
      {/* İç çerçeve */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-3 rounded-md border border-primary/20"
      />

      {/* Üst köşe süsleri */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-2 top-2 size-8 border-l-2 border-t-2 border-primary/50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-2 top-2 size-8 border-r-2 border-t-2 border-primary/50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-2 left-2 size-8 border-b-2 border-l-2 border-primary/50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-2 right-2 size-8 border-b-2 border-r-2 border-primary/50"
      />

      {/* Mühür — sağ üst */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-6 flex size-20 rotate-[-12deg] items-center justify-center rounded-full border-2 border-primary/40 text-center opacity-25 sm:right-10 sm:top-10"
      >
        <div className="flex flex-col leading-none text-primary">
          <span className="font-serif text-[10px] font-bold tracking-wider">HİZMET</span>
          <span className="my-0.5 h-px w-12 bg-primary/50" />
          <span className="font-serif text-[10px] font-bold tracking-wider">BELGESİ</span>
        </div>
      </div>

      <div className="relative">{children}</div>
    </div>
  )
}
