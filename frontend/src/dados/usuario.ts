import { Habilidade, Projeto } from "@/tipos";

export const USUARIO = {
  nome: "Hencheo",
  titulo: "Desenvolvedor Full Stack",
  email: "contato@hencheo.dev",
  telefone: "+55 11 98765-4321",
  localizacao: "Rio de Janeiro, Brasil",
  sobre: `
    Sempre tive um olhar voltado para a solução de problemas e, por isso, busquei me capacitar tecnicamente para criar soluções eficientes e escaláveis. Minha formação em Análise e Desenvolvimento de Sistemas me deu uma base sólida, mas foi na prática que realmente desenvolvi minhas habilidades.
    
    Comecei aprendendo Python e logo me aprofundei em Django e Django REST Framework para criar APIs robustas e seguras. À medida que os desafios foram surgindo, ampliei meu conhecimento para JavaScript, explorando tecnologias como React Native com Expo, Next.js e Node.js, além de trabalhar com bancos de dados como PostgreSQL e Firebase Firestore.
    
    Minha abordagem sempre foi aprender o que for necessário para entregar a melhor solução possível, garantindo que cada tecnologia utilizada agregue valor ao projeto e ao usuário final.
  `,
  redesSociais: {
    github: "https://github.com/hencheo",
    linkedin: "https://linkedin.com/in/hencheo",
    instagram: "https://instagram.com/hencheo.dev",
  },
};

export const PROJETOS: Projeto[] = [
  {
    id: 1,
    titulo: "ViCoin - Aplicativo de Gestão Financeira",
    descricao: "Solução completa para gestão financeira pessoal que resolve o problema da falta de controle sobre gastos diários.",
    imagemCapa: "/imagens/projetos/viccoin/viccoin-1.PNG",
    tecnologias: ["Django", "Django REST Framework", "React Native", "Expo", "Firebase Firestore", "Firebase Authentication"],
    linkGithub: "https://github.com/hencheo/vicoin",
    linkDemo: "https://vicoin-demo.vercel.app",
    destaque: true,
    dataPublicacao: "2023-10-15"
  },
  {
    id: 2,
    titulo: "Sistema de Cálculo de Médias Acadêmicas",
    descricao: "Desenvolvido para resolver a dificuldade dos estudantes em calcular suas médias corretamente.",
    imagemCapa: "/imagens/projetos/calculo-nota/calculo-nota-1.png",
    tecnologias: ["PostgreSQL", "SQL", "Next.js", "Node.js", "Tailwind CSS"],
    linkGithub: "https://github.com/hencheo/calculo-notas",
    linkDemo: "https://calculo-notas-demo.vercel.app",
    destaque: true,
    dataPublicacao: "2023-08-20"
  },
  {
    id: 3,
    titulo: "Análise de Preços de Aluguéis no Rio de Janeiro",
    descricao: "Projeto de ciência de dados que soluciona a falta de transparência no mercado imobiliário do Rio de Janeiro.",
    imagemCapa: "/imagens/projetos/analise-aluguel/analise-alugueis-1.png",
    tecnologias: ["Python", "Pandas", "Matplotlib", "Data Science", "Análise de Dados"],
    linkGithub: "https://github.com/hencheo/analise-alugueis-rio",
    linkDemo: "https://colab.research.google.com/github/hencheo/analise-alugueis-rio",
    destaque: true,
    dataPublicacao: "2023-06-10"
  }
];

export const HABILIDADES: Habilidade[] = [
  {
    id: 1,
    nome: "React Native",
    nivel: 85,
    icone: "react",
    categoria: "frontend"
  },
  {
    id: 2,
    nome: "Next.js",
    nivel: 80,
    icone: "nextjs",
    categoria: "frontend"
  },
  {
    id: 3,
    nome: "JavaScript",
    nivel: 80,
    icone: "javascript",
    categoria: "frontend"
  },
  {
    id: 4,
    nome: "TypeScript",
    nivel: 70,
    icone: "typescript",
    categoria: "frontend"
  },
  {
    id: 5,
    nome: "Python",
    nivel: 90,
    icone: "python",
    categoria: "backend"
  },
  {
    id: 6,
    nome: "Django",
    nivel: 90,
    icone: "django",
    categoria: "backend"
  },
  {
    id: 7,
    nome: "Django REST Framework",
    nivel: 85,
    icone: "django",
    categoria: "backend"
  },
  {
    id: 8,
    nome: "PostgreSQL",
    nivel: 80,
    icone: "postgresql",
    categoria: "backend"
  },
  {
    id: 9,
    nome: "Firebase Firestore",
    nivel: 75,
    icone: "firebase",
    categoria: "backend"
  },
  {
    id: 10,
    nome: "Node.js",
    nivel: 70,
    icone: "nodejs",
    categoria: "backend"
  },
  {
    id: 11,
    nome: "Pandas",
    nivel: 80,
    icone: "pandas",
    categoria: "outros"
  },
  {
    id: 12,
    nome: "Matplotlib",
    nivel: 75,
    icone: "matplotlib",
    categoria: "outros"
  },
  {
    id: 13,
    nome: "Análise de Dados",
    nivel: 80,
    icone: "data",
    categoria: "outros"
  },
  {
    id: 14,
    nome: "Expo",
    nivel: 80,
    icone: "expo",
    categoria: "frontend"
  },
  {
    id: 15,
    nome: "Git",
    nivel: 85,
    icone: "git",
    categoria: "outros"
  }
];

export const APRENDENDO: string[] = [
  "Django REST Framework Avançado",
  "React Native com Autenticação Biométrica",
  "Ciência de Dados com Python",
  "Otimização de Consultas SQL",
  "Integrações com APIs de Terceiros"
]; 