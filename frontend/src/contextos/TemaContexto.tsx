'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

type Tema = 'claro' | 'escuro';

interface TemaContextoProps {
  tema: Tema;
  alternarTema: () => void;
}

const TemaContexto = createContext<TemaContextoProps | undefined>(undefined);

interface TemaProvedorProps {
  children: ReactNode;
}

/**
 * Provedor de tema para a aplicação
 * Suporta alteração de tema claro/escuro
 * Integra com next-themes para suporte ao IconCloud
 */
export const TemaProvedor = ({ children }: TemaProvedorProps) => {
  const [tema, setTema] = useState<Tema>('escuro');

  useEffect(() => {
    // Inicializa o tema com base nas preferências do usuário
    const temaArmazenado = localStorage.getItem('tema') as Tema;
    if (temaArmazenado) {
      setTema(temaArmazenado);
    } else {
      const prefereDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTema(prefereDarkMode ? 'escuro' : 'claro');
    }
  }, []);

  useEffect(() => {
    // Aplica a classe ao HTML sempre que o tema muda
    if (tema === 'escuro') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('tema', tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TemaContexto.Provider value={{ tema, alternarTema }}>
        {children}
      </TemaContexto.Provider>
    </ThemeProvider>
  );
};

export const useTema = () => {
  const contexto = useContext(TemaContexto);
  if (!contexto) {
    throw new Error('useTema deve ser usado dentro de um TemaProvedor');
  }
  return contexto;
}; 