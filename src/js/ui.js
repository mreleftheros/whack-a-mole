import game from "./game";

class Ui {
  constructor() {
    this.startBtn = document.getElementById("startBtn");
    this.startScreen = document.getElementById("startScreen");
    this.countdown = document.getElementById("countdown");
    this.addons = document.getElementById("addons");
    this.mice = document.querySelectorAll(".main__game__hole__svg__mouse");
  }
  init() {
    this.startBtn.addEventListener("click", () => this.startGame());
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
    this.mice.forEach(mouse => {
      mouse.classList.remove("visible");
      mouse.addEventListener("click", e => this.selectMouse(e));
    })

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