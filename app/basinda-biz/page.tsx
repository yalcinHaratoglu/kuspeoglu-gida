import PressPageClient from "./PressPageClient"

// Sayfa başına metadata ekleyelim
export const metadata = {
  title: "Basında Biz | Küsbeoğlu Gıda - Medya ve Haberler",
  description:
    "Küsbeoğlu Gıda'nın medyada yer alan haberleri, röportajları ve basın yansımaları. Anadolu Ajansı ve Habertürk'te yer alan haberlerimiz.",
  keywords:
    "Küsbeoğlu Gıda basın, Gaziantep esnaf haberleri, Mecidiye Han röportaj, Anadolu Ajansı Küsbeoğlu, Habertürk Gaziantep esnaf, Mustafa Fevzi Özmimar röportaj, Gaziantep tarihi çarşı",
}

export default function PressPage() {
  return <PressPageClient />
}
