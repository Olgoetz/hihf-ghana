import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MobileNavBar } from "@/components/mobile-navbar";
import Newsletter from "@/components/newsletter";
import { Separator } from "@/components/ui/separator";
import { BASE_URL } from "@/lib/constants";
import { Scroll } from "lucide-react";
import ScrollToTopButton from "@/components/scroll-to-top-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Help is Here for Ghana e.V.",
  keywords: [
    "Ghana, Bildung, Gesundheit, Hilfe, Spenden, Afrika, Verein, e.V., NGO, Ehrenamt",
  ],
  description:
    "Die 'Help is Here Foundation' wurde von Canni Tee-Lard offiziell in Accra, Ghana, als gemeinnützige Organisation gegründet, mit der Vision, allen Kindern in Ghana einen fairen und uneingeschränkten Zugang zum Bildungs- und Gesundheitswesen zu ermöglichen.",
  metadataBase:
    process.env.NODE_ENV != "production"
      ? new URL("http://localhost:3000")
      : new URL(BASE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MobileNavBar />
        <div className="max-w-[1200px] p-4 mx-auto ">
          {children}

          <Separator className="my-16" />
          <Newsletter />
        </div>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
