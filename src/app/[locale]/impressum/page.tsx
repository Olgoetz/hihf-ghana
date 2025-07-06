import React from "react";
import { Separator } from "@/components/ui/separator";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Projects() {
  const t = await getTranslations("impressum");
  const locale = await getLocale();

  return (
    <div className="pt-8 flex flex-col gap-y-14">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        {t("title")}
      </h1>
      <Separator />
      <div>
        <div className="pb-4">
          <h2 className="font-bold pb-4">{t("design")}</h2>
          <p>
            {t("by")}:{" "}
            <a className="text-hih-primary" href="mailto:info@goetz-oliver.de">
              {t("contact")}
            </a>
          </p>
        </div>

        <h2 className="font-bold pb-4">{t("register")}</h2>
        <p>
          Help is Here for Ghana e.V. <br />
          Parkstraße 22 <br />
          51427 Bergisch Gladbach
        </p>
        <h3 className="font-bold py-4">{t("represented_by")}</h3>
        <ul>
          <li>
            Lisa Maas ({locale === "de" ? "1.Vorsitzende" : "Chairwoman"})
          </li>
          <li>
            Philipp Hohmann (
            {locale === "de" ? "2.Vorsitzendee" : "2nd Chairman"})
          </li>
          <li>Stefan Deml ({locale === "de" ? "Kassenwart" : "Cashier"})</li>
          <li>
            Oliver Götz ({locale === "de" ? "Vorstand IT" : "Director IT"})
          </li>
        </ul>
        <h3 className="font-bold py-4">{t("register_entry")}</h3>
        <p>
          {locale === "de"
            ? "Eintragung im Vereinsregister."
            : "Entry in the register of associations."}{" "}
          <br />
          {locale === "de" ? "Registergericht:" : "Register court:"} Bergisch
          Gladbach <br />
          {locale === "de" ? "Registernummer:" : "Register number:"} : 20976
        </p>
        <h3 className="font-bold py-4">{t("liability")}</h3>
        <h4 className="font-semibold py-4">{t("liability_content")}</h4>
        <p>{t("liability_content_text")}</p>
        <h4 className="font-semibold  py-4">{t("liability_links")}</h4>
        <p>{t("liability_links_text")}</p>
        <h4 className="font-semibold py-4">{t("copyright")}</h4>
        <p>{t("copyright_text")}</p>
        <h4 className="font-semibold  py-4">{t("data_protection")}</h4>
        <p>{t("data_protection_text")}</p>
        <h4 className="font-semibold  py-4">{t("cookies")}</h4>
        <p>{t("cookies_text")}</p>
      </div>
    </div>
  );
}
