'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TextoAnimado from '@/componentes/animacoes/TextoAnimado';
import Botao from '@/componentes/ui/Botao';
import { informacoesPessoais } from '@/dados';
import { Github, Linkedin } from 'lucide-react';

/**
 * Seção inicial do portfólio com apresentação e chamada para ação
 */
const SecaoInicio = () => {
  // Textos para animação de digitação
  const textosAnimados = [
    'Desenvolvedor Full Stack',
    'Especialista em React',
    'Proficiente em Python',
    'Amante de Banco de dados',
  ];

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Fundo preto com efeito de partículas */}
      <div className="absolute inset-0 bg-[#060606] z-0" />
      
      {/* Removendo a logo daqui */}
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl z-0"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-20 py-8">
          {/* Conteúdo de texto */}
          <motion.div
            className="w-full md:w-1/2 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-3">
              Olá, eu sou
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              {informacoesPessoais.nome}
            </h1>
            <div className="text-xl md:text-2xl font-medium text-blue-300 mb-6 h-8">
              <TextoAnimado
                textos={textosAnimados}
                velocidadeDigitacao={60}
                pausaAposDigitacao={1500}
              />
            </div>
            <p className="text-gray-300 mb-10 max-w-lg text-lg">
              {informacoesPessoais.resumo}
            </p>
            
            {/* Botões de ação */}
            <div className="flex flex-wrap gap-6 mt-2">
              {informacoesPessoais.contato.github && (
                <a 
                  href={informacoesPessoais.contato.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button flex items-center justify-center gap-2"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              )}
              
              {informacoesPessoais.contato.linkedin && (
                <a 
                  href={informacoesPessoais.contato.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button flex items-center justify-center gap-2"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Imagem de perfil estilizada como card */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.div 
              className="relative card-container glow-effect"
              animate={{ 
                y: [0, -10, 0],
                rotateZ: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card__content flex items-center justify-center relative">
                <div className="card__inner-glow"></div>
                {informacoesPessoais.foto ? (
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={informacoesPessoais.foto}
                      alt={`Foto de ${informacoesPessoais.nome}`}
                      fill
                      className="object-cover rounded-[15px] filter foto-filter"
                      priority
                    />
                    <div className="absolute inset-0 rounded-[15px] shadow-inner" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-400 text-xl rounded-[15px]">
                    Foto
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Estilos para os botões neon e o card */}
      <style jsx global>{`
        .card-container {
          width: 280px;
          height: 380px;
        }
        
        @media (min-width: 768px) {
          .card-container {
            width: 320px;
            height: 420px;
          }
        }
        
        .card-container {
          border-radius: 20px;
          padding: 5px;
          box-shadow: rgba(151, 65, 252, 0.3) 0 15px 30px -5px;
          background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
          transform-style: preserve-3d;
          perspective: 1000px;
          position: relative;
        }

        .card__content {
          background: rgb(5, 6, 45);
          border-radius: 17px;
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .card__inner-glow {
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: radial-gradient(
            circle at center,
            rgba(91, 66, 243, 0.2) 0%,
            rgba(5, 6, 45, 0) 70%
          );
          pointer-events: none;
          z-index: 1;
        }
        
        .glow-effect {
          position: relative;
          filter: drop-shadow(0 0 20px rgba(151, 65, 252, 0.4));
        }
        
        @media (min-width: 768px) {
          .glow-effect {
            filter: drop-shadow(0 0 30px rgba(151, 65, 252, 0.5));
          }
        }
        
        .glow-effect::before {
          content: '';
          position: absolute;
          inset: -5px;
          background: linear-gradient(135deg, #AF40FF, #5B42F3, #00DDEB, #5B42F3, #AF40FF);
          border-radius: 25px;
          z-index: -1;
          filter: blur(15px);
          opacity: 0.7;
          animation: glowPulse 4s infinite alternate;
        }
        
        @keyframes glowPulse {
          0% {
            opacity: 0.5;
            filter: blur(15px);
          }
          50% {
            opacity: 0.8;
            filter: blur(25px);
          }
          100% {
            opacity: 0.5;
            filter: blur(15px);
          }
        }

        .neon-button {
          position: relative;
          width: 140px;
          height: 48px;
          background-color: #0a0a0a;
          display: flex;
          align-items: center;
          color: white;
          flex-direction: row;
          justify-content: center;
          border: 1px solid rgba(0, 140, 255, 0.3);
          padding: 12px;
          gap: 8px;
          border-radius: 8px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-decoration: none;
        }

        .neon-button::before {
          content: '';
          position: absolute;
          inset: 0;
          left: -4px;
          top: -1px;
          margin: auto;
          width: 148px;
          height: 56px;
          border-radius: 10px;
          background: linear-gradient(-45deg, #0062ff 0%, #00c3ff 100%);
          z-index: -10;
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0.5;
        }

        .neon-button::after {
          content: "";
          z-index: -1;
          position: absolute;
          inset: 0;
          background: linear-gradient(-45deg, #0062ff 0%, #00c3ff 100%);
          transform: translate3d(0, 0, 0) scale(0.95);
          filter: blur(20px);
          opacity: 0.5;
        }

        .neon-button:hover {
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 140, 255, 0.4);
        }

        .neon-button:hover::after {
          filter: blur(30px);
          opacity: 0.8;
        }

        .neon-button:hover::before {
          opacity: 0.8;
          transform: rotate(-180deg);
        }

        .neon-button:active {
          transform: translateY(-1px);
        }
        
        .neon-button:active::before {
          scale: 0.7;
        }
        
        .cyber-button {
          --main-color: rgb(0, 140, 255);
          --main-bg-color: rgba(0, 140, 255, 0.36);
          --pattern-color: rgba(0, 140, 255, 0.073);
          
          cursor: pointer;
          background: radial-gradient(
              circle,
              var(--main-bg-color) 0%,
              rgba(0, 0, 0, 0) 95%
            ),
            linear-gradient(var(--pattern-color) 1px, transparent 1px),
            linear-gradient(to right, var(--pattern-color) 1px, transparent 1px);
          background-size:
            cover,
            15px 15px,
            15px 15px;
          background-position:
            center center,
            center center,
            center center;
          border-image: radial-gradient(
              circle,
              var(--main-color) 0%,
              rgba(0, 0, 0, 0) 100%
            )
            1;
          border-width: 1px 0 1px 0;
          color: var(--main-color);
          transition: all 0.3s ease-in-out;
        }

        .cyber-button:hover {
          background-size:
            cover,
            10px 10px,
            10px 10px;
          color: white;
          text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff;
          box-shadow: 0 0 5px #008cff, 0 0 20px #008cff;
          border-image: radial-gradient(
              circle,
              white 0%,
              var(--main-color) 50%,
              rgba(0, 0, 0, 0) 100%
            )
            1;
        }

        .foto-filter {
          filter: contrast(1.05) brightness(1.02);
        }

        /* Removendo os estilos da logo daqui */
      `}</style>
    </section>
  );
};

export default SecaoInicio; 