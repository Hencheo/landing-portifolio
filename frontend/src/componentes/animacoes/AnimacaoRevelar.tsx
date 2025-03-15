'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useAnimation, TargetAndTransition } from 'framer-motion';

// Tipos de direções para a animação
type DirecaoAnimacao = 'cima' | 'baixo' | 'esquerda' | 'direita' | 'nenhuma';

interface AnimacaoRevelarProps {
  children: ReactNode;
  direcao?: DirecaoAnimacao;
  duracao?: number;
  atraso?: number;
  distancia?: number;
  triggerOnce?: boolean;
  className?: string;
  threshold?: number;
}

/**
 * Componente que revela seu conteúdo com animação quando entra na viewport
 * Útil para criar efeitos de scroll reveal
 */
const AnimacaoRevelar = ({
  children,
  direcao = 'baixo',
  duracao = 0.5,
  atraso = 0,
  distancia = 50,
  triggerOnce = true,
  className = '',
  threshold = 0.1,
}: AnimacaoRevelarProps) => {
  // Referência para o elemento
  const ref = useRef<HTMLDivElement>(null);
  
  // Controles de animação do Framer Motion
  const controls = useAnimation();
  
  // Estado para controlar se o elemento está visível
  const [estaVisivel, setEstaVisivel] = useState(false);

  // Mapear direções para valores de transformação
  const getTransformInicial = (): TargetAndTransition => {
    switch (direcao) {
      case 'cima':
        return { opacity: 0, y: distancia };
      case 'baixo':
        return { opacity: 0, y: -distancia };
      case 'esquerda':
        return { opacity: 0, x: distancia };
      case 'direita':
        return { opacity: 0, x: -distancia };
      case 'nenhuma':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distancia };
    }
  };

  // Configurar o Intersection Observer para detectar quando o elemento está visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !estaVisivel) {
          setEstaVisivel(true);
          controls.start({ opacity: 1, x: 0, y: 0 });
          
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!entry.isIntersecting && !triggerOnce && estaVisivel) {
          setEstaVisivel(false);
          controls.start(getTransformInicial());
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, estaVisivel, triggerOnce, threshold, distancia, direcao]);

  return (
    <motion.div
      ref={ref}
      initial={getTransformInicial()}
      animate={controls}
      transition={{
        duration: duracao,
        delay: atraso,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimacaoRevelar; 