@echo off
SETLOCAL

:: Definir cores para o terminal
color 0A

:: Verificar se o Node.js está instalado
WHERE node >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo [X] Node.js nao encontrado! Por favor, instale o Node.js antes de continuar.
    pause
    exit /b 1
)

:: Obter a versão do Node.js
FOR /F "tokens=1,2 delims=v." %%a IN ('node --version') DO (
    set NODE_MAJOR=%%a
)

:: Verificar se a versão do Node.js é adequada
echo [i] Verificando versao do Node.js...
node -e "process.exit(process.version.startsWith('v20') || process.version.startsWith('v18') ? 0 : 1)" >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo [!] Recomendamos usar Node.js v18 ou v20 para este projeto.
    echo [!] Versao atual: %NODE_MAJOR%
    echo [?] Deseja continuar mesmo assim? (S/N)
    SET /P CONTINUE="> "
    IF /I NOT "%CONTINUE%"=="S" exit /b 1
)

:: Mensagem de boas-vindas
echo.
echo =================================================================
echo =         Bem-vindo ao Ambiente de Desenvolvimento              =
echo =================================================================
echo.

:: Navegar para a pasta do projeto e iniciar o servidor de desenvolvimento
cd /d "%~dp0"
echo [i] Instalando dependencias...
call npm install
echo [i] Iniciando o servidor de desenvolvimento...
echo [i] A aplicacao estara disponivel em http://localhost:3000
echo [i] Pressione Ctrl+C para encerrar o servidor quando quiser.
echo.
call npm run dev

ENDLOCAL 