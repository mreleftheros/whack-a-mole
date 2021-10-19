import game from "./game";

class Ui {
  constructor() {
    this.startBtn = document.getElementById("startBtn");
    this.startScreen = document.getElementById("startScreen");
  }
  init() {
    // this.startBtn.addEventListener("click", () => this.startGame());
    
  }
  startGame() {
    this.startScreen.classList.remove("active");

    return game.init();
  }
}

export default new Ui();