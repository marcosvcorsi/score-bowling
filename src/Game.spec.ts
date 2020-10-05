import { Game } from './Game';

describe('Bowling game', () => {
  it('should score 0 for gutter game', () => {
    const g: Game = new Game();

    for (let i = 0; i < 20; i += 1) {
      g.roll(0);
    }

    expect(g.score()).toBe(0);
  });
});