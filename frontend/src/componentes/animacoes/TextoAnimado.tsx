'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextoAnimadoProps {
  textos: string[];
  intervalo?: number;
  className?: string;
  velocidadeDigitacao?: number;
  pausaAposDigitacao?: number;
  loop?: boolean;
}

/**
 * Componente que exibe textos com efeito de digitação animada
 * Alterna entre diferentes textos com efeito de digitação
 */
const TextoAnimado = ({
  textos,
  intervalo = 3000,
  className = '',
  velocidadeDigitacao = 50,
  pausaAposDigitacao = 1000,
  loop = true,
}: TextoAnimadoProps) => {
  // Estado para controlar o texto atual
  const [indiceTextoAtual, setIndiceTextoAtual] = useState(0);
  
  // Estado para controlar o texto sendo exibido com efeito de digitação
  const [textoExibido, setTextoExibido] = useState('');
  
  // Estado para controlar se está digitando ou apagando
  const [estaDigitando, setEstaDigitando] = useState(true);

  // Efeito para alternar entre os textos
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (estaDigitando) {
      // Efeito de digitação
      if (textoExibido.length < textos[indiceTextoAtual].length) {
        timer = setTimeout(() => {
          setTextoExibido(textos[indiceTextoAtual].substring(0, textoExibido.length + 1));
        }, velocidadeDigitacao);
      } else {
        // Pausa após completar a digitação
        timer = setTimeout(() => {
          setEstaDigitando(false);
        }, pausaAposDigitacao);
      }
    } else {
      // Efeito de apagar
      if (textoExibido.length > 0) {
        timer = setTimeout(() => {
          setTextoExibido(textoExibido.substring(0, textoExibido.length - 1));
        }, velocidadeDigitacao / 2);
      } else {
        // Mudar para o próximo texto
        const proximoIndice = loop
          ? (indiceTextoAtual + 1) % textos.length
          : indiceTextoAtual < textos.length - 1
          ? indiceTextoAtual + 1
          : indiceTextoAtual;
        
        setIndiceTextoAtual(proximoIndice);
        setEstaDigitando(true);
      }
    }

    return () => clearTimeout(timer);
  }, [textoExibido, indiceTextoAtual, estaDigitando, textos, velocidadeDigitacao, pausaAposDigitacao, loop]);

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={textoExibido}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {textoExibido}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-0.5 h-5 ml-0.5 bg-primary-500 dark:bg-primary-400"
          />
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default TextoAnimado; 