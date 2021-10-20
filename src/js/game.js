import ui from "./ui";

class Game {
  constructor() {
    this.score = 0;
    this.timer;
    this.lastMouseIndex = null;
    this.totalMice = 9;
    this.time = 30;
  }
  reset() {
    this.score = 0;
    this.time = 0;
    this.timer = null;
    this.lastMouseIndex = null;
  }
  init() {
    this.reset();
    this.startTimer();
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
  startTimer() {
    this.timer = setInterval(() => {
      this.time--;
      ui.updateAddons(this.time, null);

      if (this.time === 0) {
        clearInterval(this.timer);
        return ui.renderEndScreen();
      }
    })
  }
}

export default new Game();