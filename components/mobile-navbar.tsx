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
import { navlinks } from "./nav-links";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const onClick = (href: string) => {
    router.push(href);
  };
  return (
    <div className="md:hidden">
      <Sheet open={isOpen}>
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
        <SheetContent side="left" className="w-full">
          <ul className="flex flex-col items-center text-lg gap-8">
            {navlinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-hih-primary uppercase hover:bg-hih-primary/10 hover:rounded-lg p-4 "
              >
                <li>{link.title}</li>
              </Link>
            ))}
          </ul>
          <SheetClose className="absolute right-4 top-4">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
