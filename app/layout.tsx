import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Küsbeoğlu Gıda | 130 Yıllık Baharat ve Gıda Geleneği",
  description:
    "Gaziantep'in tarihi Mecidiye Han'ında 1890'dan beri 5 kuşaktır hizmet veren Küsbeoğlu Gıda. Baharat, pekmez, bal, yağ ve kuruyemiş ürünleri.",
  keywords:
    "Küsbeoğlu Gıda, Gaziantep baharat, Antep baharat, geleneksel baharat, Mecidiye Han, Gaziantep kuruyemiş, Antep yöresel ürünler, doğal bal, pekmez, baharat satışı, Gaziantep çarşı, Antep lezzet, Küsbeoğlu, Mustafa Fevzi Özmimar",
  openGraph: {
    title: "Küsbeoğlu Gıda | 130 Yıllık Baharat ve Gıda Geleneği",
    description:
      "Gaziantep'in tarihi Mecidiye Han'ında 1890'dan beri 5 kuşaktır hizmet veren Küsbeoğlu Gıda. Baharat, pekmez, bal, yağ ve kuruyemiş ürünleri.",
    url: "https://kusbeoglugida.com",
    siteName: "Küsbeoğlu Gıda",
    locale: "tr_TR",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
