import Link from "next/link";
import React from "react";
import { LucideIcon } from "lucide-react";

interface CMSLinkProps {
  href: string;
  linkText: string;
  icon: LucideIcon;
}

function CMSLink({ href, linkText, icon: Icon }: CMSLinkProps) {
  return (
    <Link href={href}>
      <li className="flex gap-2 items-center">
        <Icon className="h-8 w-8" />
        {linkText}
      </li>
    </Link>
  );
}

export default CMSLink;
