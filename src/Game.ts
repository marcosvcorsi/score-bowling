export class Game {
  private currentRoll: number = 0;

  private rolls: number[] = Array(21).fill(0);

  private isSpare(frameIndex: number) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }

  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }

  score(): number {
    let score = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isSpare(frameIndex)) {
        score += 10 + this.rolls[frameIndex + 2];
      } else {
        score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
      }

      frameIndex += 2;
    }

    return score;
  }
}
