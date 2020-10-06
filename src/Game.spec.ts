import { Game } from './Game';

let g: Game;

const rollMany = (n: number, pins: number) => {
  for (let i = 0; i < n; i++) {
    g.roll(pins);
  }
};

const rollSpare = () => {
  g.roll(5);
  g.roll(5);
};

describe('Bowling game', () => {
  beforeEach(() => {
    g = new Game();
  });

  it('should score 0 for gutter game', () => {
    rollMany(20, 0);

    expect(g.score()).toBe(0);
  });

  it('should score 20 for all ones games', () => {
    rollMany(20, 1);

    expect(g.score()).toBe(20);
  });

  it('should score 16 with spare followed by a 3 ball', () => {
    rollSpare();

    g.roll(3);

    expect(g.score()).toBe(16);
  });

  it('should score 24 for a strike followed by a 3 and 4 balls', () => {
    g.roll(10);
    g.roll(3);
    g.roll(4);

    rollMany(16, 0);

    expect(g.score()).toBe(24);
  });
});
