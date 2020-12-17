
const pressedButtons = [];
const numbers = [];
const operators = [];

const storeNumber = () => {
    console.log("Numbers: " + numbers);
    const lastRow = document.querySelectorAll('.displayRow');
    const lastRowValue = lastRow[lastRow.length - 1].innerHTML;
    console.log("lastRowValue:" + lastRowValue);

    //const lastRowVaule = "3.33+1.223";
    /*     const lastIndexPlus = lastRowVaule.lastIndexOf('+');
    const lastRowNumberAfterPlus = lastRowVaule.slice(lastIndexPlus+1);
    console.log(lastRowNumberAfterPlus);

    const tempCountingArray = countingArray.slice(0, lastIndex);
    const lastIndex2 = tempCountingArray.lastIndexOf('=');
    countingArray = countingArray.slice(lastIndex2 + 1, lastIndex); */

    return numbers.push(lastRowValue);
}

const displayNumber = (number) => {
    console.log("number: " + number)
    const lastRow = document.querySelectorAll('.displayRow');
    const lastRowValue = lastRow[lastRow.length - 1].innerHTML;
    updateDisplay(lastRowValue + number);
    return numbers.push(number);
}

//////////////////////////////////////////////
function calculateOnEqualSign(pressedKey) {
    // if no countingSign added do nothing
/*     const addRow = (sign) => {
        const newDisplayRow = document.createElement('div');
        newDisplayRow.setAttribute('class', 'displayRow');
        const newDisplaySign = document.createElement('div');
        newDisplaySign.setAttribute('class', 'displaySign');
        newDisplaySign.innerHTML = sign;
        document.querySelector('.display').appendChild(newDisplaySign);

        const row = document.querySelectorAll('.displaySign');
        const lastSignRow = row[row.length - 1];
        lastSignRow.innerHTML = sign;
        document.querySelector('.display').appendChild(newDisplayRow);
    } */
    
    const displayEntries = document.querySelector('.display').querySelectorAll('div');
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
}

function handleMathKey(pressedKey) {
    const rows = document.querySelectorAll('.displayRow');
    const lastRow = rows[rows.length - 1];
    const previousValue = lastRow.innerHTML;

    if (pressedKey == '+') {
        updateDisplay(previousValue + pressedKey);
        return updateConsole('missing implementation of "+"');
    }
    if (pressedKey == '-') {
        updateDisplay(previousValue + pressedKey);
        return updateConsole('missing implementation of "-"');
    }
    if (pressedKey == '/') {
        updateDisplay(previousValue + pressedKey);
        return updateConsole('missing implementation of "/"');
    }
    if (pressedKey == 'x') {
        updateDisplay(previousValue + pressedKey);
        return updateConsole('missing implementation of "x"');
    }
    if (pressedKey == '=') {
        updateDisplay(previousValue + pressedKey);
        calculateOnEqualSign(pressedKey);

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

export {};
