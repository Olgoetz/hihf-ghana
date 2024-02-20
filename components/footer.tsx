import { CopyrightIcon, Facebook, File, Instagram, Link2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CMSLink from "./cms-link";
import { getCurrentYear } from "@/lib/helpers";
import { getFiles } from "@/lib/graphql";
import Image from "next/image";
export default async function Footer() {
  const { documents } = (await getFiles()) as any;

  const memberShipApllication = documents.filter(
    (file: any) => file.label === "membership_application"
  )[0];

  const statute = documents.filter((file: any) => file.label === "statute")[0];
  return (
    <div className="mt-16">
      <div className="grid md:grid-cols-3 px-8 py-14 gap-4 items-start bg-black text-white">
        <div className="grid gap-4 justify-center leading-3">
          <h4 className="font-bold uppercase py-4 text-center">Adresse</h4>
          <p>Help is Here for Ghana e.V.</p>
          <p>Parkstraße 22</p>
          <p>51427 Bergisch Gladbach </p>
          <a href="mailto:info@hihf-ghana.org">info@hihf-ghana.org</a>
        </div>

        <div className="grid gap-2 leading-3 text-center justify-center">
          <h4 className="font-bold uppercase py-4">Social Media</h4>

          <div className="grid grid-cols-2 gap-4">
            <Link
              href="https://www.facebook.com/helpisherefoundation"
              target="_blank"
            >
              <div className="mx-auto border rounded-md p-4">
                <Facebook className="h-8 w-8" />
              </div>
            </Link>

            <Link href="https://www.instagram.com/hihf.ghana/" target="_blank">
              <div className="mx-auto border rounded-md p-4">
                <Instagram className="h-8 w-8" />
              </div>
            </Link>
          </div>
          <h4 className="font-bold uppercase py-4 md:mt-8">Partner</h4>
          <Image
            src="/ghana_forum.png"
            alt="Ghana Forum NRW"
            width={150}
            height={150}
          />
        </div>

        <div className="grid gap-4 justify-center leading-3">
          <h4 className="font-bold uppercase py-4 text-center">Sonstiges</h4>
          <ul className="flex flex-col gap-4">
            <CMSLink href={statute.file.url} linkText="Satzung" icon={File} />
            <CMSLink
              href={memberShipApllication.file.url}
              linkText="Mitgliedsantrag"
              icon={File}
            />
            <CMSLink href="/impressum" linkText="Impressum" icon={Link2} />
          </ul>
        </div>
      </div>
      <div className="flex items-center bg-hih-primary justify-center flex-1 py-10 text-white">
        <CopyrightIcon className="h-5 w-5 mr-3" />
        <p>{getCurrentYear()} Help is Here for Ghana e.V.</p>
      </div>
    </div>
  );
}
