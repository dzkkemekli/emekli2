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
//  Galeri type değeri: "photo" — src = görsel yolu
// ============================================================================

const BASE = import.meta.env.BASE_URL
const img = (p) => `${BASE}images/${p}`
const vid = (p) => `${BASE}videos/${p}`
const vposter = (p) => `${BASE}videos/posters/${p}`

const images = {
  // — Portre (ana görsel) —
  main: img("main.jpeg"),
  portrait: img("main.jpeg"),

  // — Galeri görselleri —
  foto1: img("foto-1.jpeg"),
  foto2: img("foto-2.jpeg"),
  foto3: img("foto-3.jpeg"),
  foto4: img("foto-4.jpeg"),
  foto5: img("foto-5.jpeg"),
  foto6: img("foto-6.jpeg"),
  foto7: img("foto-7.jpeg"),
  foto8: img("foto-8.jpeg"),
  foto9: img("foto-9.jpeg"),
  foto10: img("foto-10.jpeg"),
  foto11: img("foto-11.jpeg"),
  foto12: img("foto-12.jpeg"),
  foto13: img("foto-13.jpeg"),
  foto14: img("foto-14.jpeg"),
  foto15: img("foto-15.jpeg"),
  foto16: img("foto-16.jpeg"),
  foto17: img("foto-17.jpeg"),
  foto18: img("foto-18.jpeg"),
  foto19: img("foto-19.jpeg"),
  foto20: img("foto-20.jpeg"),
  foto21: img("foto-21.jpeg"),
  foto22: img("foto-22.jpeg"),
  foto23: img("foto-23.jpeg"),
  foto24: img("foto-24.jpeg"),
  foto25: img("foto-25.jpeg"),

  // — Yeni görselleri buraya ekleyin —
  // ornekFoto: img("ornek.jpg"),
}

