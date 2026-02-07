import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Gran Casino de Totana - Sociedad Cultural y Recreativa",
    template: "%s | Gran Casino de Totana"
  },
  description: "Portal oficial del Gran Casino de Totana. Descubra la elegancia centenaria, nuestra agenda cultural y el legado histórico de una de las sociedades más prestigiosas de Murcia.",
  keywords: ["Casino Totana", "Sociedad Cultural", "Patrimonio Totana", "Cultura Murcia", "Gran Casino"],
  authors: [{ name: "Gran Casino de Totana" }],
  creator: "Gran Casino de Totana",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://casinototana.com",
    title: "Gran Casino de Totana - Tradición y Excelencia desde 1890",
    description: "Donde la tradición centenaria se encuentra con la elegancia del siglo XXI.",
    siteName: "Gran Casino de Totana",
    images: [{
      url: "/images/brand/logo-casino.png",
      width: 800,
      height: 800,
      alt: "Gran Casino de Totana Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gran Casino de Totana",
    description: "Sociedad Cultural y Recreativa desde 1890.",
    images: ["/images/brand/logo-casino.png"],
  },
  icons: {
    icon: "/images/brand/logo-casino.png",
    apple: "/images/brand/logo-casino.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

import BottomNav from "@/components/layout/BottomNav";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <Footer />
        <BottomNav />
        <CookieConsent />
      </body>
    </html>
  );
}
