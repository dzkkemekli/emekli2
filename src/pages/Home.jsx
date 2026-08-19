import FlagBanner from "@/components/sections/FlagBanner"
import Hero from "@/components/sections/Hero"
import SectionOverview from "@/components/sections/SectionOverview"
import VideoSection from "@/components/sections/VideoSection"
import SectionHeading from "@/components/sections/SectionHeading"
import Gallery from "@/components/sections/Gallery"

export default function Home() {
  return (
    <>
      <FlagBanner />
      <Hero />
      <section id="galeri" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Anılar"
          title="Galeri"
          description="Yıllara yayılan fotoğraf arşivinden bir seçki. Görünüm değiştirici ile karosel, akış veya ızgara modunda gezin; öğelere dokunarak tam ekran büyütün ve ok tuşları ile geçin."
        />
        <div className="mt-14">
          <Gallery />
        </div>
      </section>
      <SectionOverview />
      <VideoSection />
    </>
  )
}
