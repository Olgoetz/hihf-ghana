import React from "react";

import { Card, CardTitle, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { DownloadCloud } from "lucide-react";
import { getNewsletters } from "@/lib/graphql";

import { Separator } from "@/components/ui/separator";

import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/de";

dayjs.locale("de");

export default async function Projects() {
  const { newsletters } = (await getNewsletters()) as any;
  const formatDate = (date: string) => {
    return dayjs(date).format("MMMM YYYY");
  };
  return (
    <div className="pt-8 flex flex-col gap-y-14">
      <h2 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        Archiv
      </h2>
      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
        {newsletters.map((n: any) => (
          <Card key={n.id}>
            <Link href={n.pdf.url}>
              <CardHeader className="hover:bg-hih-primary/80 hover:text-white rounded-md">
                <CardTitle className="text-lg font-semibold ">
                  <div className="flex items-center justfiy-between">
                    <DownloadCloud className="h-8 w-8 mr-5" />
                    {formatDate(n.date)}: Newsletter
                  </div>
                </CardTitle>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
