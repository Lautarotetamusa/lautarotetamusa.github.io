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
    expect(game.alreadyGuessed('e')).toBe(true);
});

test('La palabra NO contiene la leta', function () {
    expect(game.arriesgarLetra('a')).toBe(false);
    expect(game.alreadyGuessed('a')).toBe(true);
});

test('La letra ya fue arriesgada', function () {
    game.arriesgarLetra('u');
    expect(game.alreadyGuessed('u')).toBe(true);
});
