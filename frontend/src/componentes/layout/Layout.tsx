'use client';

import { ReactNode } from 'react';
import { TemaProvedor } from '@/contextos/TemaContexto';
import Dock from './Dock';
import Rodape from './Rodape';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Componente de layout principal que envolve toda a aplicação
 * Inclui o provedor de tema, dock de navegação e rodapé
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <TemaProvedor>
      <div className="min-h-screen flex flex-col bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Dock />
        <main className="flex-grow">
          {children}
        </main>
        <Rodape />
      </div>
    </TemaProvedor>
  );
};

export default Layout; 