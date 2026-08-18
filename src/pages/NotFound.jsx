import SectionHeading from "@/components/sections/SectionHeading"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60svh] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <SectionHeading
        title="Sayfa bulunamadı"
        description="Aradığınız sayfa taşınmış veya hiç var olmamış olabilir."
        className="mx-auto text-center"
      />
      <Button asChild className="mt-8">
        <a href="/">Anasayfaya dön</a>
      </Button>
    </section>
  )
}
