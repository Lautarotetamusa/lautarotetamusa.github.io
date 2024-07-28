import { getRandomWord } from "../src/api";
import {Game} from "../src/main";

test('Setear una palabra random en el juego', function () {
    const game = new Game();

    game.setRandomWord(() => {
        expect(typeof game.word).toBe("string");
        expect(game.word).toHaveProperty("length");
        expect(game.word.length).toBeGreaterThan(0);
    });
});

test('Obtener palabra vía api', function () {
    getRandomWord((word, err) => {
        if (word === null){
            expect(err).not.toBeNull();
        }else{
            expect(word).not.toBeNull();
            expect(typeof word).toBe("string");
            expect(word).toHaveProperty("length");
            expect(word.length).toBeGreaterThan(0);
        }
    });
});
