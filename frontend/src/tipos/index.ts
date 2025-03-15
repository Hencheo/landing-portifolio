/**
 * Tipos para o projeto de portfólio
 */

// Tipo para projetos
export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagemCapa: string;
  imagens: string[];
  videoDemo?: string;
  arquivoNotebook?: string; // Caminho para notebooks Jupyter
  tecnologias: string[];
  linkGithub: string;
  linkDemo: string;
  destaque: boolean;
  dataPublicacao: string;
}

// Tipo para habilidades
export interface Habilidade {
  id: number;
  nome: string;
  icone: string;
  nivel: number; // 1-5
  categoria: 'frontend' | 'backend' | 'design' | 'outros';
}

// Tipo para informações de contato
export interface ContatoInfo {
  email: string;
  telefone?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  whatsapp?: string;
  twitter?: string;
}

// Tipo para informações pessoais
export interface InformacoesPessoais {
  nome: string;
  titulo: string;
  resumo: string;
  foto?: string;
  fotoSobre?: string;
  contato: ContatoInfo;
}

// Tipo para tema
export type Tema = 'claro' | 'escuro'; 