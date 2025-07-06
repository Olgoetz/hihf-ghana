import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Banknote } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";

export default function Donate() {
  const t = useTranslations("spenden");
  return (
    <div className="pt-8 flex flex-col gap-y-14">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        {t("title")}
      </h1>
      <Separator />
      <p className="text-lg text-center leading-loose">{t("description")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4">
        <Card className="p-4 ">
          <CardTitle className="text-2xl font-bold text-center text-hih-primary">
            {t("paypal")}
          </CardTitle>
          <CardContent className="py-4 leading-loose items-center justify-center gap-4 flex flex-col h-full w-full ">
            <FontAwesomeIcon
              icon={faPaypal}
              width={90}
              height={90}
              className="text-hih-primary"
            />
            <p className="text-sm md:text-base">{t("paypal_instructions")}</p>
          </CardContent>
        </Card>
        <Card className="p-4 ">
          <CardTitle className="text-2xl font-bold text-center text-hih-primary">
            {t("bank")}
          </CardTitle>
          <CardContent className="py-4 leading-loose text-center ">
            <Banknote className="h-20 w-20 mx-auto text-hih-primary" />
            <p className="text-sm md:text-base">{t("bank_details")}</p>
            <p className="text-sm md:text-base">{t("iban")}</p>
            <p className="text-sm md:text-base">{t("bic")}</p>
            <p className="text-sm md:text-base">{t("reference")}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
