import React, { use } from "react";

import Image from "next/image";
import LanguageSwitcher from "./language-switcher";
import { navLinks } from "./nav-links";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("navlinks");
  return (
    <div className="hidden md:flex w-full justify-between h-[100px] px-4">
      <div className="flex w-full justify-between">
        <Link href={"/" as any}>
          <Image
            src="/logo.jpg"
            width={150}
            height={100}
            alt="HIHF Ghana e.V."
          />
        </Link>

        <ul className="flex items-center text-lg gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.path as any}
              className="text-hih-primary uppercase  hover:bg-hih-primary/10 hover:rounded-lg p-4 "
            >
              <li>{t(link.title)}</li>
            </Link>
          ))}
        </ul>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
