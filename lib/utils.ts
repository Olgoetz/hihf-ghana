import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function logger(level: string, message: string, data?: any) {
  const timestamp = new Date().toISOString();
  console.log(
    `[${level.toLocaleUpperCase()}] - ${timestamp} - ${message}`,
    data
  );
}
