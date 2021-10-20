import ui from "./ui";

const init = () => {
  ui.init();
  document.addEventListener("click", e => {
    // console.log(e.target)
  })
};

document.addEventListener("DOMContentLoaded", init);