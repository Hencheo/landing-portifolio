"use client";

/**
 * Utilitário para manipulação de URLs no frontend
 * Ajusta URLs para o basePath correto em produção e desenvolvimento
 */

/**
 * Ajusta uma URL relativa para incluir o basePath quando necessário
 * @param url URL relativa (ex: '/imagens/logo.png')
 * @returns URL com o basePath incluído quando necessário
 */
export function getBaseUrl(url: string): string {
  // No cliente, verificamos a URL atual
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    const basePath = pathname.startsWith('/landing-portifolio') 
      ? '/landing-portifolio' 
      : '';
    
    // Garantir que não duplicamos barras
    const cleanUrl = url.startsWith('/') ? url : `/${url}`;
    return `${basePath}${cleanUrl}`;
  }
  
  // Em SSR, usamos o NODE_ENV
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/landing-portifolio' : '';
  
  // Garantir que não duplicamos barras
  const cleanUrl = url.startsWith('/') ? url : `/${url}`;
  return `${basePath}${cleanUrl}`;
} 