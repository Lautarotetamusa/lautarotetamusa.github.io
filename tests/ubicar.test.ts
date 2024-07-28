import {Game} from "../src/main";

const game = new Game("perro");

test('encuentra una coincidencia', function () {
    game.guessLetter('r');

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
    game.guessLetter('r');
    game.guessLetter('a');
    game.guessLetter('e');
    game.guessLetter('p');
    game.guessLetter('u');
    game.guessLetter('o');

    expect(game.win()).toBe(true);
    expect(game.loss()).toBe(false);
});
