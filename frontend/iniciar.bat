@echo off
echo Iniciando o Projeto de Portfolio...
echo.

REM Verificar se o Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Erro: Node.js não encontrado. Por favor, instale o Node.js para continuar.
    echo Visite https://nodejs.org para baixar e instalar.
    pause
    exit /b 1
)

REM Verificar a versão do Node.js
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo Node.js %NODE_VERSION% detectado.
echo.

REM Verificar se as dependências estão instaladas
if not exist "node_modules" (
    echo Instalando dependências...
    call npm install
    if %ERRORLEVEL% neq 0 (
        echo Erro ao instalar dependências.
        pause
        exit /b 1
    )
    echo Dependências instaladas com sucesso.
) else (
    echo Dependências já instaladas.
)
echo.

REM Iniciar o servidor de desenvolvimento
echo Iniciando o servidor de desenvolvimento...
echo Acesse http://localhost:3000 no seu navegador.
echo Pressione Ctrl+C para encerrar o servidor.
echo.
call npm run dev

pause 