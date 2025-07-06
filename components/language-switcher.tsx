"use client";
import React from "react";
import { usePathname } from "@/src/i18n/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // Helper to replace the locale in the pathname
  function getLocalePath(locale: string) {
    // Assumes path starts with /[locale]/...
    const parts = pathname.split("/");
    if (parts.length > 1 && (parts[1] === "de" || parts[1] === "en")) {
      parts[1] = locale;
      return parts.join("/");
    }
    // fallback: just prefix
    return `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
  }

  return (
    <div className="flex items-center gap-2 ml-4">
      <a
        href={getLocalePath("de")}
        className="px-2 py-1 rounded border border-hih-primary text-hih-primary bg-white hover:bg-hih-primary hover:text-white transition"
        aria-label="Switch to German"
      >
        DE
      </a>
      <a
        href={getLocalePath("en")}
        className="px-2 py-1 rounded border border-hih-primary text-hih-primary bg-white hover:bg-hih-primary hover:text-white transition"
        aria-label="Switch to English"
      >
        EN
      </a>
    </div>
  );
}
