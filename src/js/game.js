import ui from "./ui";

class Game {
  constructor() {
    this.score = 0;
    this.timer = null;
    this.lastMouseIndex = null;
    this.miceSum = 9;
  }
  reset() {
    this.score = 0;
    this.lastMouseIndex = null;
  }
  init() {
    this.reset();
    this.setRandomMouse();
  }
  setRandomMouse() {
    let randomIndex;
    
    do {
      randomIndex = Math.floor(Math.random() * this.miceSum);
    } while (randomIndex === this.lastMouseIndex)

    this.lastMouseIndex = randomIndex;

    return ui.showMouse(randomIndex);
  }
  selectMouse() {

  }
}

export default new Game();