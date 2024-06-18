import {describe, expect, test} from '@jest/globals';
import {Game} from "../src/main";

const game = new Game("perro");

test('Acierta la palabra', function () {
    expect(game.arriesgarPalabra("perro")).toBe(true);
});

test('No acierta la palabra', function () {
    expect(game.arriesgarPalabra("casa")).toBe(false);
});

/* Arriesgar la letra */

test('La palabra contiene la leta', function () {
    expect(game.arriesgarLetra('e')).toBe(true);
});

test('La palabra NO contiene la leta', function () {
    expect(game.arriesgarLetra('a')).toBe(false);
});
