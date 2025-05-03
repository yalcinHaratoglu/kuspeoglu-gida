export type ProductType = {
  name: string;
  price: string;
  description?: string;
  image?: string;
};

export const productData: Record<string, ProductType[]> = {
  baharatlar: [
    {
      name: "Kimyon",
      price: "350 TL",
      image: "/images/baharatlar/kimyon.jpg",
    },
    {
      name: "Köfte baharatı",
      price: "300 TL",
      image: "/images/baharatlar/kofte-baharati.webp",
    },
    {
      name: "Toz sumak",
      price: "250 TL",
      image: "/images/baharatlar/sumak.jpg",
    },
    {
      name: "Zencefil",
      price: "250 TL",
      image: "/images/baharatlar/zencefil.jpg",
    },
    {
      name: "Zerdeçal",
      price: "250 TL",
      image: "/images/baharatlar/tozZerdecal.jpg",
    },
    {
      name: "Çörek otu",
      price: "200 TL",
      image: "/images/baharatlar/corekotu.webp",
    },
    {
      name: "Zahter",
      price: "200 TL",
      image: "/images/baharatlar/zahter.jpg",
    },
    {
      name: "Nane",
      price: "200 TL",
      image: "/images/baharatlar/nane.jpeg",
    },
    {
      name: "İpek acı biber",
      price: "300 TL",
      image: "/images/baharatlar/aciipekbiber.jpg",
    },
    {
      name: "İpek tatlı biber",
      price: "350 TL",
      image: "/images/baharatlar/tatliipekbiber.jpg",
    },
    {
      name: "İsot",
      price: "350 TL",
      image: "/images/baharatlar/isot.webp",
    },
    {
      name: "Acı biber salçası",
      price: "250 TL",
      image: "/images/baharatlar/acıbibersalcasi,.jpg",
    },
    {
      name: "Tatlı biber salçası",
      price: "250 TL",
      image: "/images/baharatlar/tatlibibersal.asi.jpg",
    },
    {
      name: "Domates salçası",
      price: "150 TL",
      image: "/images/baharatlar/domatessalcasi.webp",
    },
  ],
  pekmezler: [
    {
      name: "Üzüm pekmezi katı",
      price: "350 TL",
      image: "/images/pekmezler/uzumpekmezikati.webp",
    },
    {
      name: "Üzüm pekmezi sıvı",
      price: "300 TL",
      image: "/images/pekmezler/uzumpekmezisivi.webp",
    },
    {
      name: "Andız pekmezi 600 gr",
      price: "150 TL",
      image: "/images/pekmezler/andizpekmezi.jpg",
    },
    {
      name: "Kozalak pekmezi 600 gr",
      price: "150 TL",
      image: "/images/pekmezler/kozalakpekmezi.webp",
    },
    {
      name: "Keçi boynuzu pekmezi",
      price: "250 TL",
      image: "/images/pekmezler/keciboynuzupekmezi.png",
    },
    {
      name: "Yaş Hurma pekmezi 650 gr",
      price: "200 TL",
      image: "/images/pekmezler/yashurmapekmezi.jpg",
    },
    {
      name: "Dut pekmezi 500 gr",
      price: "250 TL",
      image: "/images/pekmezler/dutpekmezi.jpg",
    },
    {
      name: "Karadut özü 670 gr",
      price: "200 TL",
      image: "/images/pekmezler/karadutozu.jpg",
    },
  ],
  sirkeler: [
    {
      name: "Alıç sirkesi 500 ml",
      price: "100 TL",
      image: "/images/sirke.jpg",
    },
    {
      name: "Elma sirkesi 500 ml",
      price: "100 TL",
      image: "/images/sirke.jpg",
    },
    {
      name: "Üzüm sirkesi 500 ml",
      price: "100 TL",
      image: "/images/sirke.jpg",
    },
    {
      name: "Limon sarımsak sirkesi 500 ml",
      price: "100 TL",
      image: "/images/sirke.jpg",
    },
  ],
  eskiler: [
    {
      name: "Koruk eşkisi 600 gr",
      price: "200 TL",
      image: "/images/eksiler/korukeksi.jpg",
    },
    {
      name: "Nar eşkisi",
      price: "450 TL",
      image: "/images/eksiler/nareksisi.webp",
    },
    {
      name: "Sumak eşkisi",
      price: "600 TL",
      image: "/images/eksiler/sumakeksisi.jpg",
    },
  ],
  ballar: [
    {
      name: "Sivas yayla süzme çiçek balı",
      price: "350 TL",
      image: "/images/ballar/sivas-yayla-suzme.jpg",
    },
    {
      name: "Bingöl yayla süzme çiçek balı",
      price: "450 TL",
      image: "/images/ballar/bingolyayalasuzmecicekbali.jpg",
    },
    {
      name: "Muğla süzme çam balı",
      price: "500 TL",
      image: "/images/ballar/muglasuzmecam.jpg",
    },
    {
      name: "Sedir ıhlamur balı süzme",
      price: "500 TL",
      image: "/images/ballar/sedirbali.webp",
    },
    {
      name: "Siirt pervari süzme karakovan",
      price: "750 TL",
      image: "/images/ballar/sirpervarisuzmebal.jpg",
    },
    {
      name: "Bitlis hizan süzme karakovan",
      price: "850 TL",
      image: "/images/ballar/bitlishizankarakovan.jpg",
    },
    {
      name: "Zahter balı Karakovan",
      price: "1000 TL",
      image: "/images/ballar/zahter-bali.jpg",
    },
    {
      name: "Sivas petek fenni kovan",
      price: "350 TL",
      image: "/images/ballar/sivas-petek.jpg",
    },
    {
      name: "Bingöl karakovan",
      price: "650 TL",
      image: "/images/ballar/bingolkarakovan.jpg",
    },
    {
      name: "Erzurum kütük balı",
      price: "1000 TL",
      image: "/images/ballar/erzurumkutukbali.png",
    },
    {
      name: "Bitlis hizan karakovan",
      price: "1000 TL",
      image: "/images/ballar/bitlishizankarakovan.jpg",
    },
  ],
  yaglar: [
    {
      name: "İnek sadeyağı",
      price: "650 TL",
      image: "/images/yaglar/ineksadeyag.webp",
    },
    {
      name: "Koyun sadeyağ",
      price: "700 TL",
      image: "/images/yaglar/koyunsadeyag.jpg",
    },
    {
      name: "Koyun-keçi sadeyağ",
      price: "750 TL",
      image: "/images/yaglar/inekkoyunkarisik.jpg",
    },
    {
      name: "Zeytin yağı tenekesi",
      price: "4800 TL (kg 300 TL)",
      image: "/images/yaglar/zeytinyagi.jpeg",
    },
    {
      name: "Çörek otu yağı 250 ml",
      price: "150 TL",
      image: "/images/yaglar/corekotuyagi.webp",
    },
    {
      name: "Kantaron yağı 250 ml",
      price: "250 TL",
      image: "/images/yaglar/kantoronyagi.webp",
    },
  ],
  diger: [
    {
      name: "Muska",
      price: "600 TL",
      image: "/images/digerUrunler/muska.webp",
    },
    {
      name: "Cevizli sucuk",
      price: "350 TL",
      image: "/images/digerUrunler/cevizliSucuk.webp",
    },
    {
      name: "Lokum çeşitleri",
      price: "400 TL",
      image: "/images/digerUrunler/lokum.webp",
    },
  ],
  kuruyemis: [
    {
      name: "Fındık",
      price: "600 TL",
      image: "/images/kuruyemis/findik.webp",
    },
    {
      name: "Badem",
      price: "700 TL",
      image: "/images/kuruyemis/badem.jpg",
    },
    {
      name: "Tuzlu fıstık",
      price: "750 TL",
      image: "/images/kuruyemis/tuzlufistik.webp",
    },
    {
      name: "Atom karışık",
      price: "600 TL",
      image: "/images/kuruyemis/atom.jpg",
    },
    {
      name: "İzmir üzümü",
      price: "250 TL",
      image: "/images/kuruyemis/izmiruzum.jpg",
    },
    {
      name: "Siyah üzüm",
      price: "300 TL",
      image: "/images/kuruyemis/siyahuzum.jpg",
    },
    {
      name: "Besni üzümü",
      price: "300 TL",
      image: "/images/kuruyemis/besniuzum.webp",
    },
    {
      name: "Kaju",
      price: "500 TL",
      image: "/images/kuruyemis/kaju.jpg",
    },
    {
      name: "Sarı kayısı",
      price: "600 TL",
      image: "/images/kuruyemis/sarikayisi.webp",
    },
    {
      name: "Siyah kayısı",
      price: "700 TL",
      image: "/images/kuruyemis/siyahkayisi.webp",
    },
    {
      name: "Ceviz içi",
      price: "450 TL",
      image: "/images/kuruyemis/cevizici.jpg",
    },
    {
      name: "Hurma",
      price: "600 TL",
      image: "/images/kuruyemis/hurma.jpg",
    },
  ],
};
