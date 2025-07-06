import React from "react";
import LinkPreview from "./link-preview";
import { useTranslations } from "next-intl";
const Local = () => {
  const t = useTranslations("local");
  const url =
    "https://www.rheinische-anzeigenblaetter.de/rhein-berg/c-nachrichten/lebenswichtige-hilfe-fuer-die-kinder-in-ghana_a330521?ref=curate";
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center text-hih-primary">
        {t("title")}
      </h2>
      <LinkPreview url={url} />
    </div>
  );
};

export default Local;
