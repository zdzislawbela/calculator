import { handleKeyboardButtons } from "./handlePressedButton.js";

export const addButtonListeners = () => {
  const allButtons = document.querySelectorAll(".button");

  allButtons.forEach((button) => {
    button.addEventListener("mousedown", () => {
      button.classList = "down";
    });
    button.addEventListener("mouseup", () => {
      button.classList = "button";
      handleKeyboardButtons(button.innerHTML);
    });
  });
};
