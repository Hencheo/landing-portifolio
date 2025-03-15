'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTema } from '@/contextos/TemaContexto';
import { Menu, X, Sun, Moon, Github, Linkedin, Phone, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { informacoesPessoais } from '@/dados';

/**
 * Componente de navegação principal do site
 * Inclui menu responsivo e alternador de tema
 */
const Navegacao = () => {
  // Estado para controlar o menu mobile
  const [menuAberto, setMenuAberto] = useState(false);
  
  // Estado para controlar se a navegação está com fundo sólido (após scroll)
  const [fundoSolido, setFundoSolido] = useState(false);
  
  // Estado para acompanhar o item de navegação ativo
  const [itemAtivo, setItemAtivo] = useState('#introducao');
  
  // Contexto de tema
  const { tema, alternarTema } = useTema();

  // Links de navegação com ícones
  const links = [
    { nome: 'Início', href: '#introducao', icone: <Home size={20} /> },
    { nome: 'Perfil', href: '#inicio', icone: <User size={20} /> },
    { nome: 'Projetos', href: '#projetos', icone: <Briefcase size={20} /> },
    { nome: 'Habilidades', href: '#habilidades', icone: <Code size={20} /> },
    { nome: 'Contato', href: '#contato', icone: <Mail size={20} /> },
  ];

  // Links de redes sociais
  const redesSociais = [
    { nome: 'GitHub', href: informacoesPessoais.contato.github, icone: <Github size={20} /> },
    { nome: 'LinkedIn', href: informacoesPessoais.contato.linkedin, icone: <Linkedin size={20} /> },
    { nome: 'WhatsApp', href: informacoesPessoais.contato.whatsapp, icone: <Phone size={20} /> },
  ].filter(item => !!item.href);

  // Efeito para detectar o scroll e mudar o fundo da navegação
  useEffect(() => {
    const handleScroll = () => {
      // Atualiza o fundo baseado no scroll
      if (window.scrollY > 50) {
        setFundoSolido(true);
      } else {
        setFundoSolido(false);
      }
      
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

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = (href: string) => {
    setMenuAberto(false);
    setItemAtivo(href);
  };

  return (
    <>
      {/* Header com logo e navegação */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          fundoSolido
            ? 'bg-[#060606]/90 backdrop-blur-md border-b border-blue-900/30 shadow-md'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`container mx-auto px-4 ${fundoSolido ? 'py-2.5' : 'py-4'} flex items-center justify-between`}>
          {/* Logo com animação */}
          <Link href="#introducao" className="relative group">
            <motion.div
              className="flex items-center text-white dark:text-white text-3xl font-extrabold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="mr-1">Hencheo</span>
              <motion.span 
                className="font-medium italic text-primary-400"
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1.1, 1] }}
                transition={{ 
                  duration: 1,
                  delay: 0.7,
                  times: [0, 0.7, 1],
                  ease: "easeOut"
                }}
              >.dev</motion.span>
              
              {/* Brilho no logo ao passar o mouse */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 filter blur-xl group-hover:opacity-30 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Navegação desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md flex items-center space-x-1 transition-colors ${
                  itemAtivo === link.href
                    ? 'bg-primary-500 text-white'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.icone}
                <span>{link.nome}</span>
              </Link>
            ))}
            
            {/* Ícones de redes sociais para desktop */}
            {redesSociais.length > 0 && (
              <div className="flex items-center ml-4 pl-4 border-l border-white/20">
                {redesSociais.map((item) => (
                  <a
                    key={item.nome}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
                    aria-label={item.nome}
                  >
                    {item.icone}
                  </a>
                ))}
              </div>
            )}
            
            {/* Botão de tema para desktop */}
            <button
              onClick={alternarTema}
              className="ml-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Alternar tema"
            >
              {tema === 'claro' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Botões mobile (menu e tema) */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={alternarTema}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Alternar tema"
            >
              {tema === 'claro' ? (
                <Moon size={20} className="text-white" />
              ) : (
                <Sun size={20} className="text-white" />
              )}
            </button>
            
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuAberto ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {menuAberto && (
            <motion.div
              className="md:hidden bg-[#060606]/90 backdrop-blur-md shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center space-x-3 py-2 px-3 rounded-lg transition-colors ${
                        itemAtivo === link.href
                          ? 'bg-primary-900/40 text-primary-400'
                          : 'text-white hover:bg-white/10'
                      }`}
                      onClick={() => handleLinkClick(link.href)}
                    >
                      {link.icone}
                      <span>{link.nome}</span>
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-gray-700">
                  {/* Links de redes sociais */}
                  {redesSociais.map((item) => (
                    <a
                      key={item.nome}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
                      aria-label={item.nome}
                    >
                      {item.icone}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navegacao;