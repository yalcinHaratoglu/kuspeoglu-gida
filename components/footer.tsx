"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()

  return (
    <footer className="bg-honey-50 dark:bg-brown-950/20 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Küsbeoğlu Gıda" width={50} height={50} className="object-contain" />
              <h3 className="text-lg font-bold text-brown-800 dark:text-honey-400">Küsbeoğlu Gıda</h3>
            </div>
            <p className="text-muted-foreground">
              5 kuşaktır doğal ve kaliteli ürünlerin adresi. Baharat, pekmez, yağ, kuruyemiş ve bal ürünleri.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-brown-800 dark:text-honey-400">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-honey-600 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-muted-foreground hover:text-honey-600 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/basinda-biz" className="text-muted-foreground hover:text-honey-600 transition-colors">
                  Basında Biz
                </Link>
              </li>
              <li>
                <Link href="/fiyat-listesi" className="text-muted-foreground hover:text-honey-600 transition-colors">
                  Fiyat Listesi
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-muted-foreground hover:text-honey-600 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-brown-800 dark:text-honey-400">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-honey-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Suyabatmaz Mah, Yeni Çarşı Sok. No: 5 Şahinbey / GAZİANTEP
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-honey-600 mr-2 flex-shrink-0" />
                <span className="text-muted-foreground">0539 541 1332</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-honey-600 mr-2 flex-shrink-0" />
                <span className="text-muted-foreground">mustafafevziozmimar@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-brown-800 dark:text-honey-400">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-honey-100 dark:bg-brown-900/20 p-2 rounded-full hover:bg-honey-200 dark:hover:bg-brown-900/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-honey-600" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-honey-100 dark:bg-brown-900/20 p-2 rounded-full hover:bg-honey-200 dark:hover:bg-brown-900/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-honey-600" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-honey-100 dark:bg-brown-900/20 p-2 rounded-full hover:bg-honey-200 dark:hover:bg-brown-900/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-honey-600" />
              </a>
            </div>
            <Button
              variant="link"
              className="text-muted-foreground hover:text-honey-600 p-0 h-auto"
              onClick={() => router.push("/admin")}
            >
              Yönetici Girişi
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-muted">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Küsbeoğlu Gıda. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
