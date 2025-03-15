"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/utils/cn";

interface BackgroundPathsProps {
  children?: React.ReactNode;
  className?: string;
  pathCount?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  animationDuration?: number;
}

export function BackgroundPaths({
  children,
  className,
  pathCount = 20,
  pathColor = "#3b82f6",
  pathWidth = 1,
  pathOpacity = 0.3,
  animationDuration = 15000,
}: BackgroundPathsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<
    Array<{
      id: number;
      points: Array<{ x: number; y: number }>;
      progress: number;
      speed: number;
      pathLength: number;
    }>
  >([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Gerar caminhos aleatórios
    const generatePaths = () => {
      const newPaths = Array.from({ length: pathCount }, (_, id) => {
        const pointCount = 5 + Math.floor(Math.random() * 10);
        const points = Array.from({ length: pointCount }, () => ({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
        }));

        // Calcular comprimento aproximado do caminho
        let pathLength = 0;
        for (let i = 1; i < points.length; i++) {
          const dx = points[i].x - points[i - 1].x;
          const dy = points[i].y - points[i - 1].y;
          pathLength += Math.sqrt(dx * dx + dy * dy);
        }

        return {
          id,
          points,
          progress: Math.random(),
          speed: 0.5 + Math.random() * 1.5,
          pathLength,
        };
      });

      setPaths(newPaths);
    };

    generatePaths();
  }, [dimensions, pathCount]);

  useEffect(() => {
    if (paths.length === 0) return;

    const animate = () => {
      setPaths((prevPaths) =>
        prevPaths.map((path) => {
          let newProgress = path.progress + path.speed / (animationDuration / 16);
          if (newProgress > 1) newProgress = 0;

          return {
            ...path,
            progress: newProgress,
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [paths, animationDuration]);

  // Calcular posição atual no caminho
  const getPositionOnPath = (
    points: Array<{ x: number; y: number }>,
    progress: number
  ) => {
    if (points.length < 2) return points[0] || { x: 0, y: 0 };

    // Normalizar progresso para o caminho completo
    const totalSegments = points.length - 1;
    const segmentIndex = Math.min(
      Math.floor(progress * totalSegments),
      totalSegments - 1
    );
    const segmentProgress =
      (progress * totalSegments) % 1 || (segmentIndex === totalSegments - 1 ? 1 : 0);

    const p1 = points[segmentIndex];
    const p2 = points[segmentIndex + 1];

    return {
      x: p1.x + (p2.x - p1.x) * segmentProgress,
      y: p1.y + (p2.y - p1.y) * segmentProgress,
    };
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full", className)}
    >
      {/* Fundo escuro */}
      <div className="absolute inset-0 bg-[#060606] z-0"></div>

      {/* SVG para os caminhos */}
      <svg
        className="absolute inset-0 w-full h-full z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path) => {
          // Gerar string de pontos para o caminho SVG
          const pathPoints = path.points
            .map((point, i) => `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`)
            .join(" ");

          // Calcular posição da partícula no caminho
          const currentPos = getPositionOnPath(path.points, path.progress);

          return (
            <g key={path.id}>
              {/* Caminho base */}
              <path
                d={pathPoints}
                fill="none"
                stroke={pathColor}
                strokeWidth={pathWidth}
                strokeOpacity={pathOpacity}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Partícula movendo-se pelo caminho */}
              <circle
                cx={currentPos.x}
                cy={currentPos.y}
                r={2 + path.speed}
                fill={pathColor}
                fillOpacity={0.6 + path.speed * 0.2}
              />
            </g>
          );
        })}
      </svg>

      {/* Conteúdo */}
      <div className="relative z-20">{children}</div>
    </div>
  );
} 