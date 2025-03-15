'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimacaoRevelar from '@/componentes/animacoes/AnimacaoRevelar';
import { HabilidadeIconCloud } from '@/componentes/ui/IconCloud';
import CardBrilhante from '@/componentes/ui/CardBrilhante';
import { habilidades } from '@/dados';

// Tipo explícito para categorias de habilidades
type CategoriaHabilidades = 'todas' | 'frontend' | 'backend' | 'outros';

/**
 * Mapeamento de ícones para garantir compatibilidade com SimpleIcons
 * Alguns ícones podem precisar de nomes específicos da biblioteca
 */
const mapearIconesParaSimpleIcons = (icone: string): string => {
  const mapeamento: Record<string, string> = {
    'react': 'react',
    'nextjs': 'nextdotjs',
    'typescript': 'typescript',
    'javascript': 'javascript',
    'html5': 'html5',
    'css3': 'css3',
    'tailwind': 'tailwindcss',
    'framer': 'framer',
    'nodejs': 'nodedotjs',
    'express': 'express',
    'mongodb': 'mongodb',
    'postgresql': 'postgresql',
    'firebase': 'firebase',
    'figma': 'figma',
    'adobexd': 'adobexd',
    'photoshop': 'adobephotoshop',
    'git': 'git',
    'docker': 'docker',
    'jest': 'jest',
    'cicd': 'githubactions', // Adaptação para um ícone similar
  };
  
  return mapeamento[icone.toLowerCase()] || icone.toLowerCase();
};

/**
 * Seção de Habilidades com visualização interativa em nuvem de ícones
 * Margens ajustadas para evitar sobreposição com o dock vertical
 */
const SecaoHabilidades = () => {
  // Estado para controlar a categoria ativa
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaHabilidades>('todas');

  // Categorias para o filtro
  const categorias: { valor: CategoriaHabilidades; nome: string }[] = [
    { valor: 'todas', nome: 'Todas' },
    { valor: 'frontend', nome: 'Frontend' },
    { valor: 'backend', nome: 'Backend' },
    { valor: 'outros', nome: 'Data Science & Outros' },
  ];

  // Preparar os slugs de ícones para cada categoria
  const iconesPorCategoria = {
    todas: habilidades.map(h => mapearIconesParaSimpleIcons(h.icone)),
    frontend: habilidades
      .filter(h => h.categoria === 'frontend')
      .map(h => mapearIconesParaSimpleIcons(h.icone)),
    backend: habilidades
      .filter(h => h.categoria === 'backend')
      .map(h => mapearIconesParaSimpleIcons(h.icone)),
    outros: habilidades
      .filter(h => h.categoria === 'outros')
      .map(h => mapearIconesParaSimpleIcons(h.icone)),
  };

  // Dados de aprendizado contínuo
  const aprendizados = [
    {
      titulo: 'Desenvolvimento Mobile',
      descricao: 'Aprofundando conhecimentos em React Native e Expo para criar aplicações móveis nativas com experiência fluida e integração com APIs.'
    },
    {
      titulo: 'APIs e Backend Escaláveis',
      descricao: 'Aprimorando técnicas de desenvolvimento de APIs RESTful com Django REST Framework e implementação de autenticação segura.'
    },
    {
      titulo: 'Ciência de Dados',
      descricao: 'Expandindo habilidades em análise de dados com Python, Pandas e técnicas avançadas de visualização para extrair insights valiosos.'
    },
  ];

  return (
    <section id="habilidades" className="py-24 md:py-28 bg-[#060606] md:pl-14 md:pr-4 lg:pl-20 lg:pr-6 xl:pl-24 xl:pr-8">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <AnimacaoRevelar>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
            Minhas Habilidades
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Conheça as tecnologias e ferramentas que domino e utilizo para criar soluções digitais
            modernas, responsivas e de alta qualidade.
          </p>
        </AnimacaoRevelar>

        {/* Filtros de categoria */}
        <AnimacaoRevelar direcao="baixo" atraso={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categorias.map((categoria) => (
              <button
                key={categoria.valor}
                onClick={() => setCategoriaAtiva(categoria.valor)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  categoriaAtiva === categoria.valor
                    ? 'bg-blue-500 text-white'
                    : 'bg-[#0c0c0c] text-gray-300 border border-blue-500/30 hover:bg-[#111]'
                }`}
              >
                {categoria.nome}
              </button>
            ))}
          </div>
        </AnimacaoRevelar>

        {/* Nuvem de ícones interativa */}
        <AnimatePresence mode="wait">
          <motion.div
            key={categoriaAtiva}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] bg-[#070707] rounded-xl shadow-xl p-4 mb-12 border border-blue-500/20"
          >
            <HabilidadeIconCloud 
              iconSlugs={iconesPorCategoria[categoriaAtiva]} 
              categoria={categoriaAtiva}
            />
          </motion.div>
        </AnimatePresence>

        {/* Seção de aprendizado contínuo */}
        <AnimacaoRevelar direcao="baixo" atraso={0.4}>
          <div className="mt-8 bg-[#0c0c0c] p-8 rounded-xl shadow-xl border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Aprendizado Contínuo
            </h3>
            <p className="text-gray-300 text-center mb-8">
              Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades.
              Atualmente, estou focado em:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aprendizados.map((item, index) => (
                <CardBrilhante key={index} variant="blue">
                  <h4 className="font-bold text-white mb-2">
                    {item.titulo}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {item.descricao}
                  </p>
                </CardBrilhante>
              ))}
            </div>
          </div>
        </AnimacaoRevelar>
      </div>
    </section>
  );
};

export default SecaoHabilidades; 