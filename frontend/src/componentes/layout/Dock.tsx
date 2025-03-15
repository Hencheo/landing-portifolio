'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail, Github, Linkedin, Phone } from 'lucide-react';
import { informacoesPessoais } from '@/dados';

/**
 * Componente Dock de navegação vertical com efeitos de hover
 */
const Dock = () => {
  // Estado para acompanhar o item de navegação ativo
  const [itemAtivo, setItemAtivo] = useState('#introducao');
  
  // Links de navegação com ícones
  const links = [
    { nome: 'Início', href: '#introducao', icone: <Home size={22} /> },
    { nome: 'Perfil', href: '#inicio', icone: <User size={22} /> },
    { nome: 'Projetos', href: '#projetos', icone: <Briefcase size={22} /> },
    { nome: 'Habilidades', href: '#habilidades', icone: <Code size={22} /> },
    { nome: 'Contato', href: '#contato', icone: <Mail size={22} /> },
  ];

  // Links de redes sociais
  const redesSociais = [
    { nome: 'GitHub', href: informacoesPessoais.contato.github, icone: <Github size={20} /> },
    { nome: 'LinkedIn', href: informacoesPessoais.contato.linkedin, icone: <Linkedin size={20} /> },
    { nome: 'WhatsApp', href: informacoesPessoais.contato.whatsapp, icone: <Phone size={20} /> },
  ].filter(item => !!item.href);

  // Efeito para detectar a seção ativa durante o scroll
  useEffect(() => {
    const handleScroll = () => {
      // Atualiza o item ativo baseado na seção visível
      const secoes = links.map(link => link.href.substring(1));
      
      // Encontra a seção atualmente em foco
      for (const secao of secoes) {
        const elemento = document.getElementById(secao);
        if (elemento) {
          const rect = elemento.getBoundingClientRect();
          // Se o topo do elemento estiver próximo do topo da janela
          if (rect.top <= 150 && rect.bottom >= 150) {
            setItemAtivo(`#${secao}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Executa uma vez na montagem para configurar o estado inicial
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  // Função para lidar com o clique em um link
  const handleLinkClick = (href: string) => {
    setItemAtivo(href);
  };

  return (
    <>
      {/* Desktop Dock */}
      <motion.div
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex-col items-center hidden md:flex"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Dock de navegação principal */}
        <div className="flex flex-col items-center gap-6 bg-[#060606]/90 backdrop-blur-md p-3 rounded-full border border-blue-900/40 shadow-lg shadow-blue-500/20">
          {links.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  itemAtivo === link.href
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/50'
                    : 'bg-[#111]/70 hover:bg-blue-600/70 text-white/90 hover:text-white'
                }`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.icone}
                
                {/* Efeito de brilho ao redor do ícone ativo */}
                {itemAtivo === link.href && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500/20"
                    animate={{ 
                      boxShadow: ['0 0 5px 2px rgba(59, 130, 246, 0.3)', '0 0 12px 4px rgba(59, 130, 246, 0.6)', '0 0 5px 2px rgba(59, 130, 246, 0.3)'] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                )}
              </Link>
              
              {/* Tooltip com nome da seção */}
              <div
                className="absolute left-12 top-1/2 transform -translate-y-1/2 px-3 py-1.5 bg-[#060606]/95 text-white text-sm font-medium rounded-md whitespace-nowrap shadow-lg shadow-blue-500/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                {link.nome}
                <div className="absolute w-2 h-2 left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#060606]/95" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Dock para redes sociais */}
        {redesSociais.length > 0 && (
          <div className="flex flex-col items-center gap-4 mt-6 bg-[#060606]/90 backdrop-blur-md p-3 rounded-full border border-blue-900/40 shadow-lg shadow-blue-500/20">
            {redesSociais.map((item) => (
              <div key={item.nome} className="relative group">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-[#111]/70 hover:bg-blue-600/70 text-white/90 hover:text-white transition-all duration-300"
                  aria-label={item.nome}
                >
                  {item.icone}
                </a>
                
                {/* Tooltip com nome da rede social */}
                <div
                  className="absolute left-10 top-1/2 transform -translate-y-1/2 px-3 py-1.5 bg-[#060606]/95 text-white text-sm font-medium rounded-md whitespace-nowrap shadow-lg shadow-blue-500/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  {item.nome}
                  <div className="absolute w-2 h-2 left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#060606]/95" />
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Mobile Dock (Horizontal na parte inferior) */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden justify-center py-2 bg-[#060606]/95 backdrop-blur-md border-t border-blue-900/40 shadow-lg shadow-blue-500/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-around w-full max-w-md px-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative flex flex-col items-center justify-center p-2 ${
                itemAtivo === link.href
                  ? 'text-blue-500'
                  : 'text-white/80 hover:text-white'
              }`}
              onClick={() => handleLinkClick(link.href)}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                itemAtivo === link.href
                  ? 'bg-blue-600/20 text-blue-400 shadow-sm shadow-blue-500/30'
                  : 'text-white/80 hover:text-white'
              }`}>
                {link.icone}
              </div>
              <span className="text-xs mt-1 font-medium">{link.nome}</span>
              
              {/* Indicador de ativo */}
              {itemAtivo === link.href && (
                <motion.div
                  className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-blue-500"
                  layoutId="activeIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Dock; 