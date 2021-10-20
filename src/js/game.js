import ui from "./ui";

class Game {
  constructor() {
    this.score = 0;
    this.timer = null;
  }
  init() {
    this.score = 0;
    console.log("init")
  }
}

export default new Game();