"use client";
import React from "react";
import { usePathname, useRouter } from "@/src/i18n/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  // Helper to replace the locale in the pathname
  function getLocalePath(locale: string) {
    router.replace({ pathname }, { locale });
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => getLocalePath("de")}
        className="px-2 py-1 rounded border border-hih-primary text-hih-primary bg-white hover:bg-hih-primary hover:text-white transition"
        aria-label="Switch to German"
      >
        DE
      </button>
      <button
        onClick={() => getLocalePath("en")}
        className="px-2 py-1 rounded border border-hih-primary text-hih-primary bg-white hover:bg-hih-primary hover:text-white transition"
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
