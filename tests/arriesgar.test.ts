import {Game} from "../src/main";

const game = new Game("perro");

test('Acierta la palabra', function () {
    expect(game.guessWord("perro")).toBe(true);
});

test('No acierta la palabra', function () {
    expect(game.guessWord("casa")).toBe(false);
});

/* Arriesgar la letra */

test('La palabra contiene la leta', function () {
    expect(game.guessLetter('e')).toBe(true);
    expect(game.alreadyGuessed('e')).toBe(true);
});

test('La palabra NO contiene la leta', function () {
    expect(game.guessLetter('a')).toBe(false);
    expect(game.alreadyGuessed('a')).toBe(true);
});

test('La letra ya fue arriesgada', function () {
    game.guessLetter('u');
    expect(game.alreadyGuessed('u')).toBe(true);
});

test('Si arriesgamos una letra que ya fue arriesgada no descontamos puntos', function () {
    const lifes = game.getLifes();
    game.guessLetter('i');
    game.guessLetter('i');
    expect(game.getLifes()).toBe(lifes - 1);
});

test('Si arriesgamos una letra que ya fue arriesgada no agregamos a guesses', function () {
    const guesses = game.getGuesses().length;
    game.guessLetter('n');
    game.guessLetter('n');
    expect(game.getGuesses().length).toBe(guesses + 1);
});
