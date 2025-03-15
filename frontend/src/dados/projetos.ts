import { Projeto } from '@/tipos';
import { getImagePath } from '@/lib/utils';

/**
 * Dados dos projetos reais para o portfólio
 */
export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: 'ViCoin - Aplicativo de Gestão Financeira',
    descricao: 'Solução completa para gestão financeira pessoal que resolve o problema da falta de controle sobre gastos diários. Permite registro de ganhos e gastos, visualização de relatórios detalhados sobre comportamento financeiro e integração com bancos digitais para acompanhamento preciso.',
    imagemCapa: getImagePath('/imagens/projetos/viccoin/viccoin-1.PNG'),
    imagensGaleria: [
      getImagePath('/imagens/projetos/viccoin/viccoin-2.PNG'),
      getImagePath('/imagens/projetos/viccoin/viccoin-3.PNG'),
      getImagePath('/imagens/projetos/viccoin/viccoin-4.PNG'),
    ],
    videoDemo: 'https://www.youtube.com/embed/exemplo2',
    tecnologias: ['Django', 'Django REST Framework', 'React Native', 'Expo', 'Firebase Firestore', 'Firebase Authentication', 'Render', 'Autenticação Biométrica'],
    linkGithub: 'https://github.com/hencheo/vicoin',
    linkDemo: 'https://vicoin-demo.vercel.app',
    destaque: true,
    dataPublicacao: '2023-10-15',
  },
  {
    id: 2,
    titulo: 'Sistema de Cálculo de Médias Acadêmicas',
    descricao: 'Desenvolvido para resolver a dificuldade dos estudantes em calcular suas médias corretamente, este sistema permite cadastro de usuários, inserção de matérias e acompanhamento automático de notas. A solução fornece uma experiência fluida e simplifica o processo de controle acadêmico.',
    imagemCapa: getImagePath('/imagens/projetos/calculo-nota/calculo-nota-1.png'),
    imagensGaleria: [
      getImagePath('/imagens/projetos/calculo-nota/calculo-nota-2.png'),
      getImagePath('/imagens/projetos/calculo-nota/calculo-nota-3.png'),
      getImagePath('/imagens/projetos/calculo-nota/calculo-nota-4.png'),
      getImagePath('/imagens/projetos/calculo-nota/calculo-nota-5.png'),
    ],
    videoDemo: 'https://www.youtube.com/embed/exemplo1',
    tecnologias: ['PostgreSQL', 'SQL', 'Next.js', 'Node.js', 'Tailwind CSS'],
    linkGithub: 'https://github.com/hencheo/calculo-notas',
    linkDemo: 'https://calculo-notas-demo.vercel.app',
    destaque: true,
    dataPublicacao: '2023-08-20',
  },
  {
    id: 3,
    titulo: 'Análise de Preços de Aluguéis no Rio de Janeiro',
    descricao: 'Projeto de ciência de dados que soluciona a falta de transparência no mercado imobiliário do Rio de Janeiro. Analisa os preços dos aluguéis ao longo do tempo e gera relatórios detalhados sobre os bairros mais caros em cada período, fornecendo insights valiosos para quem busca entender melhor o mercado.',
    imagemCapa: getImagePath('/imagens/projetos/analise-aluguel/analise-alugueis-1.png'),
    imagensGaleria: [
      getImagePath('/imagens/projetos/analise-aluguel/analise-alugueis-2.png'),
      getImagePath('/imagens/projetos/analise-aluguel/analise-alugueis-3.png'),
      getImagePath('/imagens/projetos/analise-aluguel/analise-alugueis-4.png'),
      getImagePath('/imagens/projetos/analise-aluguel/analise-alugueis-5.png'),
      getImagePath('/imagens/projetos/analise-aluguel/analise-alugueis-6.png'),
    ],
    arquivoNotebook: getImagePath('/imagens/projetos/analise-aluguel/Imóveis_Documentado.ipynb'),
    tecnologias: ['Python', 'Pandas', 'Matplotlib', 'Data Science', 'Análise de Dados', 'Visualização de Dados'],
    linkGithub: 'https://github.com/hencheo/analise-alugueis-rio',
    linkDemo: 'https://colab.research.google.com/github/hencheo/analise-alugueis-rio',
    destaque: true,
    dataPublicacao: '2023-06-10',
  },
  {
    id: 4,
    titulo: 'Plataforma de Cursos Online',
    descricao: 'Plataforma completa para cursos online com sistema de matrícula, aulas em vídeo, exercícios interativos e certificados automáticos. Desenvolvido com Next.js e Supabase.',
    imagemCapa: getImagePath('/imagens/projetos/projeto3.jpg'),
    imagensGaleria: [
      getImagePath('/imagens/projetos/projeto3-1.jpg'),
      getImagePath('/imagens/projetos/projeto3-2.jpg'),
      getImagePath('/imagens/projetos/projeto3-3.jpg'),
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
    imagemCapa: getImagePath('/imagens/projetos/projeto4.jpg'),
    imagensGaleria: [
      getImagePath('/imagens/projetos/projeto4-1.jpg'),
      getImagePath('/imagens/projetos/projeto4-2.jpg'),
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
    imagemCapa: getImagePath('/imagens/projetos/projeto5.jpg'),
    tecnologias: ['React', 'Firebase', 'Chart.js', 'Material UI'],
    linkGithub: 'https://github.com/usuario/projeto5',
    linkDemo: 'https://projeto5-demo.vercel.app',
    destaque: false,
    dataPublicacao: '2023-02-18',
  },
];