import classes from "./display.css";

export const createDisplay = () => {
  const display = document.createElement("div");
  display.setAttribute("class", "display");

  const title = document.createElement("div");
  title.setAttribute("class", "title");
  title.innerHTML = "calculator.js";
  display.appendChild(title);

  const displayRow = document.createElement("div");
  displayRow.setAttribute("class", "displayRow");
  displayRow.innerHTML = "0";
  display.appendChild(displayRow);

  document.querySelector(".calculator").appendChild(display);
};
