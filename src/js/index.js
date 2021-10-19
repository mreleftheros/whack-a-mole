import ui from "./ui";

const init = () => {
  ui.init();
  document.addEventListener("click", e => {
    console.log(e.target)
    if (e.target.classList.contains("show")) {
      console.log("ee")
    }
  })
};

document.addEventListener("DOMContentLoaded", init);