import {Game} from "../src/main";

const initLifes = 3;

test('pierde una vida si erra la palabra', function () {
    const game = new Game("perro", initLifes);

    game.arriesgarPalabra("gato");

    expect(game.getLifes()).toBe(initLifes-1);
});

test('pierde una vida si la palabra no contiene la letra', function () {
    const game = new Game("perro", initLifes);

    game.arriesgarLetra('a');

    expect(game.getLifes()).toBe(initLifes-1);
});

test('si acierta queda con las mismas vidas', function () {
    const game = new Game("perro", initLifes);

    game.arriesgarPalabra("perro");

    expect(game.getLifes()).toBe(initLifes);
});

test('si las vidas llega a 0, pierde', function () {
    const game = new Game("perro", initLifes);

    game.arriesgarPalabra("casa");
    game.arriesgarPalabra("gato");
    game.arriesgarPalabra("zapato");

    expect(game.loss()).toBe(true);
});
