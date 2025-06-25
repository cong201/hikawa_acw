// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lato, Outfit } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Hikawa air condition web",
  description: "Hikawa air condition web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
