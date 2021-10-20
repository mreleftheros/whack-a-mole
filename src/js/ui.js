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
        this.addons.classList.add("active");
        clearInterval(timer);

        setTimeout(() => {
          this.countdown.classList.remove("active");
          return game.init();
        }, 1000)
      }
    }, 1000)
  }
  showMouse(index) {
    const mouse = document.querySelector(`[data-index="${index}"]`);
    
    mouse.classList.add("visible");
  }
  selectMouse(e) {
    e.currentTarget.classList.remove('visible');

    return game.getNextMouse();
  }
}

export default new Ui();