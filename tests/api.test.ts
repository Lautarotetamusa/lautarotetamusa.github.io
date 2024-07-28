import {Game} from "../src/main";

test('Obtener palabra vía api', function () {
    const game = new Game();

    game.setRandomWord(() => {
        expect(typeof game.word).toBe("string");
        expect(game.word).toHaveProperty("length");
        expect(game.word.length).toBeGreaterThan(0);
    });
});
