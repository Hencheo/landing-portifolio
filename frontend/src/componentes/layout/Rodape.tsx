'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { informacoesPessoais } from '@/dados';
import { Github, Linkedin, Phone, Mail } from 'lucide-react';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

/**
 * Componente de rodapé do site
 * Inclui links de navegação, informações de contato e créditos
 * Margens ajustadas para evitar sobreposição com o dock vertical
 */
const Rodape = () => {
  // Links de navegação
  const links = [
    { nome: 'Início', href: '#introducao' },
    { nome: 'Perfil', href: '#inicio' },
    { nome: 'Projetos', href: '#projetos' },
    { nome: 'Habilidades', href: '#habilidades' },
    { nome: 'Contato', href: '#contato' },
  ];

  // Ano atual para o copyright
  const anoAtual = new Date().getFullYear();

  return (
    <div className="relative overflow-hidden">
      <BackgroundBeamsWithCollision className="h-auto min-h-[400px] bg-[#060606]">
        <footer className="pt-12 pb-6 relative z-10 w-full md:pl-14 md:pr-4 lg:pl-20 lg:pr-6 xl:pl-24 xl:pr-8">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Coluna 1: Informações */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {informacoesPessoais.nome.split(' ')[0]}
                  <span className="text-blue-500">.</span>
                </h3>
                <p className="text-gray-300 mb-4 max-w-xs">
                  {informacoesPessoais.resumo.substring(0, 120)}...
                </p>
                <div className="flex space-x-3">
                  {/* Links de redes sociais */}
                  {informacoesPessoais.contato.github && (
                    <motion.a
                      href={informacoesPessoais.contato.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#111] rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-colors border border-blue-500/30"
                      aria-label="GitHub"
                      whileHover={{ y: -3 }}
                    >
                      <Github size={18} />
                    </motion.a>
                  )}
                  
                  {informacoesPessoais.contato.linkedin && (
                    <motion.a
                      href={informacoesPessoais.contato.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#111] rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-colors border border-blue-500/30"
                      aria-label="LinkedIn"
                      whileHover={{ y: -3 }}
                    >
                      <Linkedin size={18} />
                    </motion.a>
                  )}
                  
                  {informacoesPessoais.contato.whatsapp && (
                    <motion.a
                      href={informacoesPessoais.contato.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#111] rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-colors border border-blue-500/30"
                      aria-label="WhatsApp"
                      whileHover={{ y: -3 }}
                    >
                      <Phone size={18} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Coluna 2: Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Navegação
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {link.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna 3: Contato */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Contato
                </h3>
                <ul className="space-y-3">
                  {informacoesPessoais.contato.email && (
                    <li className="flex items-center text-gray-300">
                      <Mail size={16} className="mr-2 text-blue-400" />
                      <a 
                        href={`mailto:${informacoesPessoais.contato.email}`}
                        className="hover:text-blue-400 transition-colors"
                      >
                        {informacoesPessoais.contato.email}
                      </a>
                    </li>
                  )}
                  
                  {informacoesPessoais.contato.telefone && (
                    <li className="flex items-center text-gray-300">
                      <Phone size={16} className="mr-2 text-blue-400" />
                      <a 
                        href={`tel:${informacoesPessoais.contato.telefone.replace(/\D/g, '')}`}
                        className="hover:text-blue-400 transition-colors"
                      >
                        {informacoesPessoais.contato.telefone}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Linha divisória */}
            <div className="border-t border-blue-900/30 pt-6 mt-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  &copy; {anoAtual} {informacoesPessoais.nome}. Todos os direitos reservados.
                </p>
                <p className="text-gray-400 text-sm mt-2 md:mt-0">
                  Desenvolvido com <span className="text-blue-500">❤️</span> usando Next.js e Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </footer>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Rodape; 