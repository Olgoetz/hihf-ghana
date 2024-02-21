import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Help is Here for Ghana e.V.",
    short_name: "HIHF Ghana e.V.",
    description:
      "Die 'Help is Here Foundation' wurde von Canni Tee-Lard offiziell in Accra, Ghana, als gemeinnützige Organisation gegründet, mit der Vision, allen Kindern in Ghana einen fairen und uneingeschränkten Zugang zum Bildungs- und Gesundheitswesen zu ermöglichen.",

    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
