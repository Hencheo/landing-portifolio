'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import AnimacaoRevelar from '@/componentes/animacoes/AnimacaoRevelar';
import Botao from '@/componentes/ui/Botao';
import { informacoesPessoais } from '@/dados';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

/**
 * Seção de Contato com formulário e informações
 * Margens ajustadas para evitar sobreposição com o dock vertical
 */
const SecaoContato = () => {
  // Estados para o formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [statusEnvio, setStatusEnvio] = useState<'sucesso' | 'erro' | null>(null);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    
    setEnviando(true);
    setStatusEnvio(null);
    
    try {
      // Simulação de envio (em um projeto real, aqui seria a chamada para uma API)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Limpar o formulário após o envio
      setNome('');
      setEmail('');
      setMensagem('');
      setStatusEnvio('sucesso');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setStatusEnvio('erro');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contato" className="py-24 md:py-28 bg-[#060606] md:pl-14 md:pr-4 lg:pl-20 lg:pr-6 xl:pl-24 xl:pr-8">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <AnimacaoRevelar>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-justify text-gray-300 max-w-2xl mx-auto mb-12">
            Tem um projeto em mente ou quer conversar sobre oportunidades de trabalho?
            Ficarei feliz em responder suas perguntas e discutir como posso ajudar.
          </p>
        </AnimacaoRevelar>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <AnimacaoRevelar direcao="direita" atraso={0.2}>
            <div className="bg-[#0c0c0c] p-8 rounded-lg shadow-md border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h3>
              
              <ul className="space-y-6">
                {informacoesPessoais.contato.email && (
                  <li className="flex items-start">
                    <div className="bg-blue-900/20 p-3 rounded-full mr-4 border border-blue-500/30">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <a 
                        href={`mailto:${informacoesPessoais.contato.email}`}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {informacoesPessoais.contato.email}
                      </a>
                    </div>
                  </li>
                )}
                
                {informacoesPessoais.contato.telefone && (
                  <li className="flex items-start">
                    <div className="bg-blue-900/20 p-3 rounded-full mr-4 border border-blue-500/30">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Telefone</h4>
                      <a 
                        href={`tel:${informacoesPessoais.contato.telefone.replace(/\D/g, '')}`}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {informacoesPessoais.contato.telefone}
                      </a>
                    </div>
                  </li>
                )}
                
                <li className="flex items-start">
                  <div className="bg-blue-900/20 p-3 rounded-full mr-4 border border-blue-500/30">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Localização</h4>
                    <p className="text-gray-300">
                      São Paulo, Brasil
                    </p>
                  </div>
                </li>
              </ul>
              
              {/* Redes sociais */}
              <div className="mt-8">
                <h4 className="font-semibold text-white mb-4">
                  Redes Sociais
                </h4>
                <div className="flex space-x-4">
                  {informacoesPessoais.contato.github && (
                    <motion.a
                      href={informacoesPessoais.contato.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#111] p-3 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-colors shadow-md border border-blue-500/30"
                      whileHover={{ y: -5 }}
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  
                  {informacoesPessoais.contato.linkedin && (
                    <motion.a
                      href={informacoesPessoais.contato.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#111] p-3 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-colors shadow-md border border-blue-500/30"
                      whileHover={{ y: -5 }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  )}
                  
                  {informacoesPessoais.contato.whatsapp && (
                    <motion.a
                      href={informacoesPessoais.contato.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#111] p-3 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition-colors shadow-md border border-blue-500/30"
                      whileHover={{ y: -5 }}
                      aria-label="WhatsApp"
                    >
                      <Phone className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </AnimacaoRevelar>

          {/* Formulário de contato */}
          <AnimacaoRevelar direcao="esquerda" atraso={0.4}>
            <div className="bg-[#0c0c0c] p-8 rounded-lg shadow-md border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="nome" 
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-blue-500/30 bg-[#111] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-blue-500/30 bg-[#111] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="mensagem" 
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-blue-500/30 bg-[#111] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                  />
                </div>
                
                <Botao
                  type="submit"
                  variante="primario"
                  fullWidth
                  icone={<Send size={18} />}
                  disabled={enviando}
                  className="neon-button"
                >
                  {enviando ? 'Enviando...' : 'Enviar Mensagem'}
                </Botao>
                
                {/* Mensagem de status */}
                {statusEnvio === 'sucesso' && (
                  <p className="text-green-400 text-sm mt-2 text-justify">
                    Mensagem enviada com sucesso! Entrarei em contato em breve.
                  </p>
                )}
                
                {statusEnvio === 'erro' && (
                  <p className="text-red-400 text-sm mt-2 text-justify">
                    Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
                  </p>
                )}
              </form>
            </div>
          </AnimacaoRevelar>
        </div>
      </div>
    </section>
  );
};

export default SecaoContato; 