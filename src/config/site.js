// ============================================================================
//  SİTE YAPILANDIRMASI — tek dosyadan tüm içerik yönetimi
// ============================================================================
//  Bu dosya sitenin tüm metin, görsel ve yapısal verisini içerir.
//  Yeni içerik eklemek / düzenlemek için yalnızca bu dosyayı editleyin.
//
//  GÖRSEL EKLEME:
//    1. Dosyayı `public/images/` klasörüne koyun (ör. public/images/yeni-foto.jpg)
//    2. Aşağıdaki `images` bölümüne bir satır ekleyin:
//         yeniFoto: "/images/yeni-foto.jpg",
//    3. İlgili bölümde `images.yeniFoto` olarak kullanın.
//
//  GÖRSEL YOLLARI her zaman `/images/...` ile başlar (public/ klasörü köktür).
//  Desteklenen type değerleri: "photo" | "video"
//    - photo: src = görsel yolu
//    - video: src = mp4 yolu, poster = kapak karesi (opsiyonel)
// ============================================================================

const BASE = import.meta.env.BASE_URL
const img = (p) => `${BASE}images/${p}`

const images = {
  // — Test görselleri (gerçek fotoğraflarla değiştirin) —
  foto1: img("foto-1.jpeg"),
  foto2: img("foto-2.jpeg"),
  foto3: img("foto-3.jpeg"),
  foto4: img("foto-4.jpeg"),

  // — Portre —
  // src/assets/portrait.jpg yerine public/images/ altına koyun
  portrait: img("foto-1.jpeg"),

  // — Yeni görselleri buraya ekleyin —
  // ornekFoto: img("ornek.jpg"),
}

// ----------------------------------------------------------------------------
//  KİŞİSEL BİLGİLER  (Hero + Özgeçmiş)
// ----------------------------------------------------------------------------
export const profile = {
  name: "Cemalettin ÇİFTÇİ",
  rank: "TUĞAMİRAL",
  tagline: "Bir ömür vatan uğruna, anılara yazılmış hizmet.",
  shortBio:
    "Yıllar boyunca çeşitli birliklerde görev yapmış, görevini şerefle ifa etmiş bir askerin anıları, hizmet yerleri ve takdir edilen değerleri bir araya getiren saygı anıtı.",
  portrait: images.portrait,
  // Emeklilik tarihi (YYYY-AA-GG) — sayaç bu tarihten itibaren sayar
  retirementDate: "2026-08-17",
  // Hizmet özeti — Hero'daki sayaç istatistikleri
  stats: [
    { label: "Hizmet Yılı", value: 39 },
    { label: "Görev Yeri", value: 5 },
    { label: "Takdir & Ödül", value: 6 },
  ],
  // Navbar başlığı
  brand: { initial: "C", subtitle: "Anı & Hizmet" },
}

// ----------------------------------------------------------------------------
//  GEZİNME  (Navbar + Footer)
// ----------------------------------------------------------------------------
export const navLinks = [
  { to: "/", label: "Anasayfa" },
  { to: "/ozgecmis", label: "Özgeçmiş" },
  { to: "/gorevler", label: "Görev Yapılan Yerler" },
  { to: "/oduller", label: "Takdir ve Ödüller" },
  { to: "/galeri", label: "Galeri" },
]

// ----------------------------------------------------------------------------
//  RÜTBELER  (RankInsignia bileşeni + RankLadder)
//  insignia: chevrons (ters-V sayısı 1-3), arc (üst yay), stars (yıldız),
//            retired (emekli rozeti)
// ----------------------------------------------------------------------------
export const rankInsigniaMap = {
  "Astsubay Çavuş": { chevrons: 1, arc: false, stars: 0 },
  "Astsubay Üstçavuş": { chevrons: 2, arc: false, stars: 0 },
  "Astsubay Kıdemli Üstçavuş": { chevrons: 3, arc: false, stars: 0 },
  "Astsubay Başçavuş": { chevrons: 3, arc: true, stars: 0 },
  "Astsubay Kıdemli Başçavuş": { chevrons: 3, arc: true, stars: 1 },
  "Emekli Astsubay": { chevrons: 3, arc: true, stars: 1, retired: true },
}

