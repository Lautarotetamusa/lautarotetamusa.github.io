import {Game} from '../../src/main';

  test('Deberia inicializar el juego con la palabra dada', () => {
    const game = new Game('perro');
    expect(game.word).toBe('perro');
    expect(game.getLifes()).toBe(3);
    expect(game.getCoincidences()).toEqual(Array(5).fill(false));
  });