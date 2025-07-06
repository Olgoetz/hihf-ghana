import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "../i18n/routing";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations({
    locale: routing.defaultLocale,
    namespace: "metaData",
  });

  return {
    name: "Help is Here for Ghana e.V.",
    short_name: "HIHF Ghana e.V.",
    description: t("shortDescription"),

    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
