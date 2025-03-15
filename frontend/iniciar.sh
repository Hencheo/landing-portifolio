#!/bin/bash

echo "Iniciando o Projeto de Portfolio..."
echo

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "Erro: Node.js não encontrado. Por favor, instale o Node.js para continuar."
    echo "Visite https://nodejs.org para baixar e instalar."
    exit 1
fi

# Verificar a versão do Node.js
NODE_VERSION=$(node -v)
echo "Node.js $NODE_VERSION detectado."
echo

# Verificar se as dependências estão instaladas
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências..."
    npm install
    if [ $? -ne 0 ]; then
        echo "Erro ao instalar dependências."
        exit 1
    fi
    echo "Dependências instaladas com sucesso."
else
    echo "Dependências já instaladas."
fi
echo

# Iniciar o servidor de desenvolvimento
echo "Iniciando o servidor de desenvolvimento..."
echo "Acesse http://localhost:3000 no seu navegador."
echo "Pressione Ctrl+C para encerrar o servidor."
echo
npm run dev 