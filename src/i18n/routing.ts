import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["de", "en"],

  // Used when no locale matches
  defaultLocale: "de",

  pathnames: {
    "/": {
      de: "/",
      en: "/",
    },
    "/projekte": {
      de: "/projekte",
      en: "/projects",
    },
    "/spenden": {
      de: "/spenden",
      en: "/donate",
    },
    "/galerie": {
      de: "/galerie",
      en: "/gallery",
    },
    "/vorstand": {
      de: "/vorstand",
      en: "/board",
    },
    "/ueber-uns": {
      de: "/ueber-uns",
      en: "/about-us",
    },
    "/archiv": {
      de: "/archiv",
      en: "/archive",
    },
  },
});
