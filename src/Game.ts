export class Game {
  private currentRoll: number = 0;

  private rolls: number[] = Array(21).fill(0);

  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }

  score(): number {
    const score = this.rolls.reduce((acc, item) => acc + item, 0);

    return score;
  }
}
