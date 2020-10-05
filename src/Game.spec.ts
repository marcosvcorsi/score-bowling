import { Game } from './Game';

let g: Game;

describe('Bowling game', () => {
  beforeEach(() => {
    g = new Game();
  });

  it('should score 0 for gutter game', () => {
    for (let i = 0; i < 20; i += 1) {
      g.roll(0);
    }

    expect(g.score).toBe(0);
  });

  it('should score 20 for all ones games', () => {
    for (let i = 0; i < 20; i += 1) {
      g.roll(1);
    }

    expect(g.score).toBe(20);
  });
});
