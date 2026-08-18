import SectionHeading from "@/components/sections/SectionHeading"
import Gallery from "@/components/sections/Gallery"

export default function Galeri() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Anılar"
        title="Galeri"
        description="Yıllara yayılan fotoğraf ve video arşivinden bir seçki. Görünüm değiştirici ile karosel, akış veya ızgara modunda gezin; öğelere dokunarak tam ekran büyütün ve ok tuşları ile geçin."
      />
      <div className="mt-14">
        <Gallery />
      </div>
    </section>
  )
}