export const rankOrder = [
  "Astsubay Çavuş",
  "Astsubay Üstçavuş",
  "Astsubay Kıdemli Üstçavuş",
  "Astsubay Başçavuş",
  "Astsubay Kıdemli Başçavuş",
  "Emekli Astsubay",
]

// ----------------------------------------------------------------------------
//  KARİYER ZAMAN ÇİZELGESİ  (Özgeçmiş sayfası)
//  rank: rankInsigniaMap içindeki anahtarlardan biri olmalı
//  image: ilgili yıla ait fotoğraf (opsiyonel)
// ----------------------------------------------------------------------------
export const career = [
  {
    year: "1985",
    rank: "Astsubay Çavuş",
    title: "Askeri Okul Mezuniyeti",
    description:
      "Askeri okuldan mezun olarak askeri hayata ilk adım atıldı. Temel askerî eğitimlerin tamamlanması.",
    image: images.foto1,
  },
  {
    year: "1988",
    rank: "Astsubay Üstçavuş",
    title: "İlk Görev Yeri",
    description:
      "İlk rotasyon görevine başlandı. Birlik içerisinde uzmanlık alanının oluşturulması.",
    image: images.foto2,
  },
  {
    year: "1993",
    rank: "Astsubay Kıdemli Üstçavuş",
    title: "Kıdemli Görev",
    description:
      "Kıdemli rütbe ile birlikte sorumluluk alanının genişlemesi ve yeni mezunların eğitimine katkı.",
    image: images.foto3,
  },
  {
    year: "2000",
    rank: "Astsubay Başçavuş",
    title: "Birlik Komutanlığı Görevi",
    description:
      "Birlik içerisinde idari ve operasyonel sorumlulukların üstlenilmesi.",
    image: images.foto4,
  },
  {
    year: "2010",
    rank: "Astsubay Kıdemli Başçavuş",
    title: "Kıdemli Başçavuş Rütbesi",
    description:
      "En üst astsubay rütbesine ulaşılması. Yılların deneyiminin yeni nesle aktarılması.",
    image: images.foto1,
  },
  {
    year: "2020",
    rank: "Emekli Astsubay",
    title: "Emeklilik",
    description:
      "Uzun yıllar süren şerefli bir hizmetin ardından emekliye ayrılma. Bir ömrün hizmete adanması.",
    image: images.foto2,
  },
]

// ----------------------------------------------------------------------------
//  GÖREV YAPILAN YERLER  (Görevler sayfası — grid + harita)
//  coords: [lat, lng] — harita üzerinde pin konumu
//  image: kapak fotoğrafı, gallery: ek fotoğraflar dizisi
// ----------------------------------------------------------------------------
export const postings = [
  {
    id: "ankara",
    location: "Ankara",
    period: "1985 — 1988",
    unit: "Mekanize Piyade Tugayı",
    description:
      "İlk resmi görev yeri. Temel piyade eğitimi ve birlik içi uzmanlık faaliyetleri.",
    coords: [39.93, 32.86],
    image: images.foto1,
    gallery: [images.foto2, images.foto3],
  },
  {
    id: "van",
    location: "Van",
    period: "1988 — 1993",
    unit: "Sınır Tugay Komutanlığı",
    description:
      "Sınır bölgesinde güvenlik ve devriye görevleri. Yüksek irtifa ve zorlu iklim koşulları.",
    coords: [38.49, 43.38],
    image: images.foto2,
    gallery: [images.foto3, images.foto4],
  },
  {
    id: "istanbul",
    location: "İstanbul",
    period: "1993 — 2000",
    unit: "Muhafız Alayı",
    description:
      "Tören ve muhafızlık görevleri. Başkentte temsili ve protokol faaliyetlerine katkı.",
    coords: [41.01, 28.97],
    image: images.foto3,
    gallery: [images.foto4, images.foto1],
  },
  {
    id: "hatay",
    location: "Hatay",
    period: "2000 — 2010",
    unit: "Piyade Tabur Komutanlığı",
    description:
      "Birlik idari ve operasyonel sorumluluklar. Sınır güvenliği ve bölükle yönetim.",
    coords: [36.4, 36.35],
    image: images.foto4,
    gallery: [images.foto1, images.foto2],
  },
  {
    id: "izmir",
    location: "İzmir",
    period: "2010 — 2020",
    unit: "Lojistik Komutanlığı",
    description:
      "Lojistik tedarik ve sevkiyat süreçlerinin yönetimi. Kıdemli başçavuş olarak deneyim aktarımı.",
    coords: [38.42, 27.14],
    image: images.foto1,
    gallery: [images.foto2, images.foto3, images.foto4],
  },
]

