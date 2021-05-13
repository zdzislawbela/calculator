const updateDisplay = (
  savedDisplayValues,
  currentDisplayValue,
  equal = false
) => {
  const displayRow = document.querySelectorAll(".displayRow");
  const lastDisplayRow = displayRow[displayRow.length - 1];
  let displayValues = "";

  if (savedDisplayValues) {
    savedDisplayValues.forEach((savedValue) => {
      displayValues += ` ${savedValue} `;
    });
  }
  currentDisplayValue ? (displayValues += currentDisplayValue) : "";
  lastDisplayRow.innerHTML = displayValues;

  if (equal) {
    const newDisplayRow = document.createElement("div");
    newDisplayRow.setAttribute("class", "displayRow");
    newDisplayRow.innerHTML = "";
    document.querySelector(".display").appendChild(newDisplayRow);
  }
};
export { updateDisplay };
