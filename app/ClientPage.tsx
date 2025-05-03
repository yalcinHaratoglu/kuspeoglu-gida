"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, ShoppingBag, Award, Clock } from "lucide-react"

export default function ClientPage() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    // Sayfa yüklendiğinde en üste scroll yapma
    window.scrollTo(0, 0)

    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <Image
          src="/images/p1.jpg"
          alt="Küsbeoğlu Gıda Dükkanı - Mecidiye Han Girişi"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <Image src="/logo.png" alt="Küsbeoğlu Gıda Logo" width={80} height={80} className="object-contain" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">Küsbeoğlu Gıda</h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-8">5 kuşaktır doğal ve kaliteli ürünlerin adresi</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-honey-600 hover:bg-honey-700 text-white">
                <Link href="/fiyat-listesi">Ürünlerimiz</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-black bg-white/90 hover:bg-white hover:text-black"
              >
                <Link href="/iletisim">İletişim</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-honey-50 dark:bg-brown-950/20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-honey-100 p-3 mb-4">
                      <Leaf className="h-8 w-8 text-honey-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-brown-800 dark:text-honey-400">Doğal Ürünler</h3>
                    <p className="text-muted-foreground">Tüm ürünlerimiz doğal kaynaklardan özenle seçilmektedir.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-honey-100 p-3 mb-4">
                      <Award className="h-8 w-8 text-honey-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-brown-800 dark:text-honey-400">Kalite Garantisi</h3>
                    <p className="text-muted-foreground">Her ürünümüz kalite kontrolünden geçerek sizlere ulaşır.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-honey-100 p-3 mb-4">
                      <Clock className="h-8 w-8 text-honey-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-brown-800 dark:text-honey-400">Geleneksel Üretim</h3>
                    <p className="text-muted-foreground">5 kuşaktır devam eden geleneksel üretim yöntemlerimiz.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-honey-100 p-3 mb-4">
                      <ShoppingBag className="h-8 w-8 text-honey-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-brown-800 dark:text-honey-400">Geniş Ürün Yelpazesi</h3>
                    <p className="text-muted-foreground">Baharat, pekmez, yağ, kuruyemiş ve bal çeşitleri.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brown-800 dark:text-honey-400">Ürün Kategorilerimiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Doğanın en lezzetli ve sağlıklı ürünlerini sizler için özenle seçiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Baharatlar", image: "/images/baharat.jpg", link: "/fiyat-listesi#baharatlar" },
              { name: "Pekmezler", image: "/images/pekmez.jpg", link: "/fiyat-listesi#pekmezler" },
              { name: "Sirkeler", image: "/images/sirke.jpg", link: "/fiyat-listesi#sirkeler" },
              { name: "Ballar", image: "/images/ballar.jpeg", link: "/fiyat-listesi#ballar" },
              { name: "Yağlar", image: "/images/tereyag.jpg", link: "/fiyat-listesi#yaglar" },
              { name: "Kuruyemiş", image: "/images/kuruyemis.jpg", link: "/fiyat-listesi#kuruyemis" },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={category.link} className="group block">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-honey-600 hover:bg-honey-700 text-white">
              <Link href="/fiyat-listesi">Tüm Ürünlerimizi Görüntüle</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 bg-honey-50 dark:bg-brown-950/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-brown-800 dark:text-honey-400">Küsbeoğlu Gıda Hikayesi</h2>
              <p className="text-muted-foreground mb-6">
                130 yıllık bir aile geleneği olarak, 1890 yılından beri Gaziantep'in tarihi Mecidiye Han'ında hizmet
                veriyoruz. Şu anda dükkanımızı 5. kuşak temsilcimiz, Müslüm Küsbeoğlu'nun torunu Mustafa Fevzi Özmimar
                işletiyor.
              </p>
              <p className="text-muted-foreground mb-6">
                Doğal ve kaliteli ürünlerimizle sofralarınıza lezzet katmaya devam ediyoruz.
              </p>
              <div className="flex space-x-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-honey-600 text-honey-600 hover:bg-honey-600 hover:text-white"
                >
                  <Link href="/hakkimizda">Daha Fazla Bilgi</Link>
                </Button>
                <Button asChild className="bg-honey-600 hover:bg-honey-700 text-white">
                  <Link href="/basinda-biz">Basında Biz</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/p2.jpg"
                alt="Küsbeoğlu Gıda Dükkanı - Mustafa Fevzi Özmimar"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
