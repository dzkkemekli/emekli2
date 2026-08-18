import SectionHeading from "@/components/sections/SectionHeading"
import PostingGrid from "@/components/sections/PostingGrid"

export default function Gorevler() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Hizmet"
        title="Görev Yapılan Yerler"
        description="Yıllar içinde hizmet edilen birlikler, görev yerleri ve her birinden kalan izlenimler."
      />
      <div className="mt-14">
        <PostingGrid />
      </div>
    </section>
  )
}
