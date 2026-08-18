import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import { motion } from "motion/react"
import { MapPin, Calendar, Building2 } from "lucide-react"

import "leaflet/dist/leaflet.css"

import { postings } from "@/config/site"

// Vite ile leaflet marker ikonlarını düzelt
const pinIcon = L.divIcon({
  className: "military-pin",
  html: `<span style="display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:var(--primary,#4a5d23);border:2px solid var(--background,#f6f4ee);box-shadow:0 2px 6px rgba(0,0,0,0.35)"><span style="transform:rotate(45deg);color:var(--background,#f6f4ee);font-size:13px;font-weight:700">★</span></span>`,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -26],
})

// Tüm pinleri kapsayan bounds — boşsa Türkiye ortasını varsayılan yap.
const bounds =
  postings.length > 0
    ? L.latLngBounds(postings.map((p) => p.coords))
    : L.latLngBounds([36, 26], [42, 45])

// Pinleri ekrana sığdıran yardımcı bileşen — viewport'a göre padding.
function FitBounds() {
  const map = useMap()

  useEffect(() => {
    const fit = () => {
      const isMobile = window.innerWidth < 640
      map.fitBounds(bounds, {
        paddingTopLeft: isMobile ? [16, 16] : [60, 60],
        paddingTopRight: isMobile ? [16, 16] : [60, 60],
        maxZoom: isMobile ? 6 : 8,
      })
    }
    fit()
    map.on("resize", fit)
    return () => map.off("resize", fit)
  }, [map])

  return null
}

export default function PostingMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <MapPin className="size-4 text-primary" />
        <p className="text-sm font-semibold text-foreground">Görev Yerleri Haritası</p>
        <span className="ml-auto text-xs text-muted-foreground">
          Pinlere dokunun
        </span>
      </div>
      <div className="aspect-[4/3] w-full sm:aspect-[16/9]">
        <MapContainer
          center={[39.0, 35.5]}
          zoom={6}
          scrollWheelZoom={false}
          className="size-full"
          style={{ background: "#e7e3d8" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBounds />
          {postings.map((posting) => (
            <Marker
              key={posting.id}
              position={posting.coords}
              icon={pinIcon}
            >
              <Popup>
                <div className="min-w-[180px]">
                  <p className="font-serif text-base font-semibold">{posting.location}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Building2 className="size-3" />
                    {posting.unit}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    {posting.period}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed">{posting.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </motion.div>
  )
}
