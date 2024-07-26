import {Game} from '../../src/main';

// Mock para la función getRandomWord
jest.mock('../../src/api', () => ({
  getRandomWord: (cb: (word: string, err: any) => void) => cb('testword', null)
}));

  test('Deberia dar una nueva palabra usando gerRandomWord', (done) => {
    const game = new Game();
    game.setNewWord(() => {
      expect(game.word).toBe('testword');
      done();
    });
  });