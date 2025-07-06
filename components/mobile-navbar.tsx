"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { navLinks } from "./nav-links";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LanguageSwitcher from "./language-switcher";

import { useTranslations } from "next-intl";

export function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navlinks");

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center w-full justify-between">
          <SheetTrigger asChild>
            <Button variant="ghost" onClick={() => setIsOpen(true)}>
              <Menu />
            </Button>
          </SheetTrigger>
          <Link href="/">
            <Image
              src="/logo.jpg"
              width={100}
              height={100}
              alt="HIHF Ghana e.V."
            />
          </Link>
        </div>
        <SheetContent side="left" className="w-full flex flex-col h-full p-0">
          <div className="flex-1 flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center text-lg gap-4 w-full">
              {navLinks.map((link) => (
                <li className="w-full" key={link.title}>
                  <Link
                    href={link.path}
                    className="w-full block text-center text-hih-primary uppercase hover:bg-hih-primary/10 hover:rounded-lg p-4 "
                    onClick={() => setIsOpen(false)}
                  >
                    {t(link.title)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center w-full mt-4">
              <LanguageSwitcher />
            </div>
          </div>
          <SheetClose asChild>
            <button className="absolute right-4 top-4" aria-label="Close">
              <X className="h-4 w-4" />
            </button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
