import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Outfit } from "next/font/google";
import Preloader from "../components/fourwalls/Preloader";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Fourwalls Interiors & Constructions",
  description: "Premium interior design and construction services across South India"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable}`}>
      <body className="bg-white font-(family-name:--font-outfit) text-[#1e2e22] antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
