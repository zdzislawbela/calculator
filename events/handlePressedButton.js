import {updateDisplay} from './displayEvents.js'

const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const numbersModifiers = ['+/-','.'];
const deletationSigns = ['CE','C','del'];
const operators = ['/','x','-','+',];

let currentValue = "0";
let savedValues = [];
let currentValueHasParenthesis = false;
const catchButtonInnerHTML = (innerHTML) => {
    numbers.includes(innerHTML)             ? userPressedNumber(innerHTML): "";
    numbersModifiers.includes(innerHTML)    ? userPressedNumbersModifier(innerHTML): "";
    deletationSigns.includes(innerHTML)     ? userPressedDeletetionSigns(innerHTML): "";
    operators.includes(innerHTML)           ? userPressedOperator(innerHTML): "";
    innerHTML === "="                       ? userPressedEqualSign(): "";
}

const userPressedNumber = (number) => {
    if (currentValue === "0") {
        currentValue = number;
        return updateDisplay(savedValues, currentValue);
    } 
    if (currentValue.slice(currentValue.length-1,currentValue.length) === ")") {
        currentValue = `${currentValue.slice(0,currentValue.length-1)}${number})`;
    } else {
        currentValue += number;
    }
    
    
    updateDisplay(savedValues, currentValue);
}

const userPressedNumbersModifier = (modifier) => {
    
    if (modifier === '+/-') {
        if (currentValue.slice(0,1) === '-') {
            currentValue = currentValue.slice(2,currentValue.length-1)
        } else {
            currentValue = `-(${currentValue})`;
        }  
    }
    if (modifier == '.') {
        if(!currentValue.includes('.')) {
            currentValue = `${currentValue}.`;
        }
        if (currentValue.slice(currentValue.length-1,currentValue.length) === ")") {
            if(!currentValue.includes('.')) {
                currentValue = `${currentValue.slice(0,currentValue.length-1)}${modifier})`;
            }
            
        }    
    }
    
    updateDisplay(savedValues, currentValue);
}


const userPressedOperator = (operator) => {

    if(
        parseInt(currentValue.slice(currentValue.indexOf(".")+1, currentValue.length)) === 0
        || currentValue.slice(currentValue.indexOf("."), currentValue.length) === ".") 
    {
        currentValue = currentValue.slice(0,currentValue.indexOf("."));
    }
    
    savedValues.push(currentValue);
    savedValues.push(operator);
    updateDisplay(savedValues);
    currentValue = '';

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
    if (deletetionSign == "del") {
        currentValue = currentValue.slice(0,currentValue.length-1);
        currentValue === "" ? currentValue = "0" : currentValue;
    }
    if (deletetionSign == 'C') {
        //purge all displayRows if exists
        currentValue = "0"
    }
    if (deletetionSign == 'CE') {
        //purge last dislayRows
        currentValue = "0"
    }
    updateDisplay(savedValues, currentValue);
}

const userPressedEqualSign = () => {
    //save number
    //add sign to display
    //add new line to display
    //count equation
    console.log(`userPressedEqualSign: =`)
}

export {catchButtonInnerHTML};
