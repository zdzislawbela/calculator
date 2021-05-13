import classes from "./display.css";

const createDisplay = () => {
  const display = document.createElement("div");
  display.setAttribute("class", "display");

  const displayRow = document.createElement("div");
  displayRow.setAttribute("class", "displayRow");
  displayRow.innerHTML = "0";

  display.appendChild(displayRow);

  document.querySelector(".calculator").appendChild(display);
};

export default () => {
  createDisplay();
};
