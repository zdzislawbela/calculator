
const updateDisplay = (savedDisplayValues, currentDisplayValue) => {

    const displayRow = document.querySelectorAll('.displayRow');
    const lastDisplayRow = displayRow[displayRow.length - 1];
    let displayValues = ""

    if (savedDisplayValues) {
        savedDisplayValues.forEach((savedValue) => {
            displayValues += ` ${savedValue} `;
        });
    }
    currentDisplayValue ? displayValues += currentDisplayValue: "";
    lastDisplayRow.innerHTML = displayValues;

}
export { updateDisplay };
