
const updateDisplay = (savedDisplayValues, currentDisplayValue) => {

    const displayRow = document.querySelectorAll('.displayRow');
    const lastDisplayRow = displayRow[displayRow.length - 1];
    let displayValues = ""

    if (savedDisplayValues) {
        savedDisplayValues.forEach((savedValue) => {
            displayValues += ` ${savedValue} `;
            console.log(`updateDisplay: ${savedValue}`);
        });
    }
    currentDisplayValue ? displayValues += currentDisplayValue: "";
    lastDisplayRow.innerHTML = displayValues;

}

/* const updateConsole = (value) => {
    document.querySelector('.console').innerHTML = value;
}

const setKeyClassInterval = () => {
    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
        key.classList = "key"
    });
} */

export {updateDisplay};
