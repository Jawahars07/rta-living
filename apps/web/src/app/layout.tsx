import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rta Living — Your Home, Thinking",
  description:
    "A living digital twin for every light, lock, breath of air and watt of energy in your residence.",
  metadataBase: new URL("https://rtaliving.com"),
  openGraph: {
    title: "Rta Living — Your Home, Thinking",
    description: "Private home intelligence, unified in one living digital twin.",
    url: "https://rtaliving.com",
    siteName: "Rta Living",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
