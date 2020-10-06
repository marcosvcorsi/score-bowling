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
      if (this.rolls[i] + this.rolls[i + 1] === 10) {
        score += 10 + this.rolls[i + 2];
        i += 2;
      } else {
        score += this.rolls[i] + this.rolls[i + 1];
        i += 2;
      }
    }

    return score;
  }
}
