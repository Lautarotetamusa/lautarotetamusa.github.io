import {Game} from "../src/main";

const game = new Game(() => {}, "perro");

test('Resetear el juego', function () {
    game.guessLetter("o");
    game.guessWord("ashe");
    game.reset(3, () => {
        expect(game.getGuesses()).toHaveLength(0);
        expect(game.getCoincidences()).toContain(false);
        expect(game.getCoincidences()).not.toContain(true);
        expect(game.getLifes()).toBe(3);
        expect(game.word).not.toBe("perro");
    });
});
