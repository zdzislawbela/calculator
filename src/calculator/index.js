import classes from "./index.css";
import { createDisplay } from "./helpers/display/display.js";
import { createKeyboard } from "./helpers/keyboard/keyboard.js";

const createContainer = () => {
  const calculator = document.createElement("div");
  calculator.setAttribute("class", "calculator");
  document.getElementsByTagName("body")[0].appendChild(calculator);
};

export const createCalculator = () => {
  createContainer();
  createDisplay();
  createKeyboard();
};
