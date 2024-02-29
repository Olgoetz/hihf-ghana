import React from "react";

import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
export default function AboutUs() {
  return (
    <div className="pt-8 flex flex-col gap-y-14">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        Über uns
      </h1>
      <Separator />
      <div className="grid md:grid-cols-2 gap-4">
        <CardContent className=" text-left">
          <p>
            Help is Here Foundation Ghana wurde 2013 in{" "}
            <a
              className="text-hih-primary font-bold"
              href="https://www.google.com/maps/place/Accra,+Ghana/@5.5912087,-0.1797294,12z/data=!3m1!4b1!4m6!3m5!1s0xfdf9084b2b7a773:0xbed14ed8650e2dd3!8m2!3d5.5592846!4d-0.1974306!16zL20vMGZueWM?entry=ttu"
            >
              Accra
            </a>
            , Ghana, von Cannizzarra Tee-Lard gegründet. Nach ein paar kleineren
            Projekten wurde die Organisation im Jahr 2015 offiziell registriert
            und wird seitdem als gemeinnütziger Verein in Ghana geführt. Canni's
            primäre Motivation für die Gründung des Vereins war es, die Kinder
            und Jugendlichen ihrer Heimatgemeinde in Labadi, Accra mit kleinen
            Initiativen nachhaltig zu unterstützen, um ihnen eine Perspektive
            für eine bessere Zukunft zu geben. Seitdem hat sich die Organisation
            stetig weiterentwickelt und die Projekte erstrecken sich zunehmend
            auf weitere Regionen in Ghana. Damit die Spendengelder unmittelbar
            und zielgerichtet bei den Kindern ankommen, achtet Canni stets
            darauf die administrativen Kosten so gering wie möglich zu halten.
          </p>
          <br />
          <p>
            Schon seit mehreren Jahren unterstützen wir, Canni und ihren Verein.
            Uns vereint eine langjährige Freundschaft zu Canni, unsere durch
            persönliche Aufenthalte gewachsene Liebe zu Ghana und unser
            unbändiger Wille einen Beitrag zu leisten, um Kindern in Ghana eine
            hoffnungsvolle und gleichberechtigte Zukunftsperspektive zu
            ermöglichen. 2021 haben wir uns dann entschlossen unsere
            Unterstützung zu bündeln und den als gemeinnützig anerkannten
            Schwestervereins &quot;Help is Here for Ghana e.V.&quot; in
            Deutschland zu gründen.
          </p>
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
