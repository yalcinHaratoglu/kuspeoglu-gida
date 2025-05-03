"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { productData as initialProductData } from "@/lib/product-data";
import Image from "next/image";

export default function PriceListPageClient() {
  const [activeTab, setActiveTab] = useState("baharatlar");
  const [productData, setProductData] = useState(initialProductData);

  useEffect(() => {
    // Sayfa yüklendiğinde en üste scroll yapma
    window.scrollTo(0, 0);

    // Handle hash in URL for direct category access
    const hash = window.location.hash.replace("#", "");
    if (hash && initialProductData[hash as keyof typeof initialProductData]) {
      setActiveTab(hash);

      // Scroll to the tab content
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    // Load saved products from localStorage if available
    const savedProducts = localStorage.getItem("kusbeogluProducts");
    if (savedProducts) {
      setProductData(JSON.parse(savedProducts));
    }
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Fiyat Listesi</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tüm ürünlerimizin güncel fiyat listesi
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-8 overflow-x-auto">
            <TabsList className="h-auto p-1">
              <TabsTrigger
                value="baharatlar"
                id="baharatlar"
                className="py-2 px-4"
              >
                Baharatlar
              </TabsTrigger>
              <TabsTrigger
                value="pekmezler"
                id="pekmezler"
                className="py-2 px-4"
              >
                Pekmezler
              </TabsTrigger>
              <TabsTrigger value="sirkeler" id="sirkeler" className="py-2 px-4">
                Sirkeler
              </TabsTrigger>
              <TabsTrigger value="eskiler" id="eskiler" className="py-2 px-4">
                Eşkiler
              </TabsTrigger>
              <TabsTrigger value="ballar" id="ballar" className="py-2 px-4">
                Ballar
              </TabsTrigger>
              <TabsTrigger value="yaglar" id="yaglar" className="py-2 px-4">
                Yağlar
              </TabsTrigger>
              <TabsTrigger value="diger" id="diger" className="py-2 px-4">
                Diğer Ürünler
              </TabsTrigger>
              <TabsTrigger
                value="kuruyemis"
                id="kuruyemis"
                className="py-2 px-4"
              >
                Kuruyemiş
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(productData).map(([category, products]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-48">
                        <Image
                          src={
                            product.image ||
                            "/placeholder.svg?height=400&width=600"
                          }
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{product.name}</h3>
                          <span className="font-bold text-amber-600">
                            {product.price}
                          </span>
                        </div>
                        {product.description && (
                          <p className="text-muted-foreground text-sm">
                            {product.description}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
