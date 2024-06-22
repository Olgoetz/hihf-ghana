import React from "react";

import Image from "next/image";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { getProjects } from "@/lib/graphql";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Separator } from "@/components/ui/separator";
export default async function Projects() {
  const { projects } = (await getProjects()) as any;

  return (
    <div className="pt-8 flex flex-col gap-y-14">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        Projekte
      </h1>
      <Separator />
      <div className="grid grid-cols-1  gap-4">
        {projects.map((p: any) => (
          <div
            key={p.id}
            id={p.slug}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <Card className="p-2 md:p-8 space-y-4 flex flex-col bg-slate-50 opacity-70 items-center justify-center">
              <CardTitle className="flex text-lg md:text-xl items-center text-center justify-center  font-extrabold ">
                {p.name}
              </CardTitle>
              <CardContent>
                <RichText content={p.description.raw} />
              </CardContent>
            </Card>
            <Card>
              <div className="relative h-[300px] md:h-full w-full">
                <Image
                  src={p.image.url}
                  fill
                  className="object-cover object-center rounded-lg "
                  alt="HIHF Ghana Schooluniforms"
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
