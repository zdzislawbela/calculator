import {updateDisplay} from './displayEvents.js'

const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const numbersModifiers = ['+/-','.'];
const deletationSigns = ['CE','C','del'];
const operators = ['/','x','-','+',];


let currentDisplayValue = "";
let savedDisplayValues = [];

const catchButtonInnerHTML = (innerHTML) => {

    if (numbers.includes(innerHTML)) {
        userPressedNumber(innerHTML);
    }

    if (numbersModifiers.includes(innerHTML)) {
        userPressedNumbersModifier(innerHTML);
    }

    if (deletationSigns.includes(innerHTML)) {
        userPressedDeletetionSigns(innerHTML);
    }

    if (operators.includes(innerHTML)) {
        userPressedOperator(innerHTML);
    }

    if (innerHTML === "=") {
        userPressedEqualSign();
    }
}

const userPressedNumber = (number) => {
    currentDisplayValue += number;
    updateDisplay(currentDisplayValue);
}

const userPressedNumbersModifier = (modifier) => {
    if (modifier === '+/-') {
        if (currentDisplayValue.slice(0,1) === '-') {
            currentDisplayValue = currentDisplayValue.slice(1,currentDisplayValue.length)
        } else {
            currentDisplayValue = `-${currentDisplayValue}`;
        }  
    }
    if (modifier == '.') {
        if(!currentDisplayValue.includes('.')) {
            currentDisplayValue = `${currentDisplayValue}.`
        }
    }
    updateDisplay(currentDisplayValue);
}

const userPressedOperator = (operator) => {
    savedDisplayValues.push(currentDisplayValue);
    updateDisplay(`${currentDisplayValue}${operator}`)
    currentDisplayValue = '';

    //save number
    //add sign to display
    //choose action
    if (operator == '/') {
        console.log(`userPressedOperator DIVISION: ${operator}`)
    }
    if (operator == 'x') {
        console.log(`userPressedOperator MULTIPLICATION: ${operator}`)
    }
    if (operator == '-') {
        console.log(`userPressedOperator MINUS: ${operator}`)
    }
    if (operator == '+') {
        console.log(`userPressedOperator PLUS: ${operator}`)
    }
}

const userPressedDeletetionSigns = (deletetionSign) => {
    console.log(`userPressedDeletetionSigns: ${deletetionSign}`)
}

const userPressedEqualSign = () => {
    //save number
    //add sign to display
    //add new line to display
    //count equation
    console.log(`userPressedEqualSign: =`)
}

export {catchButtonInnerHTML};
