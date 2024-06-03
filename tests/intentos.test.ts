import {describe, expect, test} from '@jest/globals';
import {Game} from "../src/main";

test('pierde una vida si erra', function () {
    const vidasIniciales = 3;
    const game = new Game("perro", vidasIniciales);
    game.arriesgarPalabra("gato");

    expect(game.vidas).toBe(vidasIniciales-1);
});

test('si acierta queda con las mismas vidas', function () {
    const vidasIniciales = 3;
    const game = new Game("perro", vidasIniciales);
    game.arriesgarPalabra("perro");

    expect(game.vidas).toBe(game.vidas);
});

test('si las vidas llega a 0, pierde', function () {
    const vidasIniciales = 3;
    const game = new Game("perro", vidasIniciales);
    game.arriesgarPalabra("casa");
    game.arriesgarPalabra("gato");
    game.arriesgarPalabra("zapato");

    expect(game.perdio).toBe(true);
});