// ----------------------------------------------------------------------------
//  TAKDİR VE ÖDÜLLER  (Ödüller sayfası — grid + ribbon rack)
//  ribbon: { center, left, right } — Şeref şeridi renkleri (hex)
//  image: sertifika/berat fotoğrafı (opsiyonel)
// ----------------------------------------------------------------------------
export const awards = [
  {
    id: "takdir-1",
    title: "Üstün Başarı Takdirnamesi",
    issuer: "Tugay Komutanlığı",
    date: "1990",
    description: "Gösterdiği üstün başarı ve fedakârlıktan dolayı verilen takdirname.",
    image: images.foto1,
    ribbon: { center: "#4a5d23", left: "#6b7a3a", right: "#6b7a3a" },
  },
  {
    id: "berat-1",
    title: "Şeref Beratı",
    issuer: "Alay Komutanlığı",
    date: "1995",
    description: "Hizmette gösterilen bağlılık ve özverinin tescili.",
    image: images.foto2,
    ribbon: { center: "#1b2a41", left: "#2a3a5a", right: "#2a3a5a" },
  },
  {
    id: "madalya-1",
    title: "Vatan Hizmeti Madalyası",
    issuer: "Genelkurmay Başkanlığı",
    date: "2005",
    description: "Uzun yıllar sürdürülen başarılı hizmetin taltifi.",
    image: images.foto3,
    ribbon: { center: "#b8860b", left: "#d4af37", right: "#8b6914" },
  },
  {
    id: "takdir-2",
    title: "Görev Başarısı Sertifikası",
    issuer: "Tabur Komutanlığı",
    date: "2008",
    description: "Operasyonel görevlerde gösterilen başarı.",
    image: images.foto4,
    ribbon: { center: "#8b2e2e", left: "#b94545", right: "#6b2222" },
  },
  {
    id: "berat-2",
    title: "Kıdem Hizmet Beratı",
    issuer: "Lojistik Komutanlığı",
    date: "2015",
    description: "Kıdemli yıllarda hizmetin sürekliliği ve özveri.",
    image: images.foto1,
    ribbon: { center: "#2e5d4a", left: "#3a7a5a", right: "#224433" },
  },
  {
    id: "madalya-2",
    title: "Hizmet Şeref Madalyası",
    issuer: "Genelkurmay Başkanlığı",
    date: "2019",
    description: "Emekliliğe yakın dönemde tüm hizmetlerin özet taltifi.",
    image: images.foto2,
    ribbon: { center: "#5a4a2a", left: "#8b7340", right: "#4a3a20" },
  },
]

// ----------------------------------------------------------------------------
//  ÖNE ÇIKAN VİDEO  (Anasayfa video bölümü — thumbnail + play → modal)
//  provider: "youtube" | "vimeo"  (şimdilik youtube)
//  id: video kimliği (YouTube URL'sindeki ?v= sonrası)
//  thumbnail: kapak karesi (boş bıkılırsa YouTube'tan otomatik alınır)
// ----------------------------------------------------------------------------
export const featuredVideo = {
  provider: "youtube",
  id: "OUM1GL8iboM",
  title: "Hizmet Yıllarından Kesitler",
  description:
    "Askeri kariyer boyunca biriktirilen anılardan bir video seçki. Dokunun ve izleyin.",
  thumbnail: null, // ör: "/images/video-kapak.jpg" — boşsa YouTube kapağı kullanılır
}

// ----------------------------------------------------------------------------
//  KISA VİDEO SEÇKİSİ  (Anasayfa derleme kartında küçük thumbnail'lar)
//  provider: "youtube"  |  id: video kimliği  |  thumbnail: boşsa YouTube'tan alınır
// ----------------------------------------------------------------------------
export const videoShorts = [
  { id: "v1", provider: "youtube", videoId: "OUM1GL8iboM", title: "Hizmet Yıllarından Kesitler" },
  { id: "v2", provider: "youtube", videoId: "dQw4w9WgXcQ", title: "Tören Günü" },
  { id: "v3", provider: "youtube", videoId: "9bZkp7q19f0", title: "Birlik Anıları" },
  { id: "v4", provider: "youtube", videoId: "kJQP7kiw5Fk", title: "Veda Töreni" },
]

