"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Lock, User } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState("")

  useEffect(() => {
    // Sayfa yüklendiğinde en üste scroll yapma
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Check credentials
    if (formData.username === "mustafa" && formData.password === "kuspeoglu2025!") {
      toast({
        title: "Giriş başarılı",
        description: "Yönetim paneline yönlendiriliyorsunuz.",
        variant: "success",
      })
      // Başarılı girişi sessionStorage'a kaydet
      sessionStorage.setItem("adminAuthenticated", "true")
      router.push("/admin/dashboard")
    } else {
      setError("Kullanıcı adı veya şifre hatalı.")
      toast({
        title: "Giriş başarısız",
        description: "Kullanıcı adı veya şifre hatalı.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="py-12 min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Yönetici Girişi</h1>
            <p className="text-muted-foreground">Fiyat listesini düzenlemek için giriş yapın</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Kullanıcı Adı</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {error && <div className="text-red-500 text-sm text-center">{error}</div>}

            <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
              Giriş Yap
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
