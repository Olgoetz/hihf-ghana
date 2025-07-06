import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MobileNavBar } from "@/components/mobile-navbar";
import Newsletter from "@/components/newsletter";
import { Separator } from "@/components/ui/separator";
import { BASE_URL } from "@/lib/constants";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <Navbar />
          <MobileNavBar />
          <div className="max-w-[1200px] p-4 mx-auto ">
            {children}

            <Separator className="my-16" />
            <Newsletter />
          </div>
          <Footer />
          <ScrollToTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
