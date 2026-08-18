import SectionHeading from "@/components/sections/SectionHeading"
import RibbonRack from "@/components/sections/RibbonRack"
import AwardGrid from "@/components/sections/AwardGrid"

export default function Oduller() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Onur"
        title="Takdir ve Ödüller"
        description="Hizmet süresince kazanılan takdirnameler, beratlar ve madalyalar. Bir ömürlük hizmetin yazılı tescilleri."
      />
      <div className="mt-12 space-y-10">
        <RibbonRack />
        <AwardGrid />
      </div>
    </section>
  )
}
