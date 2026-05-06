#!/bin/bash

################################################################################
# SCRIPT EJECUTABLE - TestJava2BBDD MENÚ PRINCIPAL
# Compila y ejecuta el programa principal
################################################################################

RESET='\033[0m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'

echo -e "${BLUE}════════════════════════════════════════════════════${RESET}"
echo -e "${BLUE}  🎓 TestJava2BBDD - COMPILADOR Y EJECUTADOR${RESET}"
echo -e "${BLUE}════════════════════════════════════════════════════${RESET}"
echo ""

PROYECTO_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$PROYECTO_DIR/Temas"

echo -e "${YELLOW}📦 Compilando todos los archivos...${RESET}"
echo ""

# Compilar solo los archivos Java en Temas (no subcarpetas)
if find . -maxdepth 1 -name "*.java" -type f | xargs javac 2>/dev/null; then
  echo -e "${GREEN}✅ Compilación exitosa${RESET}"
else
  echo -e "${RED}❌ Error en compilación${RESET}"
  exit 1
fi

echo ""
echo -e "${BLUE}════════════════════════════════════════════════════${RESET}"
echo -e "${GREEN}✅ LISTO PARA EJECUTAR${RESET}"
echo -e "${BLUE}════════════════════════════════════════════════════${RESET}"
echo ""
echo -e "${YELLOW}🚀 Iniciando menú principal...${RESET}"
echo ""

# Ejecutar el menú principal
java MenuPrincipal
