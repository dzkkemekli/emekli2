// Türk Astsubay rütbeleri ve nişan eşlemeleri.
// insignia: ["chevron", "chevron", "chevron", "arc", "star"] gibi bir dizi —
// RankInsignia bileşeni bunları sırayla çizer.

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
