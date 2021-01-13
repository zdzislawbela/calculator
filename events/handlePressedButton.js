import { updateDisplay } from './displayEvents.js';

const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const numbersModifiers = ['+/-','.'];
const deletationSigns = ['CE','C','del'];
const operators = ['/','x','-','+','='];

let currentValue = "0";
let savedValues = [];

const catchButtonInnerHTML = (innerHTML) => {
    numbers.includes(innerHTML)             ? userPressedNumber(innerHTML): "";
    numbersModifiers.includes(innerHTML)    ? userPressedNumbersModifier(innerHTML): "";
    deletationSigns.includes(innerHTML)     ? userPressedDeletetionSigns(innerHTML): "";
    operators.includes(innerHTML)           ? userPressedOperator(innerHTML): "";
}

const userPressedNumber = (number) => {
    //check for zero
    //check for 
    if (currentValue === "0") {
        currentValue = number;
        return updateDisplay(savedValues, currentValue);
    } 
    if (currentValue === "-(0)") {
        currentValue = `-(${number})`;
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
            currentValue = currentValue.slice(2,currentValue.length-1);
        } else {
            currentValue = `-(${currentValue})`;
        }  
    }
    if (modifier == '.') {
        if (currentValue.slice(currentValue.length-1,currentValue.length) === ")") {
            if(!currentValue.includes('.')) {
                currentValue = `${currentValue.slice(0,currentValue.length-1)}${modifier})`;
            } 
        }   
        if(!currentValue.includes('.')) {
            currentValue = `${currentValue}.`;
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
    operator === "=" ? userPressedEqualSign() : "";
}

const userPressedDeletetionSigns = (deletetionSign) => {
    if (deletetionSign == "del") {
        currentValue = currentValue.slice(0,currentValue.length-1);
        currentValue === "" ? currentValue = "0" : currentValue;
    }
    if (deletetionSign == 'C') {
        //purge all displayRows if exists
        currentValue = "0";
    }
    if (deletetionSign == 'CE') {
        //purge last dislayRows
        currentValue = "0";
    }
    updateDisplay(savedValues, currentValue);
}

const userPressedEqualSign = () => {
    let sum = "";
    const savedCleanedValues = [];

    savedValues.forEach((savedValue) => {
        const savedCleanedValue = savedValue.replace(/[()]/g, '');
        savedCleanedValues.push(savedCleanedValue);
    })
    console.log(`savedCleanedValues: ${savedCleanedValues}`);

    const calculatedValues = savedCleanedValues.map((item) => {
        return item;
    })

    while(calculatedValues.length > 0) {
        console.log(calculatedValues)
        const numberIndex0 = parseInt(calculatedValues.shift());
        console.log(`numberIndex0: ${numberIndex0}`)
        const operatorIndex1 = calculatedValues.shift();   
        console.log(`operatorIndex1: ${operatorIndex1}`)
        const numberIndex2 = parseInt(calculatedValues.shift());
        console.log(`numberIndex2: ${numberIndex2}`)
/*         if (operatorIndex1 === 'x' || '/') {
            const operatorIndex3 = calculatedValues.shift();
            const numberIndex4 = parseInt(calculatedValues.shift());
        } */

        operatorIndex1 === "+" ? sum = numberIndex0 + numberIndex2: "";
        operatorIndex1 === "-" ? sum = numberIndex0 - numberIndex2: "";
    }

    console.log(`calculatedValues: ${calculatedValues}`)
    console.log(`sum: ${sum}`)
    const newDisplayRow = document.createElement('div');
    newDisplayRow.setAttribute('class', 'displayRow');
    newDisplayRow.innerHTML = sum;
    document.querySelector('.display').appendChild(newDisplayRow);
}

export {catchButtonInnerHTML};
