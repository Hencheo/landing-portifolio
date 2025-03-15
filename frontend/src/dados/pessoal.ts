import { InformacoesPessoais } from '@/tipos';
import { getBaseUrl } from '@/utils/urlUtils';

/**
 * Função que retorna os dados pessoais com o basePath correto
 */
export const getInformacoesPessoais = (): InformacoesPessoais => ({
  nome: 'Hencheo',
  titulo: 'Desenvolvedor Full Stack',
  resumo: 'Desenvolvedor com capacidade técnica para identificar e resolver problemas complexos. Especializado em Python, Django REST Framework, React Native com Expo e Next.js. Focado em criar soluções eficientes e escaláveis que transformam ideias em aplicações funcionais com experiências excepcionais para o usuário.',
  foto: getBaseUrl('/imagens/perfil/perfil.jpg'),
  fotoSobre: getBaseUrl('/imagens/perfil/sobre.png'),
  contato: {
    email: 'hencheo96@gmail.com',
    telefone: '+55 17 99271-7889',
    linkedin: 'www.linkedin.com/in/hencheo',
    github: 'https://github.com/Hencheo',
    whatsapp: 'https://wa.me/5517992717889',
    twitter: 'https://twitter.com/hencheo_dev',
  },
});

/**
 * Versão padrão dos dados pessoais
 * Será atualizada pelo componente BasePath
 */
export const informacoesPessoais: InformacoesPessoais = getInformacoesPessoais(); 