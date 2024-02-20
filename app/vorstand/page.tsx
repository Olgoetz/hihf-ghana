import React from "react";

import Image from "next/image";
import {
  Card,
  CardTitle,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getBoardMembers, getProjects } from "@/lib/graphql";

import { Separator } from "@/components/ui/separator";
export default async function Projects() {
  const { boardMembers } = (await getBoardMembers()) as any;

  return (
    <div className="pt-8 flex flex-col gap-y-14">
      <h2 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        Vorstand
      </h2>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
        {boardMembers.map((p: any) => (
          <Card
            key={p.id}
            className="p-2 md:p-8 space-y-4 flex flex-col items-center "
          >
            <div className="relative h-[250px]  w-full">
              <Image
                src={p.image.url}
                fill
                className="object-contain object-center"
                alt="HIHF Ghana e.V. Vorstand"
              />
            </div>
            <CardTitle className="flex text-lg md:text-xl items-center text-center justify-center  font-extrabold ">
              {p.name}
            </CardTitle>
            <CardHeader className="text-center">{p.title}</CardHeader>
            <Separator className="w-20 bg-hih-primary h-1" />
            <CardContent className="text-center">{p.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
