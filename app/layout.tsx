import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Preloader from "../components/fourwalls/Preloader";

export const metadata: Metadata = {
  title: "Fourwalls Interiors & Constructions",
  description: "Exact replica build in Next.js 15"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white font-[var(--font-outfit)] text-[#1e4a5c] antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
