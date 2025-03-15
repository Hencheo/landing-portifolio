'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Projeto } from '@/tipos';
import Botao from '../ui/Botao';
import { ExternalLink, Github, Play, FileText } from 'lucide-react';

interface CartaoProjetoProps {
  projeto: Projeto;
  indice: number;
}

/**
 * Componente de cartão para exibir um projeto no portfólio
 * Adaptado para apresentação em timeline
 * Suporte para projetos de ciência de dados com notebooks Jupyter
 */
const CartaoProjeto = ({ projeto, indice }: CartaoProjetoProps) => {
  // Estado para controlar se o cartão está expandido
  const [expandido, setExpandido] = useState(false);

  // Função para alternar o estado de expandido
  const handleToggleExpandido = () => {
    setExpandido(!expandido);
  };

  // Animações para o cartão
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  // Animações para o conteúdo expandido
  const expandedContentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="bg-transparent overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={indice}
      onClick={handleToggleExpandido}
    >
      {/* Cabeçalho do cartão com imagem e título */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <Image
          src={projeto.imagemCapa}
          alt={`Imagem do projeto ${projeto.titulo}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        {projeto.destaque && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
            Destaque
          </div>
        )}
      </div>

      {/* Conteúdo básico do cartão */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-3">{projeto.titulo}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {projeto.descricao}
        </p>

        {/* Tags de tecnologias */}
        <div className="flex flex-wrap gap-2 mb-4">
          {projeto.tecnologias.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded-md border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
          {projeto.tecnologias.length > 3 && (
            <span className="bg-gray-800/50 text-gray-300 text-xs px-2 py-1 rounded-md">
              +{projeto.tecnologias.length - 3}
            </span>
          )}
        </div>

        {/* Botão para expandir/recolher */}
        <Botao 
          variante="fantasma" 
          tamanho="pequeno" 
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            handleToggleExpandido();
          }}
        >
          {expandido ? 'Ver menos' : 'Ver mais'}
        </Botao>
      </div>

      {/* Conteúdo expandido */}
      <motion.div
        className="px-5 overflow-hidden bg-[#080808]"
        variants={expandedContentVariants}
        initial="hidden"
        animate={expandido ? "visible" : "hidden"}
      >
        {/* Descrição completa */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-white mb-2">Descrição</h4>
          <p className="text-gray-300 text-sm">
            {projeto.descricao}
          </p>
        </div>

        {/* Galeria de imagens */}
        {projeto.imagensGaleria && projeto.imagensGaleria.length > 0 && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white mb-2">Galeria</h4>
            <div className="grid grid-cols-3 gap-2">
              {projeto.imagensGaleria.map((imagem, index) => (
                <div key={index} className="relative h-20 rounded-md overflow-hidden border border-blue-500/10">
                  <Image
                    src={imagem}
                    alt={`Imagem ${index + 1} do projeto ${projeto.titulo}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vídeo demo */}
        {projeto.videoDemo && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white mb-2">Demonstração</h4>
            <div className="relative h-48 rounded-md overflow-hidden bg-[#0a0a0a] flex items-center justify-center border border-blue-500/10">
              <Botao
                variante="primario"
                icone={<Play size={16} />}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(projeto.videoDemo, '_blank');
                }}
              >
                Ver demonstração
              </Botao>
            </div>
          </div>
        )}

        {/* Lista completa de tecnologias */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-white mb-2">Tecnologias</h4>
          <div className="flex flex-wrap gap-2">
            {projeto.tecnologias.map((tech, index) => (
              <span 
                key={index} 
                className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded-md border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pb-5">
          {projeto.arquivoNotebook && (
            <Botao
              variante="contorno"
              tamanho="pequeno"
              icone={<FileText size={16} />}
              onClick={(e) => {
                e.stopPropagation();
                // Oferece o notebook para download
                const link = document.createElement('a');
                link.href = projeto.arquivoNotebook || '';
                const fileName = projeto.arquivoNotebook ? projeto.arquivoNotebook.split('/').pop() || 'notebook.ipynb' : 'notebook.ipynb';
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Notebook
            </Botao>
          )}
          {projeto.linkGithub && (
            <Botao
              variante="contorno"
              tamanho="pequeno"
              icone={<Github size={16} />}
              onClick={(e) => {
                e.stopPropagation();
                window.open(projeto.linkGithub, '_blank');
              }}
            >
              Código
            </Botao>
          )}
          {projeto.linkDemo && (
            <Botao
              variante="primario"
              tamanho="pequeno"
              icone={<ExternalLink size={16} />}
              onClick={(e) => {
                e.stopPropagation();
                window.open(projeto.linkDemo, '_blank');
              }}
            >
              Demo
            </Botao>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CartaoProjeto; 