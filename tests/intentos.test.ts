import {Game} from "../src/main";

const initLifes = 3;
const game = new Game(initLifes);
game.setWord("perro");

test('pierde una vida si erra la palabra', function () {

    game.guessWord("gato");

    expect(game.getLifes()).toBe(initLifes-1);
});

test('pierde una vida si la palabra no contiene la letra', function () {
    game.reset(initLifes);
    game.guessLetter('a');

    expect(game.getLifes()).toBe(initLifes-1);
});

test('si acierta queda con las mismas vidas', function () {
    game.reset(initLifes);
    game.guessWord("perro");

    expect(game.getLifes()).toBe(initLifes);
});

test('si las vidas llega a 0, pierde', function () {
    game.reset(initLifes);
    game.guessWord("casa");
    game.guessWord("gato");
    game.guessWord("zapato");

    expect(game.loss()).toBe(true);
});
