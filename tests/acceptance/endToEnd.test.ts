import { Game } from '../../src/main';

// Mock para la función getRandomWord
jest.mock('../../src/api', () => ({
  getRandomWord: (cb: (word: string, err: any) => void) => cb('testword', null)
}));

  test('Deberia manejar la jugabilidad end-to-end correctamente', (done) => {
    const game = new Game('perro', 5);

    // Juego inicial
    expect(game.guessLetter('p')).toBe(true);
    expect(game.guessLetter('e')).toBe(true);
    expect(game.guessLetter('r')).toBe(true);
    expect(game.guessLetter('r')).toBe(true);
    expect(game.guessLetter('o')).toBe(true);

    // Verificar estado del juego
    expect(game.win()).toBe(true);
    expect(game.loss()).toBe(false);
    expect(game.getLifes()).toBe(5);
    expect(game.getCoincidences()).toEqual([true, true, true, true, true]);

    // Reiniciar el juego y verificar que el estado se restablece correctamente
    game.reset(3, () => {
      expect(game.getLifes()).toBe(3);
      expect(game.getGuesses()).toHaveLength(0);
      expect(game.getCoincidences()).toContain(false);
      expect(game.getCoincidences()).not.toContain(true);
      expect(game.word).toBe('testword');
      done();
    });
  });