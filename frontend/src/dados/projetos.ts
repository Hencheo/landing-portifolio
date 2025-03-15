import { Projeto } from '@/tipos';
import { getStaticPath } from '@/lib/utils';

/**
 * Dados dos projetos reais para o portfólio
 */
export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: 'VicCoin',
    descricao: 'Projeto de uma criptomoeda desenvolvida em Python.',
    tecnologias: ['Python', 'Django', 'React'],
    imagemCapa: getStaticPath('/imagens/projetos/viccoin/viccoin-1.PNG'),
    imagens: [
      getStaticPath('/imagens/projetos/viccoin/viccoin-2.PNG'),
      getStaticPath('/imagens/projetos/viccoin/viccoin-3.PNG'),
      getStaticPath('/imagens/projetos/viccoin/viccoin-4.PNG'),
    ],
    videoDemo: 'https://www.youtube.com/embed/exemplo2',
    linkGithub: 'https://github.com/hencheo/vicoin',
    linkDemo: 'https://vicoin-demo.vercel.app',
    destaque: true,
    dataPublicacao: '2023-10-15',
  },
  {
    id: 2,
    titulo: 'Cálculo de Nota',
    descricao: 'Sistema de cálculo de notas para alunos.',
    tecnologias: ['Python', 'Django', 'React'],
    imagemCapa: getStaticPath('/imagens/projetos/calculo-nota/calculo-nota-1.png'),
    imagens: [
      getStaticPath('/imagens/projetos/calculo-nota/calculo-nota-2.png'),
      getStaticPath('/imagens/projetos/calculo-nota/calculo-nota-3.png'),
      getStaticPath('/imagens/projetos/calculo-nota/calculo-nota-4.png'),
      getStaticPath('/imagens/projetos/calculo-nota/calculo-nota-5.png'),
    ],
    videoDemo: 'https://www.youtube.com/embed/exemplo1',
    linkGithub: 'https://github.com/hencheo/calculo-notas',
    linkDemo: 'https://calculo-notas-demo.vercel.app',
    destaque: true,
    dataPublicacao: '2023-08-20',
  },
  {
    id: 3,
    titulo: 'Análise de Aluguéis',
    descricao: 'Análise de dados de aluguéis em São Paulo.',
    tecnologias: ['Python', 'Pandas', 'Jupyter'],
    imagemCapa: getStaticPath('/imagens/projetos/analise-aluguel/analise-alugueis-1.png'),
    imagens: [
      getStaticPath('/imagens/projetos/analise-aluguel/analise-alugueis-2.png'),
      getStaticPath('/imagens/projetos/analise-aluguel/analise-alugueis-3.png'),
      getStaticPath('/imagens/projetos/analise-aluguel/analise-alugueis-4.png'),
      getStaticPath('/imagens/projetos/analise-aluguel/analise-alugueis-5.png'),
      getStaticPath('/imagens/projetos/analise-aluguel/analise-alugueis-6.png'),
    ],
    arquivoNotebook: getStaticPath('/imagens/projetos/analise-aluguel/Imóveis_Documentado.ipynb'),
    linkGithub: 'https://github.com/hencheo/analise-alugueis-rio',
    linkDemo: 'https://colab.research.google.com/github/hencheo/analise-alugueis-rio',
    destaque: true,
    dataPublicacao: '2023-06-10',
  },
  {
    id: 4,
    titulo: 'Plataforma de Cursos Online',
    descricao: 'Plataforma completa para cursos online com sistema de matrícula, aulas em vídeo, exercícios interativos e certificados automáticos. Desenvolvido com Next.js e Supabase.',
    imagemCapa: '/imagens/projetos/projeto3.jpg',
    imagensGaleria: [
      '/imagens/projetos/projeto3-1.jpg',
      '/imagens/projetos/projeto3-2.jpg',
      '/imagens/projetos/projeto3-3.jpg',
    ],
    videoDemo: 'https://www.youtube.com/embed/exemplo3',
    tecnologias: ['Next.js', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
    linkGithub: 'https://github.com/usuario/projeto3',
    linkDemo: 'https://projeto3-demo.vercel.app',
    destaque: false,
    dataPublicacao: '2023-06-10',
  },
  {
    id: 5,
    titulo: 'E-commerce de Produtos Artesanais',
    descricao: 'Loja virtual para produtos artesanais com catálogo dinâmico, carrinho de compras, sistema de pagamento e área do vendedor. Desenvolvido com Next.js e Prisma.',
    imagemCapa: '/imagens/projetos/projeto4.jpg',
    imagensGaleria: [
      '/imagens/projetos/projeto4-1.jpg',
      '/imagens/projetos/projeto4-2.jpg',
    ],
    tecnologias: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    linkGithub: 'https://github.com/usuario/projeto4',
    linkDemo: 'https://projeto4-demo.vercel.app',
    destaque: false,
    dataPublicacao: '2023-04-05',
  },
  {
    id: 6,
    titulo: 'Aplicativo de Finanças Pessoais',
    descricao: 'Aplicativo para controle de finanças pessoais com gráficos interativos, categorização automática de despesas e planejamento orçamentário. Desenvolvido com React e Firebase.',
    imagemCapa: '/imagens/projetos/projeto5.jpg',
    tecnologias: ['React', 'Firebase', 'Chart.js', 'Material UI'],
    linkGithub: 'https://github.com/usuario/projeto5',
    linkDemo: 'https://projeto5-demo.vercel.app',
    destaque: false,
    dataPublicacao: '2023-02-18',
  },
]; 