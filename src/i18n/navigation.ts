import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Only export the supported helpers from next-intl
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
