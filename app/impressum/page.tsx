import React from "react";

import Image from "next/image";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getProjects } from "@/lib/graphql";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Separator } from "@/components/ui/separator";
export default async function Projects() {
  const { projects } = (await getProjects()) as any;

  return (
    <div className="pt-8 flex flex-col gap-y-14">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        Impressum
      </h1>
      <Separator />
      <div>
        <div className="pb-4">
          <h2 className="font-bold pb-4">Design und Umsetzung</h2>
          <p>
            Oliver Götz:{" "}
            <a className="text-hih-primary" href="mailto:info@goetz-oliver.de">
              info@goetz-oliver.de
            </a>
          </p>
        </div>

        <h2 className="font-bold pb-4">Angaben gemäß § 5 TMG</h2>
        <p>
          Help is Here for Ghana e.V. <br />
          Parkstraße 22 <br />
          51427 Bergisch Gladbach
        </p>
        <h3 className="font-bold py-4">Vertreten durch:</h3>
        <ul>
          <li>Lisa Maas (1. Vorsitzende)</li>
          <li>Philipp Hohmann (2. Vorsitzender)</li>
          <li>Stefan Deml (Kassenwart)</li>
          <li>Oliver Götz (Vorstand IT)</li>
        </ul>
        <h3 className="font-bold py-4">Registereintrag:</h3>
        <p>
          Eintragung im Vereinsregister. <br />
          Registergericht: Bergisch Gladbach <br />
          Registernummer: 20976
        </p>
        <h3 className="font-bold py-4">Haftungsausschluss:</h3>
        <h4 className="font-semibold py-4">Haftung für Inhalte</h4>
        <p>
          {/* Place your content for "Haftung für Inhalte" here */}
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
        <h4 className="font-semibold  py-4">Haftung für Links</h4>
        <p>
          {/* Place your content for "Haftung für Links" here */}
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h4 className="font-semibold py-4">Urheberrecht</h4>
        <p>
          {/* Place your content for "Urheberrecht" here */}
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
        <h4 className="font-semibold  py-4">Datenschutz</h4>
        <p>
          {/* Place your content for "Datenschutz" here */}
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z.B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
          Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von
          im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
          Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung
          und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
          Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
          Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
          etwa durch Spam-Mails, vor.
        </p>
        {/* <h4 className="font-semibold  py-4">Google Analytics</h4>
        <p>
       
          Diese Website benutzt Google Analytics, einen Webanalysedienst der
          Google Inc. (”Google”). Google Analytics verwendet sog. ”Cookies”,
          Textdateien, die auf Ihrem Computer gespeichert werden und die eine
          Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den
          Cookie erzeugten Informationen über Ihre Benutzung dieser Website
          (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in
          den USA übertragen und dort gespeichert. Google wird diese
          Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
          Reports über die Websiteaktivitäten für die Websitebetreiber
          zusammenzustellen und um weitere mit der Websitenutzung und der
          Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird
          Google diese Informationen gegebenenfalls an Dritte übertragen, sofern
          dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im
          Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre
          IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie
          können die Installation der Cookies durch eine entsprechende
          Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch
          darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
          Funktionen dieser Website voll umfänglich nutzen können. Durch die
          Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über
          Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und
          Weise und zu dem zuvor benannten Zweck einverstanden.
        </p> */}
        <h4 className="font-semibold  py-4">Cookies</h4>
        <p>Wir verwenden keine Cookies.</p>
      </div>
    </div>
  );
}
