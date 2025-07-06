import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("ueber_uns");
  return (
    <div className="pt-8 flex flex-col gap-y-14">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        {t("title")}
      </h1>
      <Separator />
      <div className="grid md:grid-cols-2 gap-4">
        <CardContent className=" text-left">
          <p>
            {t.rich("p1", {
              location: (chunks) => (
                <a
                  className="text-hih-primary font-bold\"
                  href="https://www.google.com/maps/place/Accra,+Ghana/@5.5912087,-0.1797294,12z/data=!3m1!4b1!4m6!3m5!1s0xfdf9084b2b7a773:0xbed14ed8650e2dd3!8m2!3d5.5592846!4d-0.1974306!16zL20vMGZueWM?entry=ttu"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
          <br />
          <p>{t("p2")}</p>
        </CardContent>
        <div className="relative h-[400px] md:h-full w-full md:col-span-1 ">
          <Image
            src="/canni.jpeg"
            alt="Canni in Ghana"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
