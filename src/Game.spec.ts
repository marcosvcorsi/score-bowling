import { Game } from './Game';

let g: Game;

const rollMany = (n: number, pins: number) => {
  for (let i = 0; i < n; i++) {
    g.roll(pins);
  }
};

describe('Bowling game', () => {
  beforeEach(() => {
    g = new Game();
  });

  it('should score 0 for gutter game', () => {
    rollMany(20, 0);

    expect(g.score).toBe(0);
  });

  it('should score 20 for all ones games', () => {
    rollMany(20, 1);

    expect(g.score).toBe(20);
  });
});
