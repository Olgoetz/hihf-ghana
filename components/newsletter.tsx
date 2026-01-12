import React from "react";
import { useTranslations } from "next-intl";

function Newsletter() {
  const t = useTranslations("newsletter");
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center text-hih-primary">
        {t("title")}
      </h2>
      <p className="leading-loose text-center py-8">{t("description")}</p>
      <iframe
        src="http://newsletter.hihf-ghana.org/248/462/e11c7ac492/subscribe/form.html?_g=1768257023"
        frameborder="0"
        width="100%"
        height="550"
      ></iframe>
    </div>
  );
}

export default Newsletter;
