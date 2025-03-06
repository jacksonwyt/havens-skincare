import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/AnimationProvider";
import ViewportHeightFix from "@/components/ViewportHeightFix";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haven's Skincare | Esthetician in Newport Beach, CA",
  description: "Professional esthetician services in Newport Beach, California. Facials, skin treatments, and personalized skincare plans with a California coast vibe.",
  keywords: "esthetician Newport Beach, facial treatments California, skincare Newport Beach, California esthetician, beauty treatments Orange County",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ViewportHeightFix />
        <AnimationProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-var(--vh,1vh)*0)]">{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
