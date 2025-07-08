import React from "react";
import { Cake, CalendarClock, Eye, Goal } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("header");
  return (
    <div className="pt-8 flex flex-col gap-y-14">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        {t("title")}
      </h1>
      <Separator />
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4 bg-hih-primary text-white ">
          <CardTitle className="flex items-center justify-center  uppercase">
            <Eye className="mr-5 h-14 w-14 " />
            <p> {t("visionTitle")}</p>
          </CardTitle>
          <CardContent className="leading-loose text-center">
            {t("visionContent")}
          </CardContent>
        </Card>

        <Card className="p-4 bg-hih-primary text-white ">
          <CardTitle className="flex items-center justify-center  uppercase">
            <Goal className="mr-5 h-14 w-14" />
            <p> {t("missionTitle")}</p>
          </CardTitle>
          <CardContent className="leading-loose text-center">
            {t("missionContent")}
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-4 pt-8">
        <div className="md:col-span-2">
          <div className="flex items-center py-4">
            <Cake className="mr-5 h-10 w-10 text-hih-primary shrink-0" />
            <h2 className="text-lg md:text-xl font-bold">
              {t("foundation2015Title")}
            </h2>
          </div>
          <p className="leading-loose">{t("foundation2015Content")}</p>
        </div>
        <div className="relative h-[300px] w-full md:col-span-1 ">
          <Image
            src="/hero_1.jpg"
            alt="Helpe is Here Foundation"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 ">
        <div className="relative h-[300px]   w-full md:col-span-1">
          <Image
            src="/hero_2.jpg"
            alt="Help is Here for Ghana e.V."
            fill
            className="object-cover rounded-lg "
          />
        </div>
        <div className="md:col-span-2">
          <div className="flex items-center  py-4">
            <CalendarClock className="mr-5 h-10 w-10 text-hih-primary shrink-0" />
            <h2 className="text-lg md:text-xl font-bold">
              {t("foundation2021Title")}
            </h2>
          </div>
          <p className="leading-loose">{t("foundation2021Content")}</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4 pt-8">
        <div className="md:col-span-2">
          <div className="flex items-center py-4">
            <CalendarClock className="mr-5 h-10 w-10 text-hih-primary shrink-0" />
            <h2 className="text-lg md:text-xl font-bold">
              {t("foundationUSATitle")}
            </h2>
          </div>
          <p className="leading-loose">{t("foundationUSAContent")}</p>
        </div>
        <div className="relative h-[300px] w-full md:col-span-1 ">
          <Image
            src="/hero_usa.jpg"
            alt="Help is Here Foundation US"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      
    </div>
  );
}
