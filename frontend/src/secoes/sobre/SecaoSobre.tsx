'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimacaoRevelar from '@/componentes/animacoes/AnimacaoRevelar';
import { informacoesPessoais } from '@/dados';
import { Calendar, Code2, Briefcase, GraduationCap } from 'lucide-react';
import CardBrilhante from '@/componentes/ui/CardBrilhante';
import { getImagePath } from '@/lib/utils';

/**
 * Seção Sobre com informações pessoais e experiência
 * Margens ajustadas para evitar sobreposição com o dock vertical
 * Cards com efeito brilhante nas bordas
 */
const SecaoSobre = () => {
  // Dados de experiência
  const experiencias = [
    {
      titulo: 'Experiência',
      descricao: 'Desenvolvimento de Soluções',
      icone: <Calendar className="w-6 h-6 text-blue-400" />,
    },
    {
      titulo: 'Projetos',
      descricao: 'Solucionando Problemas Reais',
      icone: <Code2 className="w-6 h-6 text-blue-400" />,
    },
    {
      titulo: 'Especialização',
      descricao: 'Python e React Native',
      icone: <Briefcase className="w-6 h-6 text-blue-400" />,
    },
    {
      titulo: 'Formação',
      descricao: 'Análise e Desenvolvimento',
      icone: <GraduationCap className="w-6 h-6 text-blue-400" />,
    },
  ];

  return (
    <section id="sobre" className="py-24 md:py-28 bg-[#060606] md:pl-14 md:pr-4 lg:pl-20 lg:pr-6 xl:pl-24 xl:pr-8">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <AnimacaoRevelar>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        </AnimacaoRevelar>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagem e cards de experiência */}
          <AnimacaoRevelar direcao="direita" atraso={0.2}>
            <div className="relative">
              {/* Imagem principal */}
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl shadow-blue-500/20 border border-blue-500/20">
                {informacoesPessoais.fotoSobre ? (
                  <Image
                    src={getImagePath('/imagens/perfil/sobre.png')}
                    alt={`Foto de ${informacoesPessoais.nome}`}
                    fill
                    className="object-cover"
                  />
                ) : informacoesPessoais.foto ? (
                  <Image
                    src={getImagePath(informacoesPessoais.foto)}
                    alt={`Foto de ${informacoesPessoais.nome}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#0c0c0c] flex items-center justify-center text-gray-600 text-xl">
                    Foto
                  </div>
                )}
              </div>

              {/* Cards de experiência */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {experiencias.map((exp, index) => (
                  <CardBrilhante
                    key={index}
                    variant="blue"
                  >
                    <div className="flex items-start">
                      <div className="mr-3">{exp.icone}</div>
                      <div>
                        <h3 className="font-bold text-white">
                          {exp.titulo}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {exp.descricao}
                        </p>
                      </div>
                    </div>
                  </CardBrilhante>
                ))}
              </div>
            </div>
          </AnimacaoRevelar>

          {/* Texto sobre mim */}
          <AnimacaoRevelar direcao="esquerda" atraso={0.4}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Conheça um pouco da minha história
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Apaixonado por criar soluções que resolvem problemas reais.
                </p>
                
                <p>
                  Sempre tive um olhar voltado para a solução de problemas e, por isso, busquei me capacitar tecnicamente. Minha formação em Análise e Desenvolvimento de Sistemas me deu uma base sólida, mas foi na prática que realmente desenvolvi minhas habilidades.
                </p>
                
                <p>
                  Comecei aprendendo Python e logo me aprofundei em Django e Django REST Framework para criar APIs robustas e seguras. À medida que os desafios foram surgindo, ampliei meu conhecimento para JavaScript, explorando tecnologias como React Native com Expo, Next.js e Node.js, além de trabalhar com bancos de dados como PostgreSQL e Firebase Firestore.
                </p>
                
                <p>
                  Cada projeto que desenvolvi reforçou minha capacidade de entender um problema real, escolher as melhores tecnologias para resolvê-lo e entregar uma solução funcional e escalável.
                </p>
                
                <p>
                  Minha abordagem sempre foi aprender o que for necessário para entregar a melhor solução possível, garantindo que cada tecnologia utilizada agregue valor ao projeto e ao usuário final.
                </p>
              </div>
              
              {/* Estatísticas */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <CardBrilhante variant="blue">
                  <h4 className="font-bold text-white text-lg">Formação</h4>
                  <p className="text-gray-300">Análise e Desenvolvimento de Sistemas</p>
                </CardBrilhante>
                
                <CardBrilhante variant="blue">
                  <h4 className="font-bold text-white text-lg">Especialização</h4>
                  <p className="text-gray-300">Python e Desenvolvimento Web</p>
                </CardBrilhante>
              </div>
            </div>
          </AnimacaoRevelar>
        </div>
      </div>
    </section>
  );
};

export default SecaoSobre;