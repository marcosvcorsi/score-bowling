export class Game {
  private currentRoll: number = 0;

  private rolls: number[] = Array(21).fill(0);

  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }

  score(): number {
    let score = 0;
    let i = 0;

    for (let frame = 0; frame < 10; frame++) {
      score += this.rolls[i] + this.rolls[i + 1];
      i += 2;
    }

    return score;
  }
}