// ----------------------------------------------------------------------------
//  GALERİ  (Galeri sayfası — karosel / akış / ızgara + lightbox)
//  type: "photo" | "video"
//  src:  photo → görsel yolu, video → mp4 yolu
//  poster: video için kapak karesi (opsiyonel)
//  caption: açıklama (opsiyonel)
// ----------------------------------------------------------------------------
export const gallery = [
  { id: 1, type: "photo", src: images.foto1, caption: "Birlik fotoğrafı" },
  { id: 2, type: "photo", src: images.foto2, caption: "Tören günü" },
  { id: 3, type: "photo", src: images.foto3, caption: "Sınır karakolu" },
  { id: 4, type: "photo", src: images.foto4, caption: "Eğitim manevrası" },
  { id: 5, type: "photo", src: images.foto1, caption: "Arkadaşlarla anı" },
  { id: 6, type: "photo", src: images.foto2, caption: "Birlik içi etkinlik" },
  { id: 7, type: "photo", src: images.foto3, caption: "Hizmet yıldönümü" },
  { id: 8, type: "photo", src: images.foto4, caption: "Veda töreni" },
]

// ----------------------------------------------------------------------------
//  EMEĞİ GEÇEN SİLAH ARKADAŞLARI  (Sayfa altı — katkıda bulunanlar)
// ----------------------------------------------------------------------------
export const contributors = [
  { id: 1, name: "Yunus Ağabey", role: "Anıların sahibi" },
  { id: 2, name: "Ahmet Yılmaz", role: "Arşiv desteği" },
  { id: 3, name: "Mehmet Demir", role: "Tasarım" },
  { id: 4, name: "Mustafa Kaya", role: "Geliştirme" },
  { id: 5, name: "Ayşe Şahin", role: "İçerik" },
  { id: 6, name: "Fatma Çelik", role: "İçerik" },
  { id: 7, name: "Emre Yıldız", role: "Geliştirme" },
  { id: 8, name: "Hüseyin Aydın", role: "Görsel seçkisi" },
  { id: 9, name: "Hatice Öztürk", role: "Arşiv desteği" },
  { id: 10, name: "Ali Arslan", role: "Geliştirme" },
  { id: 11, name: "Zeynep Doğan", role: "İçerik" },
  { id: 12, name: "İbrahim Kılıç", role: "Görsel seçkisi" },
  { id: 13, name: "Elif Aslan", role: "Tasarım" },
  { id: 14, name: "Osman Taş", role: "Geliştirme" },
  { id: 15, name: "Meryem Koç", role: "İçerik" },
  { id: 16, name: "Hasan Kurt", role: "Arşiv desteği" },
  { id: 17, name: "Selin Acar", role: "Tasarım" },
  { id: 18, name: "Kemal Polat", role: "Geliştirme" },
  { id: 19, name: "Deniz Erdoğan", role: "Görsel seçkisi" },
  { id: 20, name: "Buse Yavuz", role: "İçerik" },
  { id: 21, name: "Murat Aksoy", role: "Geliştirme" },
  { id: 22, name: "Ece Korkmaz", role: "Tasarım" },
  { id: 23, name: "Burak Şimşek", role: "Arşiv desteği" },
  { id: 24, name: "Gizem Bulut", role: "İçerik" },
  { id: 25, name: "Serkan Güneş", role: "Geliştirme" },
  { id: 26, name: "Pınar Yalçın", role: "Görsel seçkisi" },
  { id: 27, name: "Onur Karaca", role: "Geliştirme" },
  { id: 28, name: "Damla Aktaş", role: "İçerik" },
  { id: 29, name: "Cem Özdemir", role: "Arşiv desteği" },
  { id: 30, name: "Sıla Kanberoğlu", role: "Tasarım" },
]

// ----------------------------------------------------------------------------
//  TOPLU EXPORT — tek nesne olarak da erişilebilir
// ----------------------------------------------------------------------------
const site = {
  images,
  profile,
  navLinks,
  rankInsigniaMap,
  rankOrder,
  career,
  postings,
  awards,
  gallery,
  featuredVideo,
  videoShorts,
  contributors,
}

export default site
