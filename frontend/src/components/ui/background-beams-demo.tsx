"use client";

import { BackgroundBeamsWithCollision } from "@/componentes/ui/background-beams-with-collision";

interface BackgroundBeamsDemoProps {
  children?: React.ReactNode;
  className?: string;
}

export function BackgroundBeamsDemo({
  children,
  className,
}: BackgroundBeamsDemoProps) {
  return (
    <div className={className}>
      <BackgroundBeamsWithCollision>
        <div className="relative z-10 flex min-h-[400px] w-full flex-col items-center justify-center px-4 py-20">
          {children ? (
            children
          ) : (
            <>
              <h1 className="text-4xl font-bold text-center text-white mb-4">
                Fundo com Efeito de Feixes Interativos
              </h1>
              <p className="text-center text-gray-300 max-w-lg">
                Este componente cria um fundo dinâmico com feixes de luz que
                reagem ao movimento do mouse, perfeito para seções de destaque
                em páginas modernas.
              </p>
            </>
          )}
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
} 