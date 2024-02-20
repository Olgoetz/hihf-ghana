import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MobileNavBar } from "@/components/mobile-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Help is Here for Ghana e.V.",
  description:
    "Die &quot;Help is Here Foundation&quot; wurde von Canni Tee-Lard offiziell in Accra, Ghana, als gemeinnützige Organisation gegründet, mit der Vision, allen Kindern in Ghana einen fairen und uneingeschränkten Zugang zum Bildungs- und Gesundheitswesen zu ermöglichen.",
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
        <div className="max-w-[1200px] p-6 mx-auto ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
