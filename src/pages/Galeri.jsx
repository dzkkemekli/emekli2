import SectionHeading from "@/components/sections/SectionHeading"
import VideoShorts from "@/components/sections/VideoShorts"
import Gallery from "@/components/sections/Gallery"

export default function Galeri() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Anılar"
        title="Galeri"
        description="Yıllara yayılan fotoğraf ve video arşivinden bir seçki. Videolara dokunarak izleyin, fotoğraflara dokunarak tam ekran büyütün."
      />

      <div className="mt-14 space-y-16">
        <div>
          <h2 className="mb-6 font-serif text-2xl font-semibold">Videolar</h2>
          <VideoShorts />
        </div>
        <div>
          <h2 className="mb-6 font-serif text-2xl font-semibold">Fotoğraflar</h2>
          <Gallery />
        </div>
      </div>
    </section>
  )
}
