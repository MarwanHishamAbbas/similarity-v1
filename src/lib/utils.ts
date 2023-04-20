import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cva => handle variants of the components
// clsx => join all classes together without optimizing
// twMerge => handle the optimization of class

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
