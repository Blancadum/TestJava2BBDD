#!/bin/bash

################################################################################
# SCRIPT DE COMPILACIÓN - TestJava2BBDD
# Compila todos los tests automáticamente
################################################################################

RESET='\033[0m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'

echo -e "${BLUE}════════════════════════════════════════════════════${RESET}"
echo -e "${BLUE}  🔨 COMPILADOR AUTOMÁTICO - TestJava2BBDD${RESET}"
echo -e "${BLUE}════════════════════════════════════════════════════${RESET}"
echo ""

PROYECTO_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$PROYECTO_DIR"

TOTAL_DIRS=0
COMPILADOS=0
ERRORES=0

echo -e "${YELLOW}Buscando temas...${RESET}"
echo ""

# Compilar todos los temas
for TEMA_DIR in Temas/*/*; do
  if [ -d "$TEMA_DIR" ]; then
    TOTAL_DIRS=$((TOTAL_DIRS + 1))

    # Obtener nombre del tema
    NOMBRE=$(basename "$TEMA_DIR")
    CATEGORIA=$(basename $(dirname "$TEMA_DIR"))

    echo -n "Compilando $CATEGORIA/$NOMBRE ... "

    cd "$TEMA_DIR"

    # Compilar todos los .java en ese directorio
    if javac *.java 2>/dev/null; then
      echo -e "${GREEN}✅ OK${RESET}"
      COMPILADOS=$((COMPILADOS + 1))
    else
      echo -e "${RED}❌ ERROR${RESET}"
      ERRORES=$((ERRORES + 1))
      # javac *.java 2>&1 | head -3 | sed 's/^/   /'
    fi

    cd "$PROYECTO_DIR"
  fi
done

echo ""
echo -e "${BLUE}════════════════════════════════════════════════════${RESET}"
echo -e "${BLUE}  📊 RESULTADO${RESET}"
echo -e "${BLUE}════════════════════════════════════════════════════${RESET}"
echo ""
echo "Total de temas: $TOTAL_DIRS"
echo -e "Compilados: ${GREEN}$COMPILADOS${RESET}"
if [ $ERRORES -gt 0 ]; then
  echo -e "Errores: ${RED}$ERRORES${RESET}"
else
  echo -e "Errores: ${GREEN}0${RESET}"
fi

echo ""

if [ $ERRORES -eq 0 ]; then
  echo -e "${GREEN}✅ COMPILACIÓN EXITOSA${RESET}"
  echo ""
  echo "Ahora puedes ejecutar los tests:"
  echo "  cd Temas/BaseDatos/01-Conceptos-SQL/"
  echo "  java ConceptosSQL"
else
  echo -e "${RED}❌ ALGUNOS ERRORES DE COMPILACIÓN${RESET}"
fi

echo ""
