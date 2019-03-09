export class Player {
  constructor(name) {
    if (name) {
      this.name = name;

    }
    this.score = 0;
    this.hasGone = false;
  }

  getScore() {
    return this.score;
  }

  addScore(num) {
    if (typeof num == 'number') {
        this.score += num;
    }
  }

  setHasGone(bool) {
    this.hasGone = bool;
  }

  getHasGone() {
    return this.hasGone;
  }


}
