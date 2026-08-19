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
    { label: "Hizmet Yılı", value: 35 },
    { label: "Görev Yeri", value: 8 },
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
  "DENİZ LİSESİ": { chevrons: 2, arc: false, stars: 0 },
  "DENİZ HARP OKULU": { chevrons: 3, arc: false, stars: 0 },
  "ENVANTER KONTROL MERKEZİ KOMUTANLIĞI": { chevrons: 3, arc: true, stars: 0 },
  "DENİZ İKMAL MERKEZİ KOMUTANLIĞI": { chevrons: 3, arc: true, stars: 0 },
  "ABD NAVAL POSTGRADUATE SCHOOL": { chevrons: 3, arc: true, stars: 0 },
  "ENVANTER KONTROL MERKEZİ (YAZILIM & SİSTEM)": { chevrons: 3, arc: true, stars: 0 },
  "DONANMA KOMUTANLIĞI BİL. SİS. GÜV. KISIM AMİRLİĞİ": { chevrons: 3, arc: true, stars: 0 },
  "DENİZ KUVVETLERİ MEBS BAŞKANLIĞI": { chevrons: 3, arc: true, stars: 0 },
  "TUĞAMİRALLİĞE TERFİ VE MEBS BAŞKANLIĞI": { chevrons: 3, arc: true, stars: 1 },
  "AKSAZ TERSANESİ KOMUTANLIĞI": { chevrons: 3, arc: true, stars: 1 },
  "EMEKLİLİK": { chevrons: 3, arc: true, stars: 1, retired: true }
  
}

export const rankOrder = [

  "BAŞLANGIÇ",
  "DENİZ LİSESİ",
  "DENİZ HARP OKULU",
  "ENVANTER KONTROL MERKEZİ KOMUTANLIĞI",
  "DENİZ İKMAL MERKEZİ KOMUTANLIĞI",
  "ABD NAVAL POSTGRADUATE SCHOOL",
  "ENVANTER KONTROL MERKEZİ (YAZILIM & SİSTEM)",
  "DONANMA KOMUTANLIĞI BİL. SİS. GÜV. KISIM AMİRLİĞİ",
  "DENİZ KUVVETLERİ MEBS BAŞKANLIĞI",
  "TUĞAMİRALLİĞE TERFİ VE MEBS BAŞKANLIĞI",
  "AKSAZ TERSANESİ KOMUTANLIĞI",
  "EMEKLİLİK",
  
]

// ----------------------------------------------------------------------------
//  KARİYER ZAMAN ÇİZELGESİ  (Özgeçmiş sayfası)
//  rank: rankInsigniaMap içindeki anahtarlardan biri olmalı
//  image: ilgili yıla ait fotoğraf (opsiyonel)
// ----------------------------------------------------------------------------
export const career = [
 {
    year: "1973",
    rank: "BAŞLANGIÇ",
    title: "HAYAT YOLCULUĞUNA BAŞLANGIÇ",
    description: "1973 yılında Eskişehir'de dünyaya gözlerini açtı.",
    image: images.foto1,
  },
  {
    year: "1991",
    rank: "DENİZ LİSESİ",
    title: "DENİZ LİSESİ MEZUNİYETİ",
    description: "1991 yılında Deniz Lisesi'nden başarıyla mezun oldu.",
    image: images.foto2,
  },
  {
    year: "1995",
    rank: "DENİZ HARP OKULU",
    title: "DENİZ HARP OKULU VE SUBAYLIĞA ADIM",
    description: "1995 yılında Deniz Harp Okulu'ndan mezun olarak Türk Deniz Kuvvetleri bünyesine katıldı.",
    image: images.foto3,
  },
  {
    year: "1995 - 1999",
    rank: "ENVANTER KONTROL MERKEZ KOMUTANLIĞI",
    title: "KATALOGLAMA VE KODLAMA SUBAYLIĞI",
    description: "Envanter Kontrol Merkezi Komutanlığı bünyesinde Kataloglama ve Kodlama Subaylığı görevini icra etti.",
    image: images.foto4,
  },
  {
    year: "1995 - 1999",
    rank: "DENİZ İKMAL MERKEZ KOMUTANLIĞI",
    title: "STOK KONTROL SUBAYLIĞI",
    description: "Deniz İkmal Merkezi Komutanlığında Stok Kontrol Subaylığı görevini üstlendi.",
    image: images.foto5,
  },
  {
    year: "1999 - 2001",
    rank: "LİSANS ÜSTÜ DÖNEM SONRASI",
    title: "ABD NAVAL POSTGRADUATE SCHOOL YÜKSEK LİSANS",
    description: "Amerika Birleşik Devletleri'nde Naval Postgraduate School'da yüksek lisans eğitimini başarıyla tamamladı.",
    image: images.foto6,
  },
  {
    year: "2023",
    rank: "TERFİ",
    title: "TUĞAMİRALLİĞE TERFİ VE MEBS BAŞKANLIĞI",
    description: "Yüksek Askeri Şura kararıyla Tuğamiralliğe terfi ederek Deniz Kuvvetleri Komutanlığı MEBS Başkanı olarak atandı.",
    image: images.foto7,
  },
  {
    year: "2025",
    rank: "AKSAZ TERSANESİ KOMUTANLIĞI",
    title: "AKSAZ TERSANESİ KOMUTANI",
    description: "Cumhurbaşkanlığı kararnamesi ile Aksaz Tersanesi Komutanlığı görevine atandı.",
    image: images.foto8,
  },
  {
    year: "2026",
    rank: "EMEKLİLİK",
    title: "MÜMTAZ HİZMETLERLE EMEKLİLİK",
    description: "Türk Deniz Kuvvetleri'ne ve vatanına adadığı onlarca yıllık gurur dolu hizmetin ardından emekliye ayrıldı.",
    image: images.foto9,
  },
]

