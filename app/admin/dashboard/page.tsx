"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { productData as initialProductData, type ProductType } from "@/lib/product-data"
import { Save, ArrowLeft } from "lucide-react"

export default function AdminDashboardPage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [activeTab, setActiveTab] = useState("baharatlar")
  const [editedProducts, setEditedProducts] = useState<Record<string, ProductType[]>>({})

  useEffect(() => {
    setIsClient(true)
    window.scrollTo(0, 0)

    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem("adminAuthenticated") === "true"
    if (!isAuthenticated) {
      toast({
        title: "Erişim engellendi",
        description: "Bu sayfaya erişim yetkiniz yok.",
        variant: "destructive",
      })
      router.push("/admin")
      return
    }

    // Load saved products from localStorage if available
    const savedProducts = localStorage.getItem("kusbeogluProducts")
    if (savedProducts) {
      setEditedProducts(JSON.parse(savedProducts))
    } else {
      setEditedProducts({ ...initialProductData })
    }
  }, [router])

  const handlePriceChange = (categoryKey: string, productIndex: number, newPrice: string) => {
    setEditedProducts((prev) => {
      const newProducts = { ...prev }
      newProducts[categoryKey] = [...(prev[categoryKey] || initialProductData[categoryKey])]
      newProducts[categoryKey][productIndex] = {
        ...newProducts[categoryKey][productIndex],
        price: newPrice,
      }
      return newProducts
    })
  }

  const handleSaveChanges = () => {
    // Save to localStorage for persistence
    localStorage.setItem("kusbeogluProducts", JSON.stringify(editedProducts))

    // Show success message
    toast({
      title: "Değişiklikler kaydedildi",
      description: "Fiyat listesi başarıyla güncellendi.",
      variant: "success",
    })
  }

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuthenticated")
    toast({
      title: "Çıkış yapıldı",
      description: "Güvenli bir şekilde çıkış yaptınız.",
    })
    router.push("/admin")
  }

  if (!isClient) {
    return null // Prevent hydration errors
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => router.push("/")} aria-label="Ana Sayfaya Dön">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold">Yönetim Paneli</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Çıkış Yap
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Fiyat Listesi Düzenleme</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Ürün fiyatlarını güncellemek için aşağıdaki formu kullanabilirsiniz. Değişiklikleri kaydetmek için
                sayfanın altındaki "Değişiklikleri Kaydet" butonuna tıklayın.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-8 overflow-x-auto">
            <TabsList className="h-auto p-1">
              <TabsTrigger value="baharatlar" className="py-2 px-4">
                Baharatlar
              </TabsTrigger>
              <TabsTrigger value="pekmezler" className="py-2 px-4">
                Pekmezler
              </TabsTrigger>
              <TabsTrigger value="sirkeler" className="py-2 px-4">
                Sirkeler
              </TabsTrigger>
              <TabsTrigger value="eskiler" className="py-2 px-4">
                Eşkiler
              </TabsTrigger>
              <TabsTrigger value="ballar" className="py-2 px-4">
                Ballar
              </TabsTrigger>
              <TabsTrigger value="yaglar" className="py-2 px-4">
                Yağlar
              </TabsTrigger>
              <TabsTrigger value="diger" className="py-2 px-4">
                Diğer Ürünler
              </TabsTrigger>
              <TabsTrigger value="kuruyemis" className="py-2 px-4">
                Kuruyemiş
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(initialProductData).map(([category, products]) => {
            const currentProducts = editedProducts[category] || products

            return (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="space-y-4">
                  {currentProducts.map((product, index) => (
                    <Card key={`${product.name}-${index}`}>
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                          <div className="font-medium">{product.name}</div>
                          <div className="flex items-center gap-2">
                            <Label htmlFor={`price-${category}-${index}`} className="w-20">
                              Fiyat:
                            </Label>
                            <Input
                              id={`price-${category}-${index}`}
                              value={product.price}
                              onChange={(e) => handlePriceChange(category, index, e.target.value)}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            )
          })}
        </Tabs>

        <div className="mt-8 flex justify-end">
          <Button onClick={handleSaveChanges} className="bg-amber-600 hover:bg-amber-700">
            <Save className="mr-2 h-4 w-4" />
            Değişiklikleri Kaydet
          </Button>
        </div>
      </div>
    </div>
  )
}
