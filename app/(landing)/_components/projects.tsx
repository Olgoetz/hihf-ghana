import React from "react";

import Image from "next/image";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getProjects } from "@/lib/graphql";

export default async function Projects() {
  const { projects } = (await getProjects()) as any;

  return (
    <div className=" flex flex-col gap-y-14">
      <h2 className="text-3xl md:text-6xl font-extrabold text-center text-hih-primary">
        Projekte
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p: any) => (
          <Card
            key={p.id}
            className="p-8 space-y-4 flex  flex-col bg-slate-50 opacity-70 relative h-[400px] items-center justify-center"
          >
            <Image
              src={p.image.url}
              fill
              className="object-cover object-center rounded-lg -z-10 "
              alt="HIHF Ghana Schooluniforms"
            />

            <div className="border bg-slate-400/60 p-8 space-y-4 w-full h-[200px]">
              <CardTitle className="break-words text-base md:text-xl flex items-center text-center justify-center text-white font-extrabold ">
                {p.name}
              </CardTitle>
              <CardFooter>
                <Link
                  href="/projekte"
                  className="flex rounded-full justify-center py-2 items-center bg-hih-primary hover:bg-slate-400/90rounded-lg text-white mx-auto w-32"
                >
                  <ChevronRight className="mr-3" />
                  <p>Details</p>
                </Link>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