// ----------------------------------------------------------------------------
//  GÖREV YAPILAN YERLER  (Görevler sayfası — grid + harita)
//  coords: [lat, lng] — harita üzerinde pin konumu
//  image: kapak fotoğrafı, gallery: ek fotoğraflar dizisi
// ----------------------------------------------------------------------------
export const postings = [
  {
    id: "eskisehir",
    location: "Eskişehir",
    period: "1973",
    unit: "Doğum / Çocukluk",
    description: "1973 yılında Eskişehir'de dünyaya gözlerini açtı.",
    coords: [39.7767, 30.5206],
    image: images.foto1,
    gallery: [images.foto1],
  },
  {
    id: "deniz-lisesi",
    location: "Heybeliada / İstanbul",
    period: "1991",
    unit: "Deniz Lisesi Komutanlığı",
    description: "1991 yılında Deniz Lisesi'nden başarıyla mezun oldu.",
    coords: [40.8767, 29.0911],
    image: images.foto2,
    gallery: [images.foto2],
  },
  {
    id: "deniz-harp-okulu",
    location: "Tuzla / İstanbul",
    period: "1995",
    unit: "Deniz Harp Okulu Komutanlığı",
    description: "1995 yılında Deniz Harp Okulu'ndan mezun olarak Türk Deniz Kuvvetleri bünyesine katıldı.",
    coords: [40.8160, 29.2650],
    image: images.foto3,
    gallery: [images.foto3],
  },
  {
    id: "envanter-ikmal-golcuk",
    location: "Gölcük / Kocaeli",
    period: "1995 — 1999",
    unit: "Envanter Kontrol & Deniz İkmal Merkezi Komutanlığı",
    description: "Kataloglama, Kodlama Subaylığı ve Stok Kontrol Subaylığı görevlerini icra etti.",
    coords: [40.7180, 29.8330],
    image: images.foto4,
    gallery: [images.foto4, images.foto5],
  },
  {
    id: "naval-postgraduate-school",
    location: "Monterey / ABD",
    period: "1999 — 2001",
    unit: "Naval Postgraduate School",
    description: "Amerika Birleşik Devletleri'nde yüksek lisans eğitimini başarıyla tamamladı.",
    coords: [36.5985, -121.8744],
    image: images.foto6,
    gallery: [images.foto6],
  },
  {
    id: "envanter-yazilim-golcuk",
    location: "Gölcük / Kocaeli",
    period: "2001 — 2011",
    unit: "Envanter Kontrol Merkezi Komutanlığı",
    description: "Yazılım Proje Mühendisliği, Kısım Amirliği ve Şube Müdürlüğü görevlerini yürüttü.",
    coords: [40.7180, 29.8330],
    image: images.foto7,
    gallery: [images.foto7],
  },
  {
    id: "donanma-komutanligi",
    location: "Gölcük / Kocaeli",
    period: "2011 — 2016",
    unit: "Donanma Komutanlığı Bilgi Sistemleri Güvenlik Kısım Amirliği",
    description: "Bilgi Sistemleri Güvenlik Kısım Amirliğinin ilk amiri olarak görev yaptı.",
    coords: [40.7170, 29.8270],
    image: images.foto8,
    gallery: [images.foto8],
  },
  {
    id: "dzkk-mebs-ankara",
    location: "Çankaya / Ankara",
    period: "2016 — 2023",
    unit: "Deniz Kuvvetleri Komutanlığı MEBS / Bilgi Sistemleri Daire Başkanlığı",
    description: "Sistem Analiz, Hizmet Destek Şube Müdürlüğü ve Bilgi Sistemleri Daire Başkanlığı görevlerinde bulundu.",
    coords: [39.9142, 32.8517],
    image: images.foto9,
    gallery: [images.foto9],
  },
  {
    id: "mebs-baskanligi-tugamiral",
    location: "Çankaya / Ankara",
    period: "2023 — 2025",
    unit: "Deniz Kuvvetleri Komutanlığı MEBS Başkanlığı",
    description: "30 Ağustos 2023'te Tuğamiralliğe terfi ederek Cumhurbaşkanlığı kararnamesiyle MEBS Başkanı oldu.",
    coords: [39.9142, 32.8517],
    image: images.foto10,
    gallery: [images.foto10],
  },
  {
    id: "aksaz-tersanesi",
    location: "Marmaris / Muğla",
    period: "2025 — 2026",
    unit: "Aksaz Tersanesi Komutanlığı",
    description: "Cumhurbaşkanlığı kararnamesi ile Aksaz Tersanesi Komutanı olarak görev yaptı.",
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
