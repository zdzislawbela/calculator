
const addKeyListiners = () => {
    const keys = document.querySelectorAll('.key');

    keys.forEach((key) => {
        key.addEventListener('mouseover', () => {
            key.classList = "mouseover"
        })
    })
    keys.forEach((key) => {
        key.addEventListener('mouseout', () => {
            key.classList = "key"
        })
    })
    keys.forEach((key) => {
        key.addEventListener('mousedown', () => {
            key.classList = "mousedown"
        })
    })
    keys.forEach((key) => {
        key.addEventListener('mouseup', () => {
            key.classList = "mouseover"
            countingValue(key.innerHTML)
        })
    })
}

const addMathKeyListiners = () => {
    const keys = document.querySelectorAll('.mathKey');
    console.log(keys)
    keys.forEach((key) => {
        key.addEventListener('mouseover', () => {
            key.classList = "mouseover"
        })
    })
    keys.forEach((key) => {
        key.addEventListener('mouseout', () => {
            key.classList = "key"
        })
    })
    keys.forEach((key) => {
        key.addEventListener('mousedown', () => {
            key.classList = "mousedown"
        })
    })
    keys.forEach((key) => {
        key.addEventListener('mouseup', () => {
            key.classList = "mouseover"
            handleMathKey(key.innerHTML)
        })
    })
}

const handleMathKey = (pressedKey) => {
    const newDisplayRow = document.createElement('div');
    newDisplayRow.setAttribute('class', 'displayRow');
    const newDisplaySign = document.createElement('div');
    newDisplaySign.setAttribute('class', 'displaySign');
    newDisplaySign.innerHTML = pressedKey;

    if ( pressedKey == '+' ) {
        document.querySelector('#display').appendChild(newDisplaySign);
        document.querySelector('.displaySign').innerHTML = "+";
        document.querySelector('#display').appendChild(newDisplayRow);
        
        return updeConsole('missing implementation of "+"');
    }
    if ( pressedKey == '-' ) {
        document.querySelector('.displaySign').innerHTML = "-"
        return updateConsole('missing implementation of "-"');
    }
    if ( pressedKey == '/' ) {
        document.querySelector('.displaySign').innerHTML = "/"
        return updateConsole('missing implementation of "/"');
    }
    if ( pressedKey == 'x' ) {
        document.querySelector('.displaySign').innerHTML = "x"
        return updateConsole('missing implementation of "x"');
    }
    if ( pressedKey == '=' ) {
        document.querySelector('.displaySign').innerHTML = ""
        return updateConsole('missing implementation of "="');
    }
}
const countingValue = (pressedKey) => {
    updateConsole('');
    console.log("----- Starting countingValue -----");
    console.log("----- User typed: " + pressedKey);

    const newValue = pressedKey;

    const row = document.querySelectorAll('.displayRow');
    const lastRow = row[row.length-1];
    

    const previousValue = lastRow.innerHTML;
    const previousValueArray = Array.from(lastRow.innerHTML);
    const lastCharPreviousValue = previousValueArray[previousValueArray.length - 1];

    console.log("");
    console.log("----- newValue: " + newValue);
    console.log("----- previousValue: " + previousValue);
    console.log("----- previousValueArray: " + previousValueArray);
    console.log("----- lastCharPreviousValue: " + lastCharPreviousValue);
    console.log("previousValueArray[0] " + previousValueArray[0]);


    if ( pressedKey == 'CE' ) {
        document.querySelector('.displaySign').innerHTML = ""
        return updateDisplay('0');
    }
    if ( pressedKey == 'C' ) {
        document.querySelector('.displaySign').innerHTML = ""
        return updateConsole('missing implementation of "C"');
    }
    if ( pressedKey == 'del' ) {
        document.querySelector('.displaySign').innerHTML = ""
        if ( previousValue == '0' | previousValue.length == 1 ) {
            return updateDisplay('0');
        } 
        return updateDisplay( previousValue.slice(0, previousValue.length-1) );
    }

    if ( pressedKey == "+/-" ) {
        if (previousValueArray[0] == '-') {
            return updateDisplay(previousValue.slice(1,previousValue.length));
        }
        if ( previousValueArray[0] == '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' ) {
            return updateDisplay('-' + previousValue);
        }
        return updateConsole("not implemented")  
    }
    if ( pressedKey == ',' ) {        
        if ( lastCharPreviousValue == ',' ) {
            return updateConsole("");
        }
        if ( previousValue.includes(",") ) {
            return updateConsole("");
        }
        return updateDisplay( previousValue + newValue );
        
    }
    if ( pressedKey == '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' ) {
        if ( previousValue == '0' ) {
            return updateDisplay(newValue); 
        } 
        return updateDisplay( previousValue + newValue );
    }
    if ( previousValue == '0' ) {
        return updateDisplay(newValue); 
    } 
}




const updateDisplay = (value) => {
    if (value.length > 15) {
        return updateConsole("I can't handle more sorry");
    } 
    const row = document.querySelectorAll('.displayRow');
    const lastRow = row[row.length-1];
    lastRow.innerHTML = value;
/*     console.log(" hej tu");
    console.log(lastRow); */
}
const updateConsole = (value) => {

    document.querySelector('#console').innerHTML = value;
}
const setKeyClassInterval = () => {
    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
        key.classList = "key"
    });
}
const loadApp = () => {
    addKeyListiners();
    addMathKeyListiners();
    setInterval(setKeyClassInterval, 3000);
}
loadApp();