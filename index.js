



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
    console.log("----- Starting countingValue -----")
    console.log("----- User typed: " + pressedKey)

    const newValue = pressedKey;
    const previousValue = document.querySelector('#displayValue').innerHTML;
    const previousValueArray = Array.from(document.querySelector('#displayValue').innerHTML);
    const lastCharPreviousValue = previousValueArray[previousValueArray.length - 1];


    console.log("");
    console.log("----- newValue: " + newValue);
    console.log("----- previousValue: " + previousValue);
    console.log("----- previousValueArray: " + previousValueArray);
    console.log("----- lastCharPreviousValue: " + lastCharPreviousValue);
    console.log("");

    //OK handle CE
    if (pressedKey == 'CE') {
        return updateDisplay('0');
    }
    // handle C delete whole newValue, save previousValue in memory
    if (pressedKey == 'C') {
        return console.log('no idea');
    }
    //OK handle del
    if (pressedKey == 'del') {
        return updateDisplay(previousValue.slice(0, previousValue.length-1));
    }
    //handle +/-
    if ( pressedKey == "+/-") {
        if (previousValue == '0') {
            const minus = '-'
            return updateDisplay(minus);
        } else {
            return console.log("pressed minus inside ")
        }

    }

    //handle comma
    if ( pressedKey == ',') {        
        if ((lastCharPreviousValue) == ',') {
            return console.log("comma alreade at the end");
        }
        if (previousValue.includes(",")) {
            return console.log("comma alreade inside");
        }
        console.log("Comma Added")
        return updateDisplay( previousValue + newValue );
        
    }
    //handle numeric key
    if ( pressedKey == '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') {
        if ( previousValue == '0' ) {
            console.log("hej1");
            return updateDisplay(newValue); 
        } 
        console.log("hej3");
        return updateDisplay( previousValue + newValue );
    }

        
        



    //handle zero
    if ( previousValue == '0' ) {
        return updateDisplay(newValue); 
    } 
}


const updateDisplay = (value) => {
    console.log("----- Starting updateDisplay -----")
    document.querySelector('#displayValue').innerHTML = value;
}


const loadApp = () => {
    addKeyListiners();
}
loadApp();