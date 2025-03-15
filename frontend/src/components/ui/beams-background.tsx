"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

interface BeamsBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  density?: number;
  speed?: number;
  opacityRange?: [number, number];
  colorFrom?: string;
  colorTo?: string;
}

export function BeamsBackground({
  children,
  className,
  density = 10,
  speed = 1,
  opacityRange = [0.1, 0.6],
  colorFrom = "blue-600",
  colorTo = "indigo-800",
}: BeamsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [beams, setBeams] = useState<
    {
      id: number;
      x: number;
      y: number;
      width: number;
      height: number;
      opacity: number;
      rotation: number;
      velocityX: number;
      velocityY: number;
      velocityRotation: number;
    }[]
  >([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Criar feixes iniciais
    const createBeams = () => {
      const newBeams = Array.from({ length: density }, (_, i) => ({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        width: 50 + Math.random() * 200,
        height: 50 + Math.random() * 200,
        opacity: opacityRange[0] + Math.random() * (opacityRange[1] - opacityRange[0]),
        rotation: Math.random() * 360,
        velocityX: (Math.random() - 0.5) * speed,
        velocityY: (Math.random() - 0.5) * speed,
        velocityRotation: (Math.random() - 0.5) * speed * 0.5,
      }));
      setBeams(newBeams);
    };

    createBeams();

    // Animar os feixes
    const animate = () => {
      setBeams((prevBeams) =>
        prevBeams.map((beam) => {
          let x = beam.x + beam.velocityX;
          let y = beam.y + beam.velocityY;
          const rotation = beam.rotation + beam.velocityRotation;

          // Reflexão nas bordas
          if (x < -beam.width / 2) {
            x = -beam.width / 2;
            beam.velocityX *= -1;
          } else if (x > dimensions.width + beam.width / 2) {
            x = dimensions.width + beam.width / 2;
            beam.velocityX *= -1;
          }

          if (y < -beam.height / 2) {
            y = -beam.height / 2;
            beam.velocityY *= -1;
          } else if (y > dimensions.height + beam.height / 2) {
            y = dimensions.height + beam.height / 2;
            beam.velocityY *= -1;
          }

          return {
            ...beam,
            x,
            y,
            rotation,
            opacity: 
              beam.opacity + (Math.random() * 0.02 - 0.01),
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, density, opacityRange, speed]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full", className)}
    >
      {/* Fundo escuro base */}
      <div className="absolute inset-0 bg-[#060606] z-0"></div>

      {/* Feixes */}
      {beams.map((beam) => (
        <div
          key={beam.id}
          className={cn(
            "absolute rounded-full z-0",
            `bg-gradient-to-r from-${colorFrom} to-${colorTo}`,
            "blur-[40px]"
          )}
          style={{
            left: beam.x,
            top: beam.y,
            width: beam.width,
            height: beam.height,
            opacity: Math.max(opacityRange[0], Math.min(opacityRange[1], beam.opacity)),
            transform: `rotate(${beam.rotation}deg)`,
          }}
        />
      ))}

      {/* Camada de overlay para ajustar contraste */}
      <div className="absolute inset-0 bg-[#060606] opacity-50 z-10"></div>

      {/* Conteúdo */}
      <div className="relative z-20">{children}</div>
    </div>
  );
} 