// ----------------------------------------------------------------------------
//  KİŞİSEL BİLGİLER  (Hero + Özgeçmiş)
// ----------------------------------------------------------------------------
export const profile = {
  name: "Şehmuz YAKAR",
  rank: "KIDEMLİ BAŞÇAVUŞ",
  tagline: "Bir ömür vatan uğruna, anılara yazılmış hizmet.",
  shortBio:
    "Yıllar boyunca çeşitli birliklerde görev yapmış, görevini şerefle ifa etmiş bir askerin anıları, hizmet yerleri ve takdir edilen değerleri bir araya getiren saygı anıtı.",
  portrait: images.portrait,
  // Emeklilik tarihi (YYYY-AA-GG) — sayaç bu tarihten itibaren sayar
  retirementDate: "2026-09-01",
  // Hizmet özeti — Hero'daki sayaç istatistikleri
  stats: [
    { label: "Hizmet Yılı", value: 37 },
    { label: "Görev Yeri", value: 1 },
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
  { to: "/galeri", label: "Galeri" },
]

// ----------------------------------------------------------------------------
//  RÜTBELER  (RankInsignia bileşeni + RankLadder)
//  insignia: chevrons (ters-V sayısı 1-3), arc (üst yay), stars (yıldız),
//            retired (emekli rozeti)
// ----------------------------------------------------------------------------
export const rankInsigniaMap = {
  "BAŞLANGIÇ": { chevrons: 1, arc: false, stars: 0 },
  "DENİZ KUVVETLERİNDE İLK GÜN": { chevrons: 2, arc: false, stars: 0 },
  "TERSANEDE GÖREVE BAŞLADI": { chevrons: 3, arc: false, stars: 0 },
  "EMEKLİLİK VAKTİ GELDİ": { chevrons: 3, arc: true, stars: 0 },

  
}

export const rankOrder = [

  "BAŞLANGIÇ",
  "DENİZ KUVVETLERİNDE İLK GÜN",
  "TERSANEDE GÖREVE BAŞLADI",
  "EMEKLİLİK VAKTİ GELDİ",

  
]

// ----------------------------------------------------------------------------
//  KARİYER ZAMAN ÇİZELGESİ  (Özgeçmiş sayfası)
//  rank: rankInsigniaMap içindeki anahtarlardan biri olmalı
//  image: ilgili yıla ait fotoğraf (opsiyonel)
// ----------------------------------------------------------------------------
export const career = [
 {
    year: "1967",
    rank: "BAŞLANGIÇ",
    title: "HAYAT YOLCULUĞUNA BAŞLANGIÇ",
    description: "28 Nisan 1967 yılında Adana'da dünyaya gözlerini açtı.",
    image: images.foto1,
  },
  {
    year: "1989",
    rank: "DENİZ LİSESİ",
    title: "DENİZ LİSESİNDE İLK GÜN",
    description: "30 Ağustos 1989 yılında Deniz Lisesi'nden başarıyla mezun oldu.",
    image: images.foto2,
  },
  {
    year: "2022",
    rank: "TERSANE",
    title: "AKSAZ TERSANESİNDE İLK GÜN",
    description: "1 Kasım 2022'de Aksaz Tersanesi Komutanlığı'na atandı.",
    image: images.foto3,
  },
  {
    year: "1989 - 2026",
    rank: "EMEKLİLİK",
    title: "AYRILIK VAKTİ GELDİ",
    description: "37 yıllık hizmet süresinin ardından emekliye ayrıldı.",
    image: images.foto4,
  },
  
]

// ----------------------------------------------------------------------------
//  GÖREV YAPILAN YERLER  (Görevler sayfası — grid + harita)
//  coords: [lat, lng] — harita üzerinde pin konumu
//  image: kapak fotoğrafı, gallery: ek fotoğraflar dizisi
// ----------------------------------------------------------------------------
export const postings = [
  {
    id: "adana",
    location: "Adana",
    period: "1967",
    unit: "Doğum / Çocukluk",
    description: "28 Nisan 1967 tarihinde Adana'da dünyaya gözlerini açtı.",
    coords: [37.0000, 35.3213],
    image: images.foto1,
    gallery: [images.foto1],
  },
  {
    id: "goreve-baslama",
    location: "Göreve Başlangıç",
    period: "1989",
    unit: "İlk Görev",
    description: "30 Ağustos 1989 tarihinde meslek hayatına resmen ilk adımını attı.",
    coords: [39.9334, 32.8597], // Genel koordinat (örn. Ankara)
    image: images.foto2,
    gallery: [images.foto2],
  },
  
  {
    id: "aksaz-tersanesi",
    location: "Marmaris / Muğla",
    period: "2022 — 2026",
    unit: "Aksaz Tersanesi Komutanlığı",
    description: "Aksaz Tersanesi Komutanlığına Atandı.",
    coords: [36.8410, 28.3960],
    image: images.foto11,
    gallery: [images.foto11, images.foto12],
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
//  GALERİ  (Galeri sayfası — karosel / akış / ızgara + lightbox)
//  type: "photo"
//  src:  photo → görsel yolu
//  caption: açıklama (opsiyonel)
// ----------------------------------------------------------------------------
export const gallery = [
  { id: 0, type: "photo", src: images.main },
  { id: 1, type: "photo", src: images.foto1 },
  { id: 2, type: "photo", src: images.foto2 },
  { id: 3, type: "photo", src: images.foto3 },
  { id: 4, type: "photo", src: images.foto4 },
  { id: 5, type: "photo", src: images.foto5 },
  { id: 6, type: "photo", src: images.foto6 },
  { id: 7, type: "photo", src: images.foto7 },
  { id: 8, type: "photo", src: images.foto8 },
  { id: 9, type: "photo", src: images.foto9 },
  { id: 10, type: "photo", src: images.foto10 },
  { id: 11, type: "photo", src: images.foto11 },
  { id: 12, type: "photo", src: images.foto12 },
  { id: 13, type: "photo", src: images.foto13 },
  { id: 14, type: "photo", src: images.foto14 },
  { id: 15, type: "photo", src: images.foto15 },
  { id: 16, type: "photo", src: images.foto16 },
  { id: 17, type: "photo", src: images.foto17 },
  { id: 18, type: "photo", src: images.foto18 },
  { id: 19, type: "photo", src: images.foto19 },
  { id: 20, type: "photo", src: images.foto20 },
  { id: 21, type: "photo", src: images.foto21 },
  { id: 22, type: "photo", src: images.foto22 },
  { id: 23, type: "photo", src: images.foto23 },
  { id: 24, type: "photo", src: images.foto24 },
  { id: 25, type: "photo", src: images.foto25 },

  // — Anı videoları —
  { id: 27, type: "video", src: vid("video-1.mp4"), poster: vposter("video-1.jpg") },
  { id: 28, type: "video", src: vid("video-2.mp4"), poster: vposter("video-2.jpg") },
  { id: 29, type: "video", src: vid("video-3.mp4"), poster: vposter("video-3.jpg") },
  { id: 30, type: "video", src: vid("video-4.mp4"), poster: vposter("video-4.jpg") },
  { id: 31, type: "video", src: vid("video-5.mp4"), poster: vposter("video-5.jpg") },
  { id: 32, type: "video", src: vid("video-6.mp4"), poster: vposter("video-6.jpg") },
  { id: 33, type: "video", src: vid("video-7.mp4"), poster: vposter("video-7.jpg") },
  { id: 34, type: "video", src: vid("video-8.mp4"), poster: vposter("video-8.jpg") },
  { id: 35, type: "video", src: vid("video-9.mp4"), poster: vposter("video-9.jpg") },
  { id: 36, type: "video", src: vid("video-10.mp4"), poster: vposter("video-10.jpg") },
]

// ----------------------------------------------------------------------------
//  EMEĞİ GEÇEN SİLAH ARKADAŞLARI  (Sayfa altı — katkıda bulunanlar)
// ----------------------------------------------------------------------------
export const contributors = [
  { id: 1, name: "Mustafa CAN" },
  { id: 2, name: "Musa YORGANCI" },
  { id: 3, name: "İbrahim ÖZNUR" },
  { id: 4, name: "Alper KIZILLAR" },
  { id: 5, name: "Mehmet Özer ÇALIŞKAN" },
  { id: 6, name: "Bayram KOCABEKİR" },
  { id: 7, name: "Mehmet KASAR" },
  { id: 8, name: "Kamil KAVRUK" },
  { id: 9, name: "Ömer Adil UZUNOĞLU" },
  { id: 10, name: "Muhammet KİRAZ" },
  { id: 11, name: "Alpay ACAR" },
  { id: 12, name: "Ahmet OKKİRMAN" },
  { id: 13, name: "Eray ÖZGÜNEŞLİ" },
  { id: 14, name: "Kadir KARINCALI" },
  { id: 15, name: "İsmail Alparslan" },
  { id: 16, name: "Fatih KILIÇ" },
  { id: 17, name: "Oktay OKUMUŞ" },
  { id: 18, name: "Önder YÜCEL" },
  { id: 19, name: "Yunus Emre SEPETCİ" },
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
  gallery,
  featuredVideo,
  contributors,
}

export default site
