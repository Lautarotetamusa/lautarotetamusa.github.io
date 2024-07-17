import {Game} from "../src/main";

const game = new Game("perro");

test('encuentra una coincidencia', function () {
    game.arriesgarLetra('r');

    const coincideces = game.getCoincidences();
    expect(coincideces[0]).toBe(false);
    expect(coincideces[1]).toBe(false);
    expect(coincideces[2]).toBe(true);
    expect(coincideces[3]).toBe(true);
    expect(coincideces[4]).toBe(false);

    expect(game.win()).toBe(false);
    expect(game.loss()).toBe(false);
});

test('encontro todas las coicidencias', function () {
    game.arriesgarLetra('r');
    game.arriesgarLetra('a');
    game.arriesgarLetra('e');
    game.arriesgarLetra('p');
    game.arriesgarLetra('u');
    game.arriesgarLetra('o');

    expect(game.win()).toBe(true);
    expect(game.loss()).toBe(false);
});
