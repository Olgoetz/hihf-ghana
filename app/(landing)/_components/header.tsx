import React from "react";
import { Cake, CalendarClock, Eye, Goal } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
export default function Header() {
  return (
    <div className="pt-8 flex flex-col gap-y-14">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        Help is Here for Ghana e.V.
      </h1>
      <Separator />
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4 bg-hih-primary text-white ">
          <CardTitle className="flex items-center justify-center  uppercase">
            <Eye className="mr-5 h-14 w-14 " />
            <p> Unsere Vision</p>
          </CardTitle>
          <CardContent className="leading-loose text-center">
            Kindern und jungen Menschen in Ghana einen fairen und
            uneingeschränkten Zugang zum Bildungs- und Gesundheitswesen zu
            ermöglichen und sie dabei zu assistieren, die Weichen für ihre
            Zukunft zu stellen. Eine Zukunft in der Niemand zurückgelassen wird
            und in dem alle Kinder gleiche Startbedingungen haben, unabhängig
            von ihrem sozialen und ethnischen Hintergrund.
          </CardContent>
        </Card>

        <Card className="p-4 bg-hih-primary text-white ">
          <CardTitle className="flex items-center justify-center  uppercase">
            <Goal className="mr-5 h-14 w-14" />
            <p> Unsere Mission</p>
          </CardTitle>
          <CardContent className="leading-loose text-center">
            Unsere Mission ist es mit zielgerichteten Projekten Kindern aus
            benachteiligten Gesellschaftsschichten Zugang zu Bildung und zum
            Gesundheitswesen zu verschaffen und diese Projekte finanziell mit
            der Hilfe unserer Spender zu unterstützen und erfolgreich
            umzusetzen.
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-4 pt-8">
        <div className="md:col-span-2">
          <div className="flex items-center py-4">
            <Cake className="mr-5 h-10 w-10 text-hih-primary shrink-0" />
            <h2 className="text-lg md:text-xl font-bold">
              2015 - Das Gründungsjahr der &quot;Help is Here Foundation&quot;
            </h2>
          </div>
          <p className="leading-loose">
            Die &quot;Help is Here Foundation&quot; wurde von Canni Tee-Lard
            offiziell in Accra, Ghana, als gemeinnützige Organisation gegründet,
            mit der Vision, allen Kindern in Ghana einen fairen und
            uneingeschränkten Zugang zum Bildungs- und Gesundheitswesen zu
            ermöglichen.
          </p>
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
              2021 - Das Gründungsjahr von &quot;Help is Here for Ghana e.
              V.&quot;
            </h2>
          </div>
          <p className="leading-loose">
            Wir gründeten den Schwesterverein &quot;Help is Here for Ghana
            e.V.&quot;, um unserer langjährigen Freundin Canni sowie ihrer
            fantastischen Arbeit über die letzten 6 Jahre zu unterstützen und um
            einen Beitrag zum Erreichen der Vision zu leisten.
          </p>
        </div>
      </div>
    </div>
  );
}
