'use client';

import { motion } from 'framer-motion';
import { Habilidade } from '@/tipos';
import { ReactNode } from 'react';

// Mapeamento de ícones para categorias
const categoriaCores = {
  frontend: 'bg-blue-500',
  backend: 'bg-green-500',
  design: 'bg-purple-500',
  outros: 'bg-gray-500',
};

interface CartaoHabilidadeProps {
  habilidade: Habilidade;
  indice: number;
  iconeComponente?: ReactNode;
}

/**
 * Componente para exibir uma habilidade com animação e indicador de nível
 */
const CartaoHabilidade = ({ habilidade, indice, iconeComponente }: CartaoHabilidadeProps) => {
  // Animações para o cartão
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Renderizar os pontos de nível
  const renderNivel = () => {
    const pontos = [];
    for (let i = 1; i <= 5; i++) {
      pontos.push(
        <div
          key={i}
          className={`h-1.5 w-3 rounded-full ${
            i <= habilidade.nivel
              ? 'bg-primary-500 dark:bg-primary-400'
              : 'bg-gray-200 dark:bg-dark-600'
          }`}
        />
      );
    }
    return pontos;
  };

  return (
    <motion.div
      className="bg-white dark:bg-dark-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={indice}
    >
      <div className="flex items-center mb-3">
        {/* Ícone da habilidade */}
        <div className={`w-10 h-10 rounded-md flex items-center justify-center text-white ${categoriaCores[habilidade.categoria]}`}>
          {iconeComponente || habilidade.icone}
        </div>
        
        <div className="ml-3">
          {/* Nome da habilidade */}
          <h3 className="font-medium text-gray-900 dark:text-white">{habilidade.nome}</h3>
          
          {/* Categoria */}
          <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
            {habilidade.categoria}
          </p>
        </div>
      </div>
      
      {/* Indicador de nível */}
      <div className="flex space-x-1">
        {renderNivel()}
      </div>
    </motion.div>
  );
};

export default CartaoHabilidade; 