import { Game } from '../../src/main';

// Mock para la función getRandomWord
jest.mock('../../src/api', () => ({
  getRandomWord: (cb: (word: string, err: any) => void) => cb('testword', null)
}));

  test('Deberia resetear el juego', (done) => {
    const game = new Game('perro');
    game.guessLetter('x');
    game.reset(5, () => {
      expect(game.getLifes()).toBe(5);
      expect(game.word).toBe('testword');
      expect(game.getCoincidences()).toEqual(Array(8).fill(false)); // 'testword' tiene 8 letras
      done();
    });
  });