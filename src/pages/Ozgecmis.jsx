import SectionHeading from "@/components/sections/SectionHeading"
import Timeline from "@/components/sections/Timeline"

export default function Ozgecmis() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Kariyer"
        title="Özgeçmiş"
        description="Askeri kariyer boyunca kazanılan rütbeler, görevlendirilmeler ve hayatın önemli dönüm noktaları."
      />
      <div className="mt-14">
        <Timeline />
      </div>
    </section>
  )
}
