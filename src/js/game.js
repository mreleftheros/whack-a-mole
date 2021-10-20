import ui from "./ui";

class Game {
  constructor() {
    this.score = 0;
    this.timer = null;
    this.lastMouseIndex = null;
    this.totalMice = 9;
  }
  reset() {
    this.score = 0;
    this.lastMouseIndex = null;
  }
  init() {
    this.reset();
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
  }
}

export default new Game();