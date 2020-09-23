



const addKeyListiners = () => {
    
    const keys = document.querySelectorAll('.key');
/*     console.log(keys) */
    keys.forEach((key) => {
        key.addEventListener('mouseover', () => {
/*             console.log(event.target) */
            event.target.classList = "mouseover"
        })
    })
    keys.forEach((key) => {
        key.addEventListener('mouseout', () => {
            event.target.classList = "key"
        })
    })
    keys.forEach((key) => {
        key.addEventListener('mousedown', () => {
            event.target.classList = "mousedown"
        })
    })
    keys.forEach((key) => {
        key.addEventListener('mouseup', () => {
            event.target.classList = "mouseover"
            countingValue(event.target.innerHTML)
        })
    })

}

const countingValue = (pressedKey) => {
    updateConsole('');
    console.log("----- Starting countingValue -----");
    console.log("----- User typed: " + pressedKey);

    const newValue = pressedKey;
    const previousValue = document.querySelector('#displayValue').innerHTML;
    const previousValueArray = Array.from(document.querySelector('#displayValue').innerHTML);
    const lastCharPreviousValue = previousValueArray[previousValueArray.length - 1];


    console.log("");
    console.log("----- newValue: " + newValue);
    console.log("----- previousValue: " + previousValue);
    console.log("----- previousValueArray: " + previousValueArray);
    console.log("----- lastCharPreviousValue: " + lastCharPreviousValue);
    console.log("previousValueArray[0] " + previousValueArray[0]);

    //OK handle CE
    if (pressedKey == 'CE') {
        return updateDisplay('0');
    }
    // handle C delete whole newValue, save previousValue in memory
    if (pressedKey == 'C') {
        return updateConsole('missing implementation of "C"');
    }
    //OK handle del
    if (pressedKey == 'del') {
        if ( previousValue == '0' | previousValue.length == 1) {
            return updateDisplay('0');
        } 
        return updateDisplay(previousValue.slice(0, previousValue.length-1));
    }
    if (pressedKey == '+') {
        return updateConsole('missing implementation of "+"');
    }
    if (pressedKey == '-') {
        return updateConsole('missing implementation of "-"');
    }
    if (pressedKey == '/') {
        return updateConsole('missing implementation of "/"');
    }
    if (pressedKey == 'x') {
        return updateConsole('missing implementation of "x"');
    }
    if (pressedKey == '=') {
        return updateConsole('missing implementation of "="');
    }
    //handle +/-
    if ( pressedKey == "+/-") {
/*         if (previousValue == '0') {
            return updateDisplay('-0');
        }  
        if (previousValue == '-0') {
            return updateDisplay('0');
        } */
        if (previousValueArray[0] == '-') {
            return updateDisplay(previousValue.slice(1,previousValue.length));
        }
        if (previousValueArray[0] == '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9'){
            return updateDisplay('-' + previousValue);
        }
        return updateConsole("not implemented")  
    }

    //handle comma
    if ( pressedKey == ',') {        
        if ((lastCharPreviousValue) == ',') {
            return updateConsole("comma alreade at the end");
        }
        if (previousValue.includes(",")) {
            return updateConsole("comma already inside");
        }
        console.log("Comma Added")
        return updateDisplay( previousValue + newValue );
        
    }
    //handle numeric key
    if ( pressedKey == '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') {
        if ( previousValue == '0' ) {
            return updateDisplay(newValue); 
        } 
        return updateDisplay( previousValue + newValue );
    }

        
        



    //handle zero
    if ( previousValue == '0' ) {
        return updateDisplay(newValue); 
    } 
}


const updateDisplay = (value) => {
    document.querySelector('#displayValue').innerHTML = value;
}
const updateConsole = (value) => {
    document.querySelector('#console').innerHTML = value;
}


const loadApp = () => {
    addKeyListiners();
}
loadApp();