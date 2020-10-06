
function handleMathKey(pressedKey) {

    const addNewRow = (sign) => {
        const newDisplayRow = document.createElement('div');
        newDisplayRow.setAttribute('class', 'displayRow');
        const newDisplaySign = document.createElement('div');
        newDisplaySign.setAttribute('class', 'displaySign');
        newDisplaySign.innerHTML = sign;
        document.querySelector('#display').appendChild(newDisplaySign);

        const row = document.querySelectorAll('.displaySign');
        const lastSignRow = row[row.length - 1];
        lastSignRow.innerHTML = sign;
        document.querySelector('#display').appendChild(newDisplayRow);
    }


    if (pressedKey == '+') {
        addNewRow(pressedKey);
        return updateConsole('missing implementation of "+"');
    }
    if (pressedKey == '-') {
        addNewRow(pressedKey);
        return updateConsole('missing implementation of "-"');
    }
    if (pressedKey == '/') {
        addNewRow(pressedKey);
        return updateConsole('missing implementation of "/"');
    }
    if (pressedKey == 'x') {
        addNewRow(pressedKey);
        return updateConsole('missing implementation of "x"');
    }
    if (pressedKey == '=') {
        addNewRow(pressedKey);
        const displayEntries = document.getElementById('display').querySelectorAll('div');
        let countingArray = [];
        displayEntries.forEach((entry) => {

            countingArray.push(entry.textContent);

        })
        countingArray.pop();
        let numberOfEqual = 0;
        countingArray.forEach((element) => {
            if (element === "=") {
                numberOfEqual++
            }
            return numberOfEqual;
        })

        if (numberOfEqual > 1) {
            const lastIndex = countingArray.lastIndexOf('=');
            const tempCountingArray = countingArray.slice(0, lastIndex);
            const lastIndex2 = tempCountingArray.lastIndexOf('=');
            countingArray = countingArray.slice(lastIndex2 + 1, lastIndex);
        }

        let sum = 0;
        let sign = '';
        countingArray.forEach((element) => {
            if (isNaN(element)) {
                sign = element;
            } else {
                sum = parseFloat(sum) + parseFloat(element);
            }
        })

        return updateDisplay(sum);
    }
}
function countingValue(pressedKey) {
    updateConsole('');

    const rows = document.querySelectorAll('.displayRow');
    const lastRow = rows[rows.length - 1];
    const previousValue = lastRow.innerHTML;
    const previousValueArray = Array.from(lastRow.innerHTML);
    const lastCharPreviousValue = previousValueArray[previousValueArray.length - 1];


    if (pressedKey == 'CE') {
        return updateDisplay('0');
    }
    if (pressedKey == 'C') {
        return updateConsole('missing implementation of "C"');
    }
    if (pressedKey == 'del') {
        if (previousValue == '0' | previousValue.length == 1) {
            return updateDisplay('0');
        }
        return updateDisplay(previousValue.slice(0, previousValue.length - 1));
    }

    if (pressedKey == "+/-") {
        if (previousValueArray[0] == '-') {
            return updateDisplay(previousValue.slice(1, previousValue.length));
        }
        // array includes()
        if (previousValueArray[0] == '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') {
            return updateDisplay('-' + previousValue);
        }
        return updateConsole("not implemented")
    }
    if (pressedKey == '.') {
        if (lastCharPreviousValue == '.') {
            return updateConsole("");
        }
        if (previousValue.includes(".")) {
            return updateConsole("");
        }
        if (lastCharPreviousValue == "") {
            return updateDisplay("0" + pressedKey)
        }
        return updateDisplay(previousValue + pressedKey);

    }
    if (pressedKey == '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') {
        if (previousValue == '0') {
            return updateDisplay(pressedKey);
        }
        return updateDisplay(previousValue + pressedKey);
    }
    if (previousValue == '0') {
        return updateDisplay(pressedKey);
    }
}


const updateDisplay = (value) => {
    if (value.length > 15) {
        return updateConsole("I can't handle more sorry");
    }
    const row = document.querySelectorAll('.displayRow');
    const lastRow = row[row.length - 1];
    lastRow.innerHTML = value;
}
const updateConsole = (value) => {

    document.querySelector('#console').innerHTML = value;
}
function setKeyClassInterval() {
    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
        key.classList = "key"
    });
}

export {countingValue, handleMathKey, setKeyClassInterval};
