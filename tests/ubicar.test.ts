import {describe, expect, test} from '@jest/globals';
import {Game} from "../src/main";

const game = new Game("perro");

test('encuentra una coincidencia', function () {
    game.arriesgarLetra('r');

    expect(game.coincideces[0]).toBe(false);
    expect(game.coincideces[1]).toBe(false);
    expect(game.coincideces[2]).toBe(true);
    expect(game.coincideces[3]).toBe(true);
    expect(game.coincideces[4]).toBe(false);
});

test('encontro todas las coicidencias', function () {
    game.arriesgarLetra('r');
    game.arriesgarLetra('a');
    game.arriesgarLetra('e');
    game.arriesgarLetra('p');
    game.arriesgarLetra('u');
    game.arriesgarLetra('o');

    expect(game.win()).toBe(true);
});
