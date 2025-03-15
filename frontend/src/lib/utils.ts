import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utilitário para combinar classes condicionalmente
 * Usado pelo componente GlowingEffect
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/landing-page-portifolio' : '';
  return `${basePath}${path}`;
}
