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
      <h2 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        Gallerie
      </h2>
      <Separator />
      <p>Kommt noch...</p>
    </div>
  );
}
