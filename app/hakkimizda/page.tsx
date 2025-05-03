import AboutPageClient from "./AboutPageClient"

// Sayfa başına metadata ekleyelim
export const metadata = {
  title: "Hakkımızda | Küsbeoğlu Gıda - 130 Yıllık Gelenek",
  description:
    "Gaziantep'in tarihi Mecidiye Han'ında 1890'dan beri 5 kuşaktır hizmet veren Küsbeoğlu Gıda'nın hikayesi. Mehmet Ali'den Mustafa Fevzi Özmimar'a uzanan aile geleneği.",
  keywords:
    "Küsbeoğlu Gıda tarihçe, Gaziantep baharat tarihi, Mecidiye Han esnaf, Antep savunması, Küsbeoğlu aile, Mustafa Fevzi Özmimar, 5 kuşak baharat, Gaziantep geleneksel ticaret",
}

export default function AboutPage() {
  return <AboutPageClient />
}
