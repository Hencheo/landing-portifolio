'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { GlowingEffect } from './GlowingEffect';

interface CardBrilhanteProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'blue';
  disabled?: boolean;
}

/**
 * Componente de card com efeito brilhante nas bordas
 * Usa o GlowingEffect do 21st.dev/aceternity
 */
const CardBrilhante = ({
  children,
  className = '',
  variant = 'blue',
  disabled = false,
}: CardBrilhanteProps) => {
  return (
    <motion.div
      className={`relative bg-[#0c0c0c] p-4 rounded-lg ${className}`}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 } 
      }}
    >
      {!disabled && <GlowingEffect variant={variant} borderWidth={1.5} spread={30} disabled={false} />}
      {children}
    </motion.div>
  );
};

export default CardBrilhante; 