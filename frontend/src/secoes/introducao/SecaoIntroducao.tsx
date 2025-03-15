'use client';

import { motion, LayoutGroup } from 'framer-motion';
import Image from 'next/image';
import { Squares } from '@/componentes/ui/squares-background';
import { TextRotate } from '@/componentes/ui/text-rotate';
import { FloatingTechs } from '@/componentes/ui/floating-techs';
import { informacoesPessoais } from '@/dados';
import BotaoEstrela from '@/componentes/ui/BotaoEstrela';
import { getImagePath } from '@/lib/utils';

/**
 * Seção de introdução visual com fundo animado
 * Esta será a primeira seção visível do portfólio
 */
const SecaoIntroducao = () => {
  // Funções para navegação entre seções
  const scrollParaPerfil = () => {
    const inicioSecao = document.getElementById('inicio');
    if (inicioSecao) {
      inicioSecao.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollParaProjetos = () => {
    const projetosSecao = document.getElementById('projetos');
    if (projetosSecao) {
      projetosSecao.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="introducao" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fundo animado de quadrados */}
      <div className="absolute inset-0 bg-[#060606]">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      
      {/* Logo no topo da seção */}
      <motion.div 
        className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 logo-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        <Image 
          src={getImagePath("/imagens/perfil/logo.png")} 
          alt="Logo" 
          width={140} 
          height={140} 
          className="object-contain"
          priority
        />
      </motion.div>
      
      {/* Tecnologias flutuantes que seguem o mouse - desativadas */}
      {/* <FloatingTechs className="z-[5]" /> */}
      
      {/* Conteúdo central */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex font-bold whitespace-pre leading-tight tracking-tight space-y-1 md:space-y-4 text-white"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
          >
            <LayoutGroup>
              <motion.span layout className="flex whitespace-pre">
                <motion.span
                  layout
                  className="flex whitespace-pre"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                </motion.span>
                <TextRotate
                  texts={[
                    "Você imagina,",
                    "Eu crio.",
                    "Sua visão,",
                    "Meu código.",
                    "Um problema,",
                    "Uma solução.",
                    "Full Stack.",
                    "Full Service."
                  ]}
                  mainClassName="overflow-hidden font-bold text-white py-0 pb-2 md:pb-4 rounded-xl"
                  staggerDuration={0.03}
                  staggerFrom="first"
                  rotationInterval={4400}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </motion.span>
            </LayoutGroup>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-col items-center gap-5"
          >
            <p className="text-white text-lg sm:text-xl mb-2">
              Que tal saber mais sobre mim ou ver alguns projetos que ja fiz?
            </p>
            <div className="flex gap-8 flex-wrap justify-center">
              <BotaoEstrela
                onClick={scrollParaPerfil}
                aria-label="Ver meu perfil"
              >
                Meu perfil
              </BotaoEstrela>
              <BotaoEstrela
                onClick={scrollParaProjetos}
                aria-label="Ver projetos"
              >
                Projetos
              </BotaoEstrela>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Estilos para a logo */}
      <style jsx global>{`
        .logo-glow {
          filter: drop-shadow(0 0 10px rgba(91, 66, 243, 0.4));
          transition: filter 0.3s ease;
        }
        
        .logo-glow:hover {
          filter: drop-shadow(0 0 15px rgba(91, 66, 243, 0.6));
        }
      `}</style>
    </section>
  );
};

export default SecaoIntroducao; 