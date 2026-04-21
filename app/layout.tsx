import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GlobalEffects from "@/components/GlobalEffects";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Fourwalls Interiors & Constructions | Architectural Minimalism",
  description:
    "Crafting spaces that resonate through precision engineering and intentional architectural soul.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${notoSerif.variable} ${plusJakartaSans.variable} bg-background text-on-surface font-body selection:bg-tertiary-fixed-dim selection:text-on-tertiary-fixed`}
        style={{
          fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
        }}
      >
        <GlobalEffects />
        {children}
      </body>
    </html>
  );
}
