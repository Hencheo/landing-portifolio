'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimacaoRevelar from '@/componentes/animacoes/AnimacaoRevelar';
import CartaoProjeto from '@/componentes/projetos/CartaoProjeto';
import { Timeline } from '@/componentes/ui/Timeline';
import { projetos } from '@/dados';
import { MdOutlineCollections } from 'react-icons/md';

/**
 * Seção de Projetos com exibição em formato de timeline
 * Organizada por categorias principais de projetos
 * Margens ajustadas para evitar sobreposição com o dock vertical
 */
const SecaoProjetos = () => {
  // Estado para mensagem de desenvolvimento
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  // Agrupar projetos por categorias
  const projetoDataScience = projetos.find(p => 
    p.tecnologias.some(t => 
      ['Python', 'Pandas', 'Análise de Dados', 'Jupyter Notebook'].includes(t)
    )
  );
  
  const projetoDesenvWeb = projetos.find(p => 
    p.tecnologias.some(t => 
      ['React', 'Next.js', 'Node.js'].includes(t)
    ) && !p.tecnologias.includes('React Native')
  );
  
  const projetoMobile = projetos.find(p => 
    p.tecnologias.includes('React Native') || p.tecnologias.includes('Mobile')
  );

  // Dados para a timeline
  const timelineData = [
    {
      title: "Análise de dados e data science",
      content: projetoDataScience ? (
        <div className="md:w-[90%] lg:w-[80%] bg-gradient-to-br from-[#0c0c0c] to-[#111] rounded-xl overflow-hidden shadow-xl shadow-blue-900/10 border border-blue-500/10 transition-all duration-300 hover:shadow-blue-500/20">
          <CartaoProjeto projeto={projetoDataScience} indice={0} />
        </div>
      ) : <p className="text-gray-400">Projeto em breve</p>
    },
    {
      title: "Desenvolvimento web",
      content: projetoDesenvWeb ? (
        <div className="md:w-[90%] lg:w-[80%] bg-gradient-to-br from-[#0c0c0c] to-[#111] rounded-xl overflow-hidden shadow-xl shadow-blue-900/10 border border-blue-500/10 transition-all duration-300 hover:shadow-blue-500/20">
          <CartaoProjeto projeto={projetoDesenvWeb} indice={1} />
        </div>
      ) : <p className="text-gray-400">Projeto em breve</p>
    },
    {
      title: "Aplicativo mobile",
      content: projetoMobile ? (
        <div className="md:w-[90%] lg:w-[80%] bg-gradient-to-br from-[#0c0c0c] to-[#111] rounded-xl overflow-hidden shadow-xl shadow-blue-900/10 border border-blue-500/10 transition-all duration-300 hover:shadow-blue-500/20">
          <CartaoProjeto projeto={projetoMobile} indice={2} />
        </div>
      ) : <p className="text-gray-400">Projeto em breve</p>
    }
  ];

  return (
    <section id="projetos" className="py-16 md:py-20 bg-[#060606] md:pl-14 md:pr-4 lg:pl-20 lg:pr-6 xl:pl-24 xl:pr-8">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <AnimacaoRevelar>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-justify text-gray-300 max-w-2xl mx-auto mb-6 md:mb-10">
            Explore meus trabalhos em diferentes áreas de atuação.
            Cada projeto representa um conjunto de habilidades e soluções únicas.
          </p>
        </AnimacaoRevelar>

        {/* Timeline de projetos por categoria */}
        <div className="bg-[#060606] mb-10">
          <Timeline data={timelineData} />
        </div>
        
        {/* Botão para ver mais projetos */}
        <div className="mt-6 text-center">
          <motion.button
            onClick={() => setMostrarMensagem(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium text-lg rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/40 border-2 border-blue-500"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.6)" 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <MdOutlineCollections className="text-2xl" />
            <span>Ver todos os projetos</span>
          </motion.button>

          {/* Mensagem de desenvolvimento */}
          <AnimatePresence>
            {mostrarMensagem && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-4 text-blue-400 text-sm bg-blue-950/30 p-3 rounded-lg max-w-md mx-auto backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-justify">Página em desenvolvimento. Em breve você poderá ver todos os projetos! 😊</span>
                  <button
                    onClick={() => setMostrarMensagem(false)}
                    className="ml-2 text-blue-400 hover:text-blue-300 p-1 rounded-full hover:bg-blue-800/30 transition-colors"
                    aria-label="Fechar mensagem"
                  >
                    ✕
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SecaoProjetos; 