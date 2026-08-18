import SectionHeading from "@/components/sections/SectionHeading"
import PostingMap from "@/components/sections/PostingMap"
import PostingGrid from "@/components/sections/PostingGrid"

export default function Gorevler() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Hizmet"
        title="Görev Yapılan Yerler"
        description="Yıllar içinde hizmet edilen birlikler, görev yerleri ve her birinden kalan izlenimler. Harita üzerinden pinlere dokunarak detayları görebilirsiniz."
      />
      <div className="mt-14 space-y-12">
        <PostingMap />
        <PostingGrid />
      </div>
    </section>
  )
}
