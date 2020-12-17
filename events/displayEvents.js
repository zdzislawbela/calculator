
const updateDisplay = (value) => {
/*     if (value.length > 15) {
        return updateConsole("I can't handle more sorry");
    } */
    const row = document.querySelectorAll('.displayRow');
    const lastRow = row[row.length - 1];
    lastRow.innerHTML = value;
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
