import game from "./game";

class Ui {
  constructor() {
    this.startBtn = document.getElementById("startBtn");
    this.startScreen = document.getElementById("startScreen");
    this.countdown = document.getElementById("countdown");
    this.addons = document.getElementById("addons");
  }
  init() {
    // this.startBtn.addEventListener("click", () => this.startGame());
  }
  startGame() {
    this.startScreen.classList.remove("active");

    return this.startCountdown();
  }
  startCountdown() {
    const timerElement = this.countdown.firstElementChild;
    const audioElement = this.countdown.lastElementChild;
    let counter = 3;
    let timer;

    audioElement.play();
    this.countdown.classList.add("active");

    timer = setInterval(() => {
      if (counter) {
        timerElement.innerHTML = counter;
        counter--;
      } else {
        timerElement.innerHTML = "Go!";

        setTimeout(() => {
          this.countdown.classList.remove("active");
          this.addons.classList.add("active");
          game.init();
          return clearInterval(timer);
        }, 1000)
      }
    }, 1000)
  }
}

export default new Ui();