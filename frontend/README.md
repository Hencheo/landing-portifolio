# Portfólio Interativo

Um site de portfólio altamente interativo e visualmente impressionante para apresentar projetos de forma profissional e impactante.

## 🚀 Características

- **Design Moderno e Responsivo**: Interface elegante que se adapta a qualquer dispositivo
- **Animações Fluidas**: Transições e efeitos visuais usando Framer Motion
- **Modo Escuro/Claro**: Alternância de tema para melhor experiência do usuário
- **Seções Interativas**: Apresentação de projetos, habilidades e informações de contato
- **Filtros de Projetos**: Busca e filtragem por tecnologias
- **Formulário de Contato**: Comunicação direta através do site

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para renderização otimizada
- **TypeScript**: Tipagem estática para código mais seguro
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida
- **Framer Motion**: Biblioteca para animações fluidas
- **Lucide React**: Ícones modernos e personalizáveis

## 📋 Pré-requisitos

- Node.js 18.0.0 ou superior
- npm ou yarn

## 🔧 Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-portfolio.git
cd seu-portfolio
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse `http://localhost:3000` no seu navegador.

## 🚀 Iniciando Rapidamente

Se você deseja apenas iniciar o projeto sem clonar o repositório, siga estas etapas:

```bash
# Navegue até a pasta do projeto
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 📦 Estrutura do Projeto

```
frontend/
├── public/             # Arquivos estáticos
│   └── imagens/        # Imagens do portfólio
├── src/
│   ├── app/            # Páginas da aplicação
│   ├── componentes/    # Componentes reutilizáveis
│   │   ├── animacoes/  # Componentes de animação
│   │   ├── layout/     # Componentes de layout
│   │   ├── projetos/   # Componentes de projetos
│   │   └── ui/         # Componentes de interface
│   ├── contextos/      # Contextos React (tema, etc.)
│   ├── dados/          # Dados do portfólio
│   ├── hooks/          # Hooks personalizados
│   ├── secoes/         # Seções da página principal
│   ├── tipos/          # Definições de tipos TypeScript
│   └── utils/          # Funções utilitárias
└── tailwind.config.ts  # Configuração do Tailwind CSS
```

## 🖼️ Personalização

Para personalizar o portfólio com seus próprios dados:

1. Edite os arquivos em `src/dados/` para incluir suas informações pessoais, projetos e habilidades
2. Substitua as imagens em `public/imagens/` pelas suas próprias
3. Ajuste as cores e estilos em `tailwind.config.ts` conforme necessário

## 🧪 Testes

Para executar os testes:

```bash
npm test
# ou
yarn test
```

## 🚀 Implantação

Este projeto pode ser facilmente implantado na Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fseu-usuario%2Fseu-portfolio)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Seu Nome - [GitHub](https://github.com/seu-usuario) - [LinkedIn](https://linkedin.com/in/seu-usuario)

---

⭐️ Feito com ❤️ usando Next.js e Tailwind CSS
