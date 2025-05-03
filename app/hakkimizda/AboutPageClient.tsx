"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function AboutPageClient() {
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
          <h1 className="text-4xl font-bold mb-4 text-brown-800 dark:text-honey-400">Hakkımızda</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            130 yıllık bir aile geleneği: Küsbeoğlu Gıda'nın hikayesi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/p3.jpg"
              alt="Tarihi Mecidiye Han'daki Küsbeoğlu Gıda Dükkanı"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-brown-800 dark:text-honey-400">Tarihçemiz</h2>
            <p className="text-muted-foreground mb-4">
              Şehitler Caddesi'nde yer alan, 1700'lü yıllarda inşa edilen ve çeşitli restorasyonlarla halen kullanılan
              tarihi Mecidiye Han'ın girişindeki 10 metrekarelik dükkanımız, yaklaşık 130 yıldır Küsbeoğlu ailesine
              ekmek kapısı oluyor.
            </p>
            <p className="text-muted-foreground mb-4">
              Gaziantepli Mehmet Ali'nin 1890'da açtığı dükkanı, sırasıyla oğlu Sait Küsbeoğlu, torunu Sait Küsbeoğlu ve
              torunun oğlu Müslüm Küsbeoğlu işletti. Müslüm Küsbeoğlu ise işi torunu Mustafa Fevzi Özmimar'a devretti.
            </p>
            <p className="text-muted-foreground">
              Bugün, beşinci kuşak temsilcimiz Mustafa Fevzi Özmimar liderliğinde, geleneklerimizi koruyarak modern
              dünyaya ayak uyduruyor, kaliteden ödün vermeden sizlere hizmet vermeye devam ediyoruz.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-honey-600 hover:bg-honey-700 text-white">
                <Link href="/basinda-biz">Basında Biz</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-honey-50 dark:bg-brown-950/20 rounded-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-brown-800 dark:text-honey-400">
            Antep Savunması Anısı
          </h2>
          <div className="max-w-3xl mx-auto">
            <blockquote className="border-l-4 border-honey-600 pl-4 italic text-muted-foreground mb-4">
              "Antep savunmasında dükkanı olanlardan para istemişler, o zaman dedemiz tüfek parası olmadığından camide
              bulaşık yıkamaya hizmet etmiş. Burası o zamandan bu zamana kadar süre gelen bir iş yerimiz. Hanın en eski
              dükkanı biziz ve şu ana kadar aynı aile olarak biz işletiyoruz."
            </blockquote>
            <p className="text-right text-sm text-muted-foreground">- Mustafa Fevzi Özmimar</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-brown-800 dark:text-honey-400">
            Beş Kuşaklık Gelenek
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=200" alt="Mehmet Ali" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brown-800 dark:text-honey-400">Mehmet Ali</h3>
              <p className="text-muted-foreground">1890'da dükkanı açan kurucumuz</p>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/sait-1.jpg" alt="Sait Küsbeoğlu" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brown-800 dark:text-honey-400">Sait Küsbeoğlu</h3>
              <p className="text-muted-foreground">Mehmet Ali'nin oğlu</p>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/sait-2.jpg" alt="Sait Küsbeoğlu" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brown-800 dark:text-honey-400">Sait Küsbeoğlu</h3>
              <p className="text-muted-foreground">İkinci kuşak Sait'in oğlu</p>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/muslum.jpg" alt="Müslüm Küsbeoğlu" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brown-800 dark:text-honey-400">Müslüm Küsbeoğlu</h3>
              <p className="text-muted-foreground">Üçüncü kuşak Sait'in oğlu</p>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/p4.jpg" alt="Mustafa Fevzi Özmimar" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brown-800 dark:text-honey-400">Mustafa Fevzi Özmimar</h3>
              <p className="text-muted-foreground">Müslüm'ün torunu, mevcut işletmeci</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-brown-800 dark:text-honey-400">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-honey-100 dark:bg-brown-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-honey-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brown-800 dark:text-honey-400">Gelenek</h3>
              <p className="text-muted-foreground">
                130 yıllık aile geleneğimizi koruyarak, nesilden nesile aktarılan bilgi ve tecrübemizle hizmet
                veriyoruz.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-honey-100 dark:bg-brown-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-honey-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brown-800 dark:text-honey-400">Kalite</h3>
              <p className="text-muted-foreground">
                En kaliteli hammaddeleri seçerek, ürünlerimizin her zaman en yüksek standartlarda olmasını sağlıyoruz.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-honey-100 dark:bg-brown-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-honey-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brown-800 dark:text-honey-400">Güven</h3>
              <p className="text-muted-foreground">
                Müşterilerimizin bize olan güveni en değerli hazinemizdir. Dedelerimizin müşterilerinin çocukları ve
                torunları hala bizden alışveriş yapıyor.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-honey-50 dark:bg-brown-950/20 rounded-lg p-8"
        >
          <blockquote className="max-w-3xl mx-auto italic text-muted-foreground text-center">
            "Kuşak olarak bu dükkanı işletmek gurur verici. Dedemizin biriktirdiği müşterilerin meyvelerini topluyorum.
            Dedelerimizin müşterilerinin çocuklarına, torunlarına ürün satıyoruz. Az da olsa dedelerimizi gören ve
            onlarla ürün alan müşterileri duruyor ve burada alışveriş yapıyor. İş yerimiz 130 yıllık. Ailemin anıları ve
            bu güne kadar getirdikleri içerisinde çalışıyoruz. Kazanç bir tarafa manevi boyutu da önemli. Başımızı
            kaldırdığımızda anılarla iç içeyiz. Allah kısmet ederse bizden sonra gelenler yaparsa onlara bırakacağız."
          </blockquote>
          <p className="text-right text-sm text-muted-foreground mt-4 max-w-3xl mx-auto">
            - Mustafa Fevzi Özmimar, 5. Kuşak İşletme Sahibi
          </p>
        </motion.div>
      </div>
    </div>
  )
}
