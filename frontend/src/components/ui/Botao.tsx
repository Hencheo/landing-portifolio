'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Tipos de variantes do botão
type VarianteBotao = 'primario' | 'secundario' | 'contorno' | 'fantasma';
type TamanhoBotao = 'pequeno' | 'medio' | 'grande';

// Props do componente
interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variante?: VarianteBotao;
  tamanho?: TamanhoBotao;
  icone?: ReactNode;
  iconePosicao?: 'esquerda' | 'direita';
  fullWidth?: boolean;
  animado?: boolean;
}

/**
 * Componente de botão reutilizável com diferentes variantes e tamanhos
 */
const Botao = ({
  children,
  variante = 'primario',
  tamanho = 'medio',
  icone,
  iconePosicao = 'esquerda',
  fullWidth = false,
  animado = true,
  className = '',
  ...props
}: BotaoProps) => {
  // Classes base do botão
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none';
  
  // Classes específicas para cada variante
  const varianteClasses = {
    primario: 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600',
    secundario: 'bg-secondary-600 text-white hover:bg-secondary-700 dark:bg-secondary-700 dark:hover:bg-secondary-600',
    contorno: 'border border-primary-600 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-dark-800',
    fantasma: 'text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-dark-800',
  };
  
  // Classes específicas para cada tamanho
  const tamanhoClasses = {
    pequeno: 'text-xs px-3 py-1.5',
    medio: 'text-sm px-4 py-2',
    grande: 'text-base px-6 py-3',
  };
  
  // Classes para largura total
  const larguraClasses = fullWidth ? 'w-full' : '';
  
  // Combinação de todas as classes
  const combinedClasses = `${baseClasses} ${varianteClasses[variante]} ${tamanhoClasses[tamanho]} ${larguraClasses} ${className}`;
  
  // Renderização do botão com ou sem animação
  if (animado) {
    // Extraindo props que podem causar conflitos de tipo
    const { onDrag, onDragEnd, onDragStart, ...buttonProps } = props;
    
    return (
      <motion.button
        className={combinedClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...buttonProps as HTMLMotionProps<"button">}
      >
        {icone && iconePosicao === 'esquerda' && <span className="mr-2">{icone}</span>}
        {children}
        {icone && iconePosicao === 'direita' && <span className="ml-2">{icone}</span>}
      </motion.button>
    );
  }
  
  return (
    <button className={combinedClasses} {...props}>
      {icone && iconePosicao === 'esquerda' && <span className="mr-2">{icone}</span>}
      {children}
      {icone && iconePosicao === 'direita' && <span className="ml-2">{icone}</span>}
    </button>
  );
};

export default Botao; 