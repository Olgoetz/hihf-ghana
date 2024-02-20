import React from "react";

import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Banknote } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
export default function Donate() {
  return (
    <div className="pt-8 flex flex-col gap-y-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        Spenden
      </h1>
      <Separator />

      <p className="text-lg text-center leading-loose">
        Gerne kannst Du über folgende Optionen spenden. Sämtliche Spenden gehen
        zu 100% an die Help is Here Foundation. Falls gewünscht stellen wir Dir
        eine Spendenquittung aus. Schreibe uns dafür einfach eine Nachricht{" "}
        <a href="mailto:info@hihf-ghana.org" className="text-hih-primary">
          info@hihf-ghana.org
        </a>
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4">
        <Card className="p-4 ">
          <CardTitle className="text-2xl font-bold text-center text-hih-primary">
            Spende per PayPal
          </CardTitle>
          <CardContent className="py-4 leading-loose items-center justify-center gap-4 flex flex-col h-full w-full ">
            <FontAwesomeIcon
              icon={faPaypal}
              width={90}
              height={90}
              className="text-hih-primary"
            />
            <p>
              Bitte an{" "}
              <span className="text-hih-primary">info@hihf-ghana.org</span>
            </p>
          </CardContent>
        </Card>
        <Card className="p-4 ">
          <CardTitle className="text-2xl font-bold text-center text-hih-primary">
            Spende per Überweisung
          </CardTitle>
          <CardContent className="py-4 leading-loose text-center ">
            <Banknote className="h-20 w-20 mx-auto text-hih-primary" />
            <p>
              Help is Here for Ghana e.V.
              <br />
              IBAN: DE88 3206 1384 1518 1840 04
              <br />
              BIC: GENODED1GDL
              <br />
              Verwendungszweck: Spende
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
