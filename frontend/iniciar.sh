#!/bin/bash

# Definir cores para o terminal
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "Iniciando o Projeto de Portfolio..."
echo

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo -e "${RED}[X] Node.js não encontrado! Por favor, instale o Node.js antes de continuar.${NC}"
    exit 1
fi

# Verificar a versão do Node.js
NODE_VERSION=$(node -v)
echo -e "${GREEN}[i] Verificando versão do Node.js...${NC}"

# Verificar se a versão do Node.js é adequada (v18+ ou v20+)
if [[ ! $NODE_VERSION =~ ^v(18|20) ]]; then
    echo -e "${YELLOW}[!] Recomendamos usar Node.js v18 ou v20 para este projeto.${NC}"
    echo -e "${YELLOW}[!] Versão atual: $NODE_VERSION${NC}"
    echo -e "${YELLOW}[?] Deseja continuar mesmo assim? (S/N)${NC}"
    read -p "> " CONTINUE
    if [[ ! $CONTINUE =~ ^[Ss]$ ]]; then
        exit 1
    fi
fi

# Mensagem de boas-vindas
echo
echo "================================================================="
echo "=         Bem-vindo ao Ambiente de Desenvolvimento              ="
echo "================================================================="
echo

# Navegar para a pasta do projeto e iniciar o servidor de desenvolvimento
cd "$(dirname "$0")"
echo -e "${GREEN}[i] Instalando dependências...${NC}"
npm install
echo -e "${GREEN}[i] Iniciando o servidor de desenvolvimento...${NC}"
echo -e "${GREEN}[i] A aplicação estará disponível em http://localhost:3000${NC}"
echo -e "${GREEN}[i] Pressione Ctrl+C para encerrar o servidor quando quiser.${NC}"
echo
npm run dev 