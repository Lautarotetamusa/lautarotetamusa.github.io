[![unit test](https://github.com/Lautarotetamusa/lautarotetamusa.github.io/actions/workflows/unit-test.yaml/badge.svg)](https://github.com/Lautarotetamusa/lautarotetamusa.github.io/actions/workflows/unit-test.yaml)
[![acceptance test](https://github.com/Lautarotetamusa/lautarotetamusa.github.io/actions/workflows/acceptance-test.yaml/badge.svg)](https://github.com/Lautarotetamusa/lautarotetamusa.github.io/actions/workflows/acceptance-test.yaml)
[![codecov](https://codecov.io/github/Lautarotetamusa/lautarotetamusa.github.io/graph/badge.svg?token=I1GF4USBQY)](https://codecov.io/github/Lautarotetamusa/lautarotetamusa.github.io)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Lautarotetamusa_lautarotetamusa.github.io&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Lautarotetamusa_lautarotetamusa.github.io)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=Lautarotetamusa_lautarotetamusa.github.io&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=Lautarotetamusa_lautarotetamusa.github.io)

# Juego del ahorcado
Simple juego del ahorcado desarrollado en typescript para la materia de Metodologías Ágiles de UTN.

# [Jugar!](https://lautarotetamusa.github.io/front/)

## Características
- La palabra se obtiene aleatoriamente de un [api externa](https://random-word-api.herokuapp.com/word?lang=es).
- Se puede arriesgar una letra.
- Se muestran alertas para la victoria y la derrota
- Al terminar se genera una nueva palabra.
- Fácilmente customizable y extensible.

## Integrantes
* Lautaro Teta Musa - 49695
* Santiago Cancio - 42761

## Instalacion en local
1. Clonar el repositorio
```bash
git clone --depth 1 https://github.com/Lautarotetamusa/lautarotetamusa.github.io
```

2. Instalar dependencias
```bash
npm install
```

3. Buildear el juego
```bash
npm run build
```

4. Correr el juego localmente
```bash
npm run dev
```

5. El juego se ejecutará por default en `localhost:8080`

## Tests
### Unit Tests
`npm run test`

### Coverage
`npm run coverage`
