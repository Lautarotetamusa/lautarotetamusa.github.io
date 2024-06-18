import {describe, expect, test} from '@jest/globals';
import {Game} from "../src/main";

const vidasIniciales = 3;

test('pierde una vida si erra la palabra', function () {
    const game = new Game("perro", vidasIniciales);

    game.arriesgarPalabra("gato");

    expect(game.lifes).toBe(vidasIniciales-1);
});

test('pierde una vida si la palabra no contiene la letra', function () {
    const game = new Game("perro", vidasIniciales);

    game.arriesgarLetra('a');

    expect(game.lifes).toBe(vidasIniciales-1);
});

test('si acierta queda con las mismas vidas', function () {
    const game = new Game("perro", vidasIniciales);

    game.arriesgarPalabra("perro");

    expect(game.lifes).toBe(vidasIniciales);
});

test('si las vidas llega a 0, pierde', function () {
    const game = new Game("perro", vidasIniciales);

    game.arriesgarPalabra("casa");
    game.arriesgarPalabra("gato");
    game.arriesgarPalabra("zapato");

    expect(game.loss).toBe(true);
});
