import { Separator } from "@/components/ui/separator";
import React from "react";

export default function Info() {
  return (
    <div className="pt-8 flex flex-col gap-y-14">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        Information
      </h1>
      <Separator />

      <h2 id="bildungssystem" className="text-xl font-extrabold">
        So funktioniert das ghanaische Bildungssystem
      </h2>
      <ol className="leading-normal space-y-4">
        <li>
          <strong className="text-hih-primary">
            1. Kostenlose Grundbildung:
          </strong>{" "}
          Ghana bietet eine kostenlose Basisbildung an, die aus sechs Jahren
          Primarschulbildung und drei Jahren Junior High School besteht. Dies
          soll sicherstellen, dass alle Kinder Zugang zu grundlegenden
          Bildungsmöglichkeiten haben.
        </li>
        <li>
          <strong className="text-hih-primary">2. Schulpflicht: </strong> Die
          Schulpflicht in Ghana erstreckt sich auf die Primar- und Junior High
          School-Ebene. Eltern sind gesetzlich verpflichtet, ihre Kinder zur
          Schule zu schicken, und es gibt staatliche Maßnahmen zur Durchsetzung
          dieser Pflicht.
        </li>
        <li>
          <strong className="text-hih-primary">3. Mehrsprachigkeit: </strong>{" "}
          Das Bildungssystem in Ghana ist mehrsprachig ausgerichtet. Obwohl
          Englisch die offizielle Unterrichtssprache ist, wird in den unteren
          Klassen oft in der Muttersprache unterrichtet, um den SchülerInnen den
          Einstieg zu erleichtern.
        </li>
        <li>
          <strong className="text-hih-primary">
            4. Das Senior High School (SHS) System:
          </strong>{" "}
          Nach der Junior High School haben die SchülerInnen die Möglichkeit, in
          das Senior High School (SHS) System einzutreten. Hier wählen sie
          zwischen verschiedenen Tracks, die entweder allgemeine Bildung,
          technische Ausbildung oder berufliche Ausbildung vertiefen. Ein Fokus
          hierbei ist auch die Landesentwicklung Ghanas, so gibt es spezielle
          Programme zur Förderung von Landwirtschaft, Technologie und Handwerk.
        </li>
        <li>
          <strong className="text-hih-primary">5. Herausforderungen: </strong>{" "}
          Trotz dieser Merkmale stehen dem ghanaischen Bildungssystem auch
          Herausforderungen gegenüber, darunter begrenzte Ressourcen,
          unzureichende Infrastruktur, LehrerInnen Mangel und regionale
          Ungleichheiten im Zugang zur Bildung. Die Regierung arbeitet jedoch
          daran, diese Probleme anzugehen und das Bildungssystem zu verbessern.
        </li>
      </ol>

      <Separator />

      <h2 id="gesundheitssystem" className="text-xl font-extrabold">
        So funktioniert das ghanaische Gesundheitssystem
      </h2>
      <ol className="leading-normal space-y-4">
        <li>
          <strong className="text-hih-primary">
            1. Universal Health Coverage (UHC):
          </strong>{" "}
          Ghana hat sich dem Ziel verschrieben, eine universelle
          Gesundheitsversorgung zu gewährleisten. Das bedeutet, dass die
          Regierung bestrebt ist, allen BürgerInnen Zugang zu erschwinglichen
          und qualitativ hochwertigen Gesundheitsdiensten zu ermöglichen.
        </li>
        <li>
          <strong className="text-hih-primary">
            2. National Health Insurance Scheme (NHIS):
          </strong>{" "}
          Ein zentrales Merkmal des ghanaischen Gesundheitssystems ist das
          National Health Insurance Scheme (NHIS), ein staatlich unterstütztes
          Krankenversicherungssystem. Unter diesem Programm können berechtigte
          BürgerInnen eine Mitgliedschaft erwerben und Zugang zu einer Reihe von
          medizinischen Leistungen und Behandlungen erhalten.
        </li>
        <li>
          <strong className="text-hih-primary">3. Primärversorgung:</strong> Das
          ghanaische Gesundheitssystem legt einen starken Schwerpunkt auf die
          Primärversorgung, die auf Gemeindeebene angeboten wird. Dies umfasst
          Gesundheitszentren, Kliniken und Krankenhäuser in ländlichen Gebieten
          sowie Programme zur Förderung der Gesundheitsaufklärung und Prävention
          von Krankheiten.
        </li>
        <li>
          <strong className="text-hih-primary">
            4. Herausforderungen und Verbesserungsbedarf:
          </strong>{" "}
          Obwohl das ghanaische Gesundheitssystem Fortschritte gemacht hat,
          stehen ihm auch Herausforderungen gegenüber. Dazu gehören begrenzte
          Ressourcen, ungleiche Verteilung von Gesundheitseinrichtungen zwischen
          städtischen und ländlichen Gebieten, Engpässe bei medizinischem
          Personal und Infrastruktur sowie finanzielle Herausforderungen im
          Zusammenhang mit der Nachhaltigkeit des NHIS.
        </li>
        <li>
          <strong className="text-hih-primary">
            5. Internationale Zusammenarbeit:
          </strong>{" "}
          Ghana kooperiert mit internationalen Organisationen und Geberländern,
          um die Gesundheitsdienste im Land zu verbessern. Dies umfasst
          Partnerschaften zur Stärkung der Gesundheitssysteme, zur Bekämpfung
          von Infektionskrankheiten wie HIV/AIDS, Malaria und Tuberkulose sowie
          zur Förderung von Impfprogrammen und anderen öffentlichen
          Gesundheitsinitiativen.
        </li>
      </ol>

      <h2 className="text-xl font-extrabold">
        So funktioniert das National Health Insurance Scheme (NHIS) für
        ghanaische StaatsbürgerInnen
      </h2>
      <ol className="leading-normal space-y-4">
        <li>
          <strong className="text-hih-primary">1. Antragstellung:</strong>{" "}
          Interessierte Personen müssen ein Antragsformular ausfüllen, das bei
          NHIS-Anlaufstellen, Bezirksämtern, Krankenhäusern oder
          Gesundheitszentren erhältlich ist. Dieses Formular erfordert in der
          Regel persönliche Daten und möglicherweise Angaben zum Einkommen oder
          zur Haushaltsgröße. Zur Unterstützung des Antrags können zusätzliche
          Dokumente erforderlich sein, wie beispielsweise ein Identitätsnachweis
          sowie Angaben zu Familienangehörigen, die ebenfalls in das NHIS
          aufgenommen werden sollen.
        </li>
        <li>
          <strong className="text-hih-primary">2. Zahlung von Gebühren:</strong>{" "}
          Das NHIS erhebt eine Registrierungsgebühr und Mitgliedschaftsgebühren,
          die je nach Einkommen und Familiengröße gestaffelt sind. Die Gebühren
          sind oft erschwinglich und sollen sicherstellen, dass die Dienste des
          NHIS für eine breite Bevölkerungsschicht zugänglich sind. Für
          bestimmte Gruppen wie Kinder, Schwangere und einkommensschwache
          Familien können reduzierte Gebühren gelten. Die Gebühren für das
          National Health Insurance Scheme (NHIS) müssen in der Regel jährlich
          entrichtet werden. Eine regelmäßige Zahlung von Beiträgen sichert die
          Kontinuität der Versicherung ab.
        </li>
        <li>
          <strong className="text-hih-primary">
            3. Ausstellung einer Mitgliedskarte:
          </strong>{" "}
          Nach Abschluss des Antragsprozesses erhalten diejenigen, die
          erfolgreich sind, eine NHIS-Mitgliedskarte. Diese Karte dient als
          Nachweis für die Berechtigung zur Nutzung der Gesundheitsdienste, die
          im Rahmen des NHIS abgedeckt sind.
        </li>
      </ol>
      <p>
        Laut den neuesten verfügbaren Daten von 2019 waren rund 40% der
        ghanaischen Bevölkerung bei NHIS registriert.
      </p>

      <Separator />

      <h2 id="entwicklungszusammenarbeit" className="text-xl font-extrabold">
        Wie stellen wir sicher, nachhaltige Entwicklung zu fördern und was sind
        die Grundlagen unserer Arbeit?
      </h2>

      <div>
        <p className="py-2">
          Help is Here for Ghana e.V. (Deutschland) leistet gemeinsam mit Help
          is Here Foundation (Ghana) Entwicklungszusammenarbeit in Ghana. Dabei
          orientieren wir uns an den Zielen zur nachhaltigen Entwicklung der
          Vereinten Nationen Agenda 2030. Ein besonderer Fokus für uns liegt auf
          den Zielen (
          <a href="https://sdgs.un.org/goals" className="text-hih-primary">
            SDGs
          </a>
          )
        </p>
        <ul className="text-center py-2 space-y-4 max-w-lg mx-auto">
          <li className="p-4 bg-hih-primary rounded-lg text-white w-full">
            3 - GESUNDHEIT & WOHLERGEHEN
          </li>
          <li className="p-4 bg-hih-primary rounded-lg text-white w-full">
            4 - HOCHWERTIGE BILDUNG
          </li>
          <li className="p-4 bg-hih-primary rounded-lg text-white w-full">
            5 - GESCHLECHTERGLEICHHEIT
          </li>
          <li className="p-4 bg-hih-primary rounded-lg text-white w-full">
            6 - SAUBERES WASSER & SANITÄREINRICHTUNGEN
          </li>
          <li className="p-4 bg-hih-primary rounded-lg text-white w-full">
            10 - WENIGER UNGLEICHHEITEN
          </li>
        </ul>

        <p className="py-2">
          Hierbei ist die Erreichung eines Zieles immer nur unter der Bedingung
          möglich, dass auch die anderen Ziele erreicht werden bzw. signifikante
          Fortschritte gemacht werden. Die insgesamt 17 Ziele können also nie
          unabhängig voneinander gedacht werden.
        </p>
      </div>

      <h2 className="text-xl font-extrabold">
        Was ist eigentlich der Unterschied zwischen Entwicklungshilfe und
        Entwicklungszusammenarbeit?
      </h2>

      <div>
        <p className="py-2">
          Entwicklungshilfe und Entwicklungszusammenarbeit sind zwei Konzepte
          mit unterschiedlichen Ansätzen und Zielen. Wobei die Entwicklungshilfe
          zunehmend in den Hintergrund rückt.
        </p>
        <ul className="py-2 ml-6 space-y-4 list-disc">
          <li>
            Entwicklungshilfe (hierarchisch): Entwicklungshilfe bezieht sich in
            der Regel auf die finanzielle oder materielle Unterstützung, die von
            Regierungen, internationalen Organisationen, NGOs oder anderen
            Gebern bereitgestellt wird, um die wirtschaftliche und soziale
            Entwicklung in ärmeren Ländern zu fördern. Diese Hilfe kann in Form
            von direkter finanzieller Unterstützung, Sachleistungen, technischer
            Hilfe, Ausbildung oder anderen Ressourcen bereitgestellt werden.
            Entwicklungshilfe zielt darauf ab, kurzfristige Bedürfnisse zu
            decken und akute Probleme zu lösen.
          </li>
          <li>
            Entwicklungszusammenarbeit (auf Augenhöhe, nach dem Grundsatz der
            Hilfe zur Selbsthilfe): Entwicklungszusammenarbeit hingegen
            bezeichnet einen kooperativen Ansatz, bei dem Geberländer,
            internationale Organisationen und Entwicklungsländer
            zusammenarbeiten, um langfristige Entwicklungsziele zu erreichen. Im
            Gegensatz zur reinen Entwicklungshilfe betont
            Entwicklungszusammenarbeit eine partnerschaftliche Herangehensweise,
            bei der sowohl Geber als auch Empfänger zusammenarbeiten, um
            langfristige nachhaltige Veränderungen in den Entwicklungsländern zu
            bewirken. Dabei stehen die Stärkung lokaler Kapazitäten,
            institutioneller Reformen, Wissensaustausch und der Aufbau
            nachhaltiger Infrastruktur im Vordergrund.
          </li>
        </ul>

        <p className="py-2">
          Der Hauptunterschied liegt also in der Ausrichtung und dem Ansatz:
          Entwicklungshilfe neigt dazu, kurzfristige Bedürfnisse zu erfüllen,
          während Entwicklungszusammenarbeit langfristige Strukturen und
          nachhaltige Veränderungen anstrebt.
        </p>
        <p className="py-2">
          Wir achten beispielsweise darauf, dass die von uns produzierten
          Schuluniformen in lokalen Nähereien verarbeitet werden und die
          Materialien lokal gekauft werden. Die Brunnenbauarbeiten werden
          ebenfalls von lokalen Baufirmen geplant und durchgeführt, sodass immer
          auch die ghanaische Wirtschaft und der ghanaische Arbeitsmarkt direkt
          von unseren Projekten profitieren. Alle Projekte im Gesundheitssystem
          werden gemeinsam mit lokalen Kommunen und Krankenhäusern geplant und
          durchgeführt, um langfristige Kooperationen zu etablieren, statt nur
          im Gießkannenprinzip Hilfe „von oben“ bereitzustellen. Zudem ist es
          uns wichtig, dass die Bedarfe für neue Projekte aus Ghana heraus
          definiert werden, von Menschen, die vor Ort leben und die
          Gegebenheiten kennen.{" "}
        </p>
      </div>
    </div>
  );
}
