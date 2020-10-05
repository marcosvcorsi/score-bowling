import { Game } from './Game';

describe('Bowling game', () => {
  it('should score 0 for gutter game', () => {
    const g: Game = new Game();

    for (let i = 0; i < 20; i += 1) {
      g.roll(0);
    }

    expect(g.score).toBe(0);
  });

  it('should score 20 for all ones games', () => {
    const g: Game = new Game();

    for (let i = 0; i < 20; i += 1) {
      g.roll(1);
    }

    expect(g.score).toBe(20);
  });
});
