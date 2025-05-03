"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ShoppingBag, Navigation, Store } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ContactPageClient() {
  // Sayfa yüklendiğinde en üste scroll yapma
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-brown-800 dark:text-honey-400">İletişim</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sorularınız veya siparişleriniz için bizimle iletişime geçebilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-honey-100 dark:bg-brown-900/20 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-honey-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-brown-800 dark:text-honey-400">Adresimiz</h3>
                      <p className="text-muted-foreground">
                        Suyabatmaz Mah, Yeni Çarşı Sok. No: 5 Şahinbey / GAZİANTEP
                      </p>
                      <p className="text-muted-foreground mt-1">
                        <span className="font-medium">Tarihi Mecidiye Han</span> girişinde bulunmaktayız.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-honey-100 dark:bg-brown-900/20 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-honey-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-brown-800 dark:text-honey-400">Telefon</h3>
                      <p className="text-muted-foreground">0539 541 1332</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-honey-100 dark:bg-brown-900/20 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-honey-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-brown-800 dark:text-honey-400">E-posta</h3>
                      <p className="text-muted-foreground">mustafafevziozmimar@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-honey-100 dark:bg-brown-900/20 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-honey-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-brown-800 dark:text-honey-400">
                        Çalışma Saatleri
                      </h3>
                      <p className="text-muted-foreground">
                        Pazartesi - Cumartesi: 08:00 - 19:00
                        <br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="h-full overflow-hidden">
              <div className="relative h-[400px]">
                <Image src="/images/p1.jpg" alt="Küsbeoğlu Gıda Dükkanı" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">130 Yıllık Gelenek</h2>
                  <p className="text-white/90">
                    1890'dan beri Gaziantep'in tarihi Mecidiye Han'ında 5 kuşaktır hizmet veriyoruz.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-brown-800 dark:text-honey-400">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-honey-100 dark:bg-brown-900/20 p-3 rounded-full mb-4">
                    <ShoppingBag className="h-6 w-6 text-honey-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-brown-800 dark:text-honey-400">Kaliteli Ürünler</h3>
                  <p className="text-muted-foreground">
                    En kaliteli hammaddeleri seçerek, ürünlerimizin her zaman en yüksek standartlarda olmasını
                    sağlıyoruz.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-honey-100 dark:bg-brown-900/20 p-3 rounded-full mb-4">
                    <Store className="h-6 w-6 text-honey-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-brown-800 dark:text-honey-400">Tarihi Atmosfer</h3>
                  <p className="text-muted-foreground">
                    Tarihi Mecidiye Han'ın girişindeki dükkanımızda geleneksel alışveriş deneyimi yaşayın.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-honey-100 dark:bg-brown-900/20 p-3 rounded-full mb-4">
                    <Navigation className="h-6 w-6 text-honey-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-brown-800 dark:text-honey-400">Kolay Ulaşım</h3>
                  <p className="text-muted-foreground">
                    Gaziantep'in merkezinde, Şehitler Caddesi üzerinde kolayca ulaşabileceğiniz bir konumdayız.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-lg overflow-hidden h-[500px] shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.2553835365598!2d37.38695630000001!3d37.0605113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e6b40c4a360f%3A0xd9fd2f0910deb4a9!2sSuyabatmaz%2C%20Yeni%20%C3%87ar%C5%9F%C4%B1%20Sk.%2C%2027410%20%C5%9Eahinbey%2FGaziantep!5e0!3m2!1str!2str!4v1714591200000!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  )
}
