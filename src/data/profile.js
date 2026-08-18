// Kişisel bilgiler — içerikleri buradan güncelleyebilirsiniz.
// portrait: src/assets/portrait.jpg olarak bir fotoğraf eklerseniz
// aşağıdaki import'u açıp kullanabilirsiniz.
// import portraitImg from "@/assets/portrait.jpg"

export const profile = {
  name: "Yunus Ağabey",
  rank: "Emekli Astsubay",
  tagline: "Bir ömür vatan uğruna, anılara yazılmış hizmet.",
  shortBio:
    "Yıllar boyunca çeşitli birliklerde görev yapmış, görevini şerefle ifa etmiş bir askerin anıları, hizmet yerleri ve takdir edilen değerleri bir araya getiren saygı anıtı.",
  // portrait: portraitImg,
  portrait: null, // fotoğraf eklenince yukarıdaki satırı açın
  // Hizmet özeti — gerçek değerleri doldurun
  stats: [
    { label: "Hizmet Yılı", value: 35 },
    { label: "Görev Yeri", value: 5 },
    { label: "Takdir & Ödül", value: 6 },
  ],
}
