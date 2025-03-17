'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Projeto } from '@/tipos';
import Botao from '../ui/Botao';
import { ExternalLink, Github, Play, FileText, ChevronDown, ChevronUp, X } from 'lucide-react';
import { getImagePath } from '@/lib/utils';

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
  // Estado para controlar o modal de imagem ampliada
  const [imagemAmpliada, setImagemAmpliada] = useState<string | null>(null);

  // Função para alternar o estado de expandido
  const handleToggleExpandido = () => {
    setExpandido(!expandido);
  };

  // Função para abrir o modal com a imagem ampliada
  const abrirImagemAmpliada = (e: React.MouseEvent, imagem: string) => {
    e.stopPropagation();
    setImagemAmpliada(imagem);
  };

  // Função para fechar o modal de imagem ampliada
  const fecharImagemAmpliada = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImagemAmpliada(null);
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
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 text-justify">
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
          variante="primario" 
          tamanho="pequeno" 
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium"
          icone={expandido ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
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
          <p className="text-gray-300 text-sm text-justify">
            {projeto.descricao}
          </p>
        </div>

        {/* Galeria de imagens */}
        {projeto.imagensGaleria && projeto.imagensGaleria.length > 0 && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white mb-2">Galeria</h4>
            <div className="grid grid-cols-3 gap-2">
              {projeto.imagensGaleria.map((imagem, index) => (
                <div 
                  key={index} 
                  className="relative h-20 rounded-md overflow-hidden border border-blue-500/10 cursor-pointer transform transition-transform hover:scale-105"
                  onClick={(e) => abrirImagemAmpliada(e, imagem)}
                >
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

      {/* Modal de Imagem Ampliada */}
      <AnimatePresence>
        {imagemAmpliada && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={fecharImagemAmpliada}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <div className="absolute top-2 right-2 z-10">
                  <button 
                    className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    onClick={fecharImagemAmpliada}
                    aria-label="Fechar imagem"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={imagemAmpliada}
                    alt="Imagem ampliada do projeto"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CartaoProjeto; 