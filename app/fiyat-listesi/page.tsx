import PriceListPageClient from "./PriceListPageClient"

// Sayfa başına metadata ekleyelim
export const metadata = {
  title: "Fiyat Listesi | Küsbeoğlu Gıda - Ürünler ve Fiyatlar",
  description:
    "Küsbeoğlu Gıda'nın baharat, pekmez, bal, yağ, kuruyemiş ve diğer ürünlerinin güncel fiyat listesi. Gaziantep'in en kaliteli ve doğal ürünleri.",
  keywords:
    "Küsbeoğlu Gıda fiyat, Gaziantep baharat fiyatları, Antep bal fiyatları, doğal pekmez fiyat, kuruyemiş fiyatları, Gaziantep yöresel ürün fiyatları, Antep yağ fiyatları, eşki fiyatları",
}

export default function PriceListPage() {
  return <PriceListPageClient />
}
