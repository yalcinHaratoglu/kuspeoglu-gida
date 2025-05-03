"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function PressPageClient() {
  // Sayfa yüklendiğinde en üste scroll yapma
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const newsArticles = [
    {
      title: "Tarihi handaki dükkan 5 kuşakla hizmette",
      source: "Anadolu Ajansı",
      date: "2023",
      excerpt:
        "Şehitler Caddesi'nde yer alan, 1700'lü yıllarda inşa edilen ve çeşitli restorasyonlarla halen kullanılan tarihi Mecidiye Han'ın girişindeki 10 metrekarelik dükkan, yaklaşık 130 yıldır Küsbeoğlu ailesine ekmek kapısı oluyor.",
      image: "/images/p1.jpg",
      url: "https://www.aa.com.tr/tr/kultur/tarihi-handaki-dukkan-5-kusakla-hizmette/3091092",
    },
    {
      title: "Tarihi handaki dükkan 5 kuşakla hizmette",
      source: "Habertürk",
      date: "2023",
      excerpt:
        "Gaziantepli Mehmet Ali'nin 1890'da açtığı dükkanı, sırasıyla oğlu Sait Küsbeoğlu, torunu Sait Küsbeoğlu ve torunun oğlu Müslüm Küsbeoğlu işletti. Müslüm Küsbeoğlu ise işi torunu (kızının oğlu) Mustafa Fevzi Özmimar'a devretti.",
      image: "/images/p2.jpg",
      url: "https://www.haberturk.com/tarihi-handaki-dukkan-5-kusakla-hizmette-3647837",
    },
    {
      title: "Tarihi handaki dükkan 5 kuşakla hizmette",
      source: "NTV",
      date: "2023",
      excerpt:
        "Gaziantep'te 1700'lü yıllarda inşa edilen tarihi Mecidiye Han'ın girişindeki 10 metrekarelik dükkan, yaklaşık 130 yıldır Küsbeoğlu ailesine ekmek kapısı oluyor. Dükkan şu anda 5. kuşak temsilcisi tarafından işletiliyor.",
      image: "/images/p3.jpg",
      url: "https://www.ntv.com.tr/n-life/gezi/tarihi-handaki-dukkan-5-kusakla-hizmette,aSCsjIb8fkq-wHZoQrjxGA",
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-brown-800 dark:text-honey-400">Basında Biz</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Küsbeoğlu Gıda'nın medyada yer alan haberleri ve röportajları
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {newsArticles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="relative h-60 w-full">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-brown-800 dark:text-honey-400">{article.title}</CardTitle>
                  <CardDescription>
                    {article.source} | {article.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-honey-600 hover:bg-honey-700 text-white">
                    <Link href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Haberi Oku <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-honey-50 dark:bg-brown-950/20 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-brown-800 dark:text-honey-400">
            Anadolu Ajansı Röportajı
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-muted-foreground">
              Şehitler Caddesi'nde yer alan, 1700'lü yıllarda inşa edilen ve çeşitli restorasyonlarla halen kullanılan
              tarihi Mecidiye Han'ın girişindeki 10 metrekarelik dükkan, yaklaşık 130 yıldır Küsbeoğlu ailesine ekmek
              kapısı oluyor.
            </p>
            <p className="text-muted-foreground">
              Gaziantepli Mehmet Ali'nin 1890'da açtığı dükkanı, sırasıyla oğlu Sait Küsbeoğlu, torunu Sait Küsbeoğlu ve
              torunun oğlu Müslüm Küsbeoğlu işletti. Müslüm Küsbeoğlu ise işi torunu Mustafa Fevzi
              Özmimar'a devretti.
            </p>
            <p className="text-muted-foreground">
              Özmimar, AA muhabirine, dükkanlarının çarşının en eski işletmelerinden olduğunu söyledi.
            </p>
            <p className="text-muted-foreground">
              Dedelerinin iş yerine büyük emekler verdiğini anlatan Özmimar, "Antep savunmasında dükkanı olanlardan para
              istemişler, o zaman dedemiz tüfek parası olmadığından camide bulaşık yıkamaya hizmet etmiş. Burası o
              zamandan bu zamana kadar süre gelen bir iş yerimiz. Hanın en eski dükkanı biziz ve şu ana kadar aynı aile
              olarak biz işletiyoruz." dedi.
            </p>
            <p className="text-muted-foreground">
              Özmimar, işi 5. kuşak temsilci olarak kendisinin sürdürdüğünü ifade ederek, sözlerini şöyle tamamladı:
            </p>
            <blockquote className="border-l-4 border-honey-600 pl-4 italic">
              "Kuşak olarak bu dükkanı işletmek gurur verici. Dedemizin biriktirdiği müşterilerin meyvelerini
              topluyorum. Dedelerimizin müşterilerinin çocuklarına, torunlarına ürün satıyoruz. Az da olsa dedelerimizi
              gören ve onlarla ürün alan müşterileri duruyor ve burada alışveriş yapıyor. İş yerimiz 130 yıllık. Ailemin
              anıları ve bu güne kadar getirdikleri içerisinde çalışıyoruz. Kazanç bir tarafa manevi boyutu da önemli.
              Başımızı kaldırdığımızda anılarla iç içeyiz. Allah kısmet ederse bizden sonra gelenler yaparsa onlara
              bırakacağız."
            </blockquote>
            <p className="text-muted-foreground">
              Dükkanın müşterilerinden esnaf Adil Öçal da Özmimar'ın dedesiyle çalışıp esnaflığı öğrendiğini belirterek,
              "Dükkanın tarihi, hanın tarihiyle aynı. Mustafa'nın dedelerini tanırdık, alışveriş yapardık." ifadelerini
              kullandı.
            </p>
            <div className="text-right">
              <Link
                href="https://www.aa.com.tr/tr/kultur/tarihi-handaki-dukkan-5-kusakla-hizmette/3091092"
                target="_blank"
                rel="noopener noreferrer"
                className="text-honey-600 hover:text-honey-700 inline-flex items-center"
              >
                Kaynak: Anadolu Ajansı <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
