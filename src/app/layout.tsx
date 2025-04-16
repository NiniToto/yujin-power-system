import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import QuickMenu from "@/components/ui/QuickMenu";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "유진파워시스템 - 혁신적인 전력 솔루션",
  description: "유진파워시스템은 혁신적인 전력 솔루션으로 더 밝은 미래를 만들어 갑니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">
        <LanguageProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <QuickMenu />
        </LanguageProvider>
      </body>
    </html>
  );
}
