"use client";

import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getInformacoesPessoais } from '@/dados/pessoal';

// Contexto para o basePath
interface BasePathContextProps {
  basePath: string;
  informacoesPessoaisAtualizadas: ReturnType<typeof getInformacoesPessoais>;
}

const BasePathContext = createContext<BasePathContextProps>({
  basePath: '',
  informacoesPessoaisAtualizadas: getInformacoesPessoais(),
});

// Hook para usar o contexto
export const useBasePath = () => useContext(BasePathContext);

// Provedor do contexto
interface BasePathProviderProps {
  children: ReactNode;
}

export const BasePathProvider = ({ children }: BasePathProviderProps) => {
  const pathname = usePathname();
  const [basePath, setBasePath] = useState('');
  const [informacoesPessoaisAtualizadas, setInformacoesPessoaisAtualizadas] = useState(getInformacoesPessoais());

  useEffect(() => {
    // Detectar o basePath com base no pathname atual
    const detectedBasePath = pathname.startsWith('/landing-portifolio') ? '/landing-portifolio' : '';
    setBasePath(detectedBasePath);
    
    // Atualizar as informações pessoais com o basePath correto
    setInformacoesPessoaisAtualizadas(getInformacoesPessoais(detectedBasePath));
  }, [pathname]);

  return (
    <BasePathContext.Provider value={{ basePath, informacoesPessoaisAtualizadas }}>
      {children}
    </BasePathContext.Provider>
  );
}; 