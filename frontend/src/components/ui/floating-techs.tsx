'use client';

import { useRef, useEffect, useState } from 'react';
import { useMousePositionRef } from '@/hooks/use-mouse-position-ref';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

interface TechIcon {
  src: string;
  width: number;
  alt: string;
  fixedPosition: { x: number; y: number }; // Posição fixa na tela em porcentagem
  parallaxFactor: number; // Fator que determina a intensidade do movimento paralaxe
  rotation: number;
  floatSpeed: number; // Velocidade da animação de flutuação
  floatOffset: number; // Deslocamento máximo da flutuação
  floatDelay: number; // Defasagem na animação de flutuação
  scale: number;
  zIndex: number;
}

interface FloatingTechsProps {
  className?: string;
}

export function FloatingTechs({ className }: FloatingTechsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePositionRef();
  const animationFrameRef = useRef<number | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [mousePercent, setMousePercent] = useState({ x: 0.5, y: 0.5 });
  const [time, setTime] = useState(0);
  
  // Lista de tecnologias com posições fixas - as imagens devem estar em /public/imagens/tecnologias/
  const techIcons: TechIcon[] = [
    {
      src: '/imagens/tecnologias/python.png',
      width: 70,
      alt: 'Python',
      fixedPosition: { x: 20, y: 25 },
      parallaxFactor: 40,
      rotation: 0,
      floatSpeed: 0.5,
      floatOffset: 10,
      floatDelay: 0,
      scale: 1,
      zIndex: 2,
    },
    {
      src: '/imagens/tecnologias/javascript.png',
      width: 60,
      alt: 'JavaScript',
      fixedPosition: { x: 80, y: 30 },
      parallaxFactor: 35,
      rotation: 5,
      floatSpeed: 0.6,
      floatOffset: 8,
      floatDelay: 1.5,
      scale: 0.9,
      zIndex: 3,
    },
    {
      src: '/imagens/tecnologias/react.png',
      width: 80,
      alt: 'React',
      fixedPosition: { x: 35, y: 75 },
      parallaxFactor: 50,
      rotation: -5,
      floatSpeed: 0.7,
      floatOffset: 6,
      floatDelay: 0.8,
      scale: 1.1,
      zIndex: 1,
    },
    {
      src: '/imagens/tecnologias/node.png',
      width: 70,
      alt: 'Node.js',
      fixedPosition: { x: 75, y: 65 },
      parallaxFactor: 30,
      rotation: 8,
      floatSpeed: 0.55,
      floatOffset: 9,
      floatDelay: 2.1,
      scale: 0.95,
      zIndex: 2,
    },
    {
      src: '/imagens/tecnologias/django.png',
      width: 90,
      alt: 'Django',
      fixedPosition: { x: 15, y: 60 },
      parallaxFactor: 45,
      rotation: -8,
      floatSpeed: 0.45,
      floatOffset: 7,
      floatDelay: 1.2,
      scale: 1,
      zIndex: 3,
    },
    {
      src: '/imagens/tecnologias/sql.png',
      width: 65,
      alt: 'SQL',
      fixedPosition: { x: 60, y: 15 },
      parallaxFactor: 38,
      rotation: 5,
      floatSpeed: 0.65,
      floatOffset: 8,
      floatDelay: 0.5,
      scale: 0.85,
      zIndex: 2,
    },
  ];
  
  // Atualiza tamanho do container
  useEffect(() => {
    const updateContainerSize = () => {
      setContainerSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    
    return () => {
      window.removeEventListener('resize', updateContainerSize);
    };
  }, []);

  // Animação e monitoramento da posição do mouse
  useEffect(() => {
    const animate = () => {
      // Incrementa o tempo para a animação de flutuação
      setTime(prevTime => prevTime + 0.01);
      
      // Atualiza a posição do mouse como percentual da tela
      const x = mousePosition.current.x / window.innerWidth;
      const y = mousePosition.current.y / window.innerHeight;
      
      // Suaviza o movimento do mouse
      setMousePercent(prev => ({
        x: prev.x + (x - prev.x) * 0.05,
        y: prev.y + (y - prev.y) * 0.05
      }));
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition]);
  
  // Calcula o deslocamento para cada ícone
  const getOffset = (icon: TechIcon) => {
    // Animação de flutuação suave usando seno e cosseno
    const floatY = Math.sin((time + icon.floatDelay) * icon.floatSpeed) * icon.floatOffset;
    const floatX = Math.cos((time + icon.floatDelay + 1) * icon.floatSpeed * 0.7) * (icon.floatOffset * 0.5);
    
    // Efeito de paralaxe baseado na posição do mouse
    // Centraliza em 0.5 para que o centro da tela seja o ponto neutro
    const mouseXOffset = (mousePercent.x - 0.5) * icon.parallaxFactor;
    const mouseYOffset = (mousePercent.y - 0.5) * icon.parallaxFactor;
    
    return {
      x: floatX + mouseXOffset,
      y: floatY + mouseYOffset
    };
  };
  
  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ''}`}
    >
      {techIcons.map((icon, index) => {
        const offset = getOffset(icon);
        
        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${icon.fixedPosition.x}%`,
              top: `${icon.fixedPosition.y}%`,
              transform: `translate(-50%, -50%) 
                          translate(${offset.x}px, ${offset.y}px) 
                          rotate(${icon.rotation}deg) 
                          scale(${icon.scale})`,
              willChange: 'transform',
              transition: 'transform 0.2s ease-out',
              zIndex: icon.zIndex,
            }}
          >
            <div style={{ width: icon.width, height: icon.width, position: 'relative' }}>
              <Image
                src={getImagePath(icon.src)}
                alt={icon.alt}
                fill
                sizes={`${icon.width}px`}
                className="object-contain opacity-75 transition-opacity"
                style={{ filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.5))' }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
} 