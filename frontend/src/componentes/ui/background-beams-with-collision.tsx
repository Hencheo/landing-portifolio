"use client";

import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

interface BackgroundBeamsWithCollisionProps {
  children?: React.ReactNode;
  className?: string;
}

export function BackgroundBeamsWithCollision({
  children,
  className,
}: BackgroundBeamsWithCollisionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [beams, setBeams] = useState<Array<{ x: number; y: number; opacity: number; scale: number; rotation: number }>>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    // Inicializa os feixes com posições aleatórias
    const initBeams = () => {
      const newBeams = Array.from({ length: 8 }, () => ({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        opacity: 0.1 + Math.random() * 0.4,
        scale: 0.5 + Math.random() * 0.5,
        rotation: Math.random() * 360,
      }));
      setBeams(newBeams);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    if (dimensions.width > 0 && dimensions.height > 0) {
      initBeams();
    }

    return () => {
      window.removeEventListener('resize', updateDimensions);
      cancelAnimationFrame(frameRef.current);
    };
  }, [dimensions.width, dimensions.height]);

  useEffect(() => {
    if (!containerRef.current || beams.length === 0) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = containerRef.current!.getBoundingClientRect();
      mousePositionRef.current = { 
        x: e.clientX - left, 
        y: e.clientY - top 
      };
    };

    const animate = () => {
      setBeams(prevBeams => 
        prevBeams.map(beam => {
          // Cálculo de influência do mouse
          const dx = mousePositionRef.current.x - beam.x;
          const dy = mousePositionRef.current.y - beam.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 400;
          const influence = Math.max(0, 1 - distance / maxDistance);
          
          // Movimento suave em direção ao ponteiro do mouse
          const newX = beam.x + dx * influence * 0.01;
          const newY = beam.y + dy * influence * 0.01;
          
          // Movimento aleatório adicional para naturalidade
          const randomX = (Math.random() - 0.5) * 0.5;
          const randomY = (Math.random() - 0.5) * 0.5;
          
          // Rotação com base na direção do movimento
          const rotation = beam.rotation + (influence > 0.1 ? 
            Math.atan2(dy, dx) * (180 / Math.PI) * 0.01 : 
            (Math.random() - 0.5) * 0.5);
          
          return {
            x: Math.max(0, Math.min(dimensions.width, newX + randomX)),
            y: Math.max(0, Math.min(dimensions.height, newY + randomY)),
            opacity: 0.1 + Math.min(0.6, influence * 0.8 + Math.random() * 0.3),
            scale: 0.5 + Math.min(1, influence * 0.5 + Math.random() * 0.2),
            rotation,
          };
        })
      );
      
      frameRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [beams.length, dimensions.height, dimensions.width]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden w-full", className)}>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[#060606] opacity-80 z-0"></div>
      
      {/* Beams */}
      {beams.map((beam, index) => (
        <div 
          key={index}
          className="absolute bg-gradient-to-r from-blue-600 to-indigo-600 blur-3xl rounded-full z-0"
          style={{
            left: `${beam.x}px`,
            top: `${beam.y}px`,
            width: `${200 * beam.scale}px`,
            height: `${200 * beam.scale}px`,
            opacity: beam.opacity,
            transform: `translate(-50%, -50%) rotate(${beam.rotation}deg)`,
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#060606] opacity-30 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
} 