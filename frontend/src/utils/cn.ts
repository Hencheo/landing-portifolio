import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitário para combinar classes condicionalmente com tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 