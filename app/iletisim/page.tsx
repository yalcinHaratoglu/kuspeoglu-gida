import ContactPageClient from "./ContactPageClient"

// Sayfa başına metadata ekleyelim
export const metadata = {
  title: "İletişim | Küsbeoğlu Gıda - Adres ve İletişim Bilgileri",
  description:
    "Küsbeoğlu Gıda iletişim bilgileri. Gaziantep Şehitler Caddesi, tarihi Mecidiye Han girişinde yer alan dükkanımıza ulaşım ve iletişim bilgileri.",
  keywords:
    "Küsbeoğlu Gıda iletişim, Gaziantep baharat dükkanı, Mecidiye Han adres, Antep baharat satış yeri, Küsbeoğlu telefon, Gaziantep çarşı baharat, Şehitler Caddesi esnaf",
}

export default function ContactPage() {
  return <ContactPageClient />
}
