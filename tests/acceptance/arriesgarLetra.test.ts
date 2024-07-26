import { Game } from '../../src/main';

  test('Deberia adivinar una letra', () => {
    const game = new Game('perro');
    const correct = game.guessLetter('p');
    expect(correct).toBe(true);
    expect(game.getCoincidences()).toEqual([true, false, false, false, false]);
  });

  test('Deberia disminuir vidas cuando arriesgue letras incorrectas', () => {
    const game = new Game('perro');
    const correct = game.guessLetter('z');
    expect(correct).toBe(false);
    expect(game.getLifes()).toBe(2);
  });