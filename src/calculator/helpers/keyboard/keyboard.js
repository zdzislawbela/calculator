import classes from "./keyboard.css";

export const createKeyboard = () => {
  const keyboard = document.createElement("div");

  keyboard.setAttribute("class", "keyboard");
  document.querySelector(".calculator").appendChild(keyboard);

  const buttons = [
    "CE",
    "C",
    "del",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ".",
    "="
  ];

  buttons.forEach((button) => {
    const keyButton = document.createElement("div");
    keyButton.setAttribute("class", "button");
    keyButton.innerHTML = button;
    document.querySelector(".keyboard").appendChild(keyButton);
  });
};
