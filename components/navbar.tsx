import React from "react";
import { navlinks } from "./nav-links";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="hidden md:flex w-full justify-between h-[100px] px-4">
      <div className="flex w-full justify-between">
        <Link href="/">
          <Image
            src="/logo.jpg"
            width={150}
            height={100}
            alt="HIHF Ghana e.V."
          />
        </Link>

        <ul className="flex items-center text-lg gap-8">
          {navlinks.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className="text-hih-primary uppercase hover:bg-hih-primary/10 hover:rounded-lg p-4 "
            >
              <li>{link.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
