import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utilitário para combinar classes condicionalmente
 * Usado pelo componente GlowingEffect
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Retorna o caminho correto para imagens, adicionando o basePath quando em produção
 * Essencial para o funcionamento correto no GitHub Pages
 */
export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/landing-portifolio' : '';
  
  // Garante que o caminho sempre comece com "/" 
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}
