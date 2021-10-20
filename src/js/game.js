import ui from "./ui";

class Game {
  constructor() {
    this.score = 0;
    this.timer = null;
    this.lastMouseIndex = null;
    this.totalMice = 9;
    this.totalSeconds = 30;
    this.startTime;
    this.endTime;
  }
  reset() {
    this.score = 0;
    this.totalSeconds = 30;
    this.startTime = null;
    this.timer = null;
    this.lastMouseIndex = null;
  }
  init() {
    // this.reset();
    this.setTimer();
    this.setRandomMouseIndex();
  }
  setRandomMouseIndex() {
    let randomIndex;
    
    do {
      randomIndex = Math.floor(Math.random() * this.totalMice);
    } while (randomIndex === this.lastMouseIndex)

    this.lastMouseIndex = randomIndex;
    
    return ui.showMouse(randomIndex);
  }
  getNextMouse() {
    this.updateScore();
    return this.setRandomMouseIndex();
  }
  updateScore() {
    this.score++;
    return ui.updateAddons(null, this.score);
  }
  setTimer() {
    this.startTime = Date.now();

    this.timer = setInterval(() => {
      const now = Date.now();
      const diff = now - this.startTime;

      const time = Math.floor(diff / 1000);

      let timeDiff = this.totalSeconds - time;

      ui.updateAddons(timeDiff, null);

      if (time === this.totalSeconds) {
        clearInterval(this.timer);
        // return ui.renderEndScreen();
      }
    })
  }
}

export default new Game();