import React from "react";

import { getGalleryImages, getProjects } from "@/lib/graphql";
import { Gallery } from "next-gallery";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
export default async function Projects() {
  const { galleries } = (await getGalleryImages()) as any;

  const images = Array.from(galleries[0].images, (img: any) => ({
    id: img.id,
    src: img.url,
  }));

  return (
    <div className="pt-8 flex flex-col gap-y-14">
      <h2 className="text-4xl md:text-6xl font-extrabold text-center text-hih-primary">
        Galerie
      </h2>
      <Separator />
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 justify-center z-10">
        {images &&
          images.map((img: any) => (
            <div key={img.id} className="relative  h-[400px] w-full">
              <Image
                src={img.src}
                alt="Help is Here Foundation e.V. Gallery"
                fill
                className="object-cover object-center "
              />
            </div>
          ))}
      </div>
    </div>
  );
}
