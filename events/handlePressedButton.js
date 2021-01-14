import { updateDisplay } from './displayEvents.js';

const POSSIBLE_DIGITS     = ['0','1','2','3','4','5','6','7','8','9'];
const NUMBERS_MODIFIERS   = ['+/-','.'];
const DELETATION_SIGNS    = ['CE','C','del'];
const OPERATORS          = ['/','x','-','+','='];

const CALCULATOR_STATE = {
    currentValue: "0",
    savedValues: []
}

const handleKeyboardButtons = (userInput) => {

    const userChooseDigit     = POSSIBLE_DIGITS.includes(userInput);
    const userChooseModifier  = NUMBERS_MODIFIERS.includes(userInput);
    const userChooseSign      = DELETATION_SIGNS.includes(userInput);
    const userChooseOperator  = OPERATORS.includes(userInput);

    userChooseDigit     
        ? handleDigits(userInput) : "";
    userChooseModifier  
        ? handleModifier(userInput) : "";
    userChooseSign      
        ? handleDeletetionSigns(userInput) : "";
    userChooseOperator  
        ? handleOperator(userInput) : "";

}

const handleDigits = (digit) => {
    if (CALCULATOR_STATE.currentValue === "0") {
        CALCULATOR_STATE.currentValue = digit;
        return updateDisplay(CALCULATOR_STATE.savedValues, CALCULATOR_STATE.currentValue);
    } 
    if (CALCULATOR_STATE.currentValue === "-(0)") {
        CALCULATOR_STATE.currentValue = `-(${digit})`;
        return updateDisplay(CALCULATOR_STATE.savedValues, CALCULATOR_STATE.currentValue);
    }
    if (CALCULATOR_STATE.currentValue.slice(CALCULATOR_STATE.currentValue.length-1,CALCULATOR_STATE.currentValue.length) === ")") {
        CALCULATOR_STATE.currentValue = `${CALCULATOR_STATE.currentValue.slice(0,CALCULATOR_STATE.currentValue.length-1)}${digit})`;
    } else {
        CALCULATOR_STATE.currentValue += digit;
    }
    updateDisplay(CALCULATOR_STATE.savedValues, CALCULATOR_STATE.currentValue);
}

const handleModifier = (modifier) => {
    const isModifierPlusMinus = modifier === '+/-';
    const isModifierDot = modifier == '.';
    const isMinusAtTheBegin = CALCULATOR_STATE.currentValue.slice(0,1) === '-';
    const isParenthesesAtTheEnd = CALCULATOR_STATE.currentValue.slice(CALCULATOR_STATE.currentValue.length-1,CALCULATOR_STATE.currentValue.length) === ")";
    const includesDot = CALCULATOR_STATE.currentValue.includes('.');
    const removeMinusAtBegin = CALCULATOR_STATE.currentValue.slice(2,CALCULATOR_STATE.currentValue.length-1);
    const addMinusAtBegin = `-(${CALCULATOR_STATE.currentValue})`;
    const removeDotAndAddModifier = `${CALCULATOR_STATE.currentValue.slice(0,CALCULATOR_STATE.currentValue.length-1)}${modifier}`;
    const addDotAtTheEnd = `${CALCULATOR_STATE.currentValue}.`;

    isModifierPlusMinus && isMinusAtTheBegin 
        ? CALCULATOR_STATE.currentValue = removeMinusAtBegin
        : "";

    isModifierPlusMinus && !isMinusAtTheBegin 
        ? CALCULATOR_STATE.currentValue = addMinusAtBegin
        : "";

    isModifierDot && isParenthesesAtTheEnd && !includesDot
        ? `${CALCULATOR_STATE.currentValue = removeDotAndAddModifier})`
        : "";

    isModifierDot && !includesDot
        ? `${CALCULATOR_STATE.currentValue = addDotAtTheEnd})`
        : "";

    updateDisplay(CALCULATOR_STATE.savedValues, CALCULATOR_STATE.currentValue);
}

const handleOperator = (operator) => {
    const isZeroAtTheEnd = parseInt(CALCULATOR_STATE.currentValue.slice(CALCULATOR_STATE.currentValue.indexOf(".")+1, CALCULATOR_STATE.currentValue.length)) === 0;
    const isDotAtTheEnd = CALCULATOR_STATE.currentValue.slice(CALCULATOR_STATE.currentValue.indexOf("."), CALCULATOR_STATE.currentValue.length) === ".";
    
    if( isZeroAtTheEnd || isDotAtTheEnd ) {
        CALCULATOR_STATE.currentValue = CALCULATOR_STATE.currentValue.slice(0,CALCULATOR_STATE.currentValue.indexOf("."));
    }

    CALCULATOR_STATE.savedValues.push(CALCULATOR_STATE.currentValue);
    CALCULATOR_STATE.savedValues.push(operator);
    updateDisplay(CALCULATOR_STATE.savedValues);
    CALCULATOR_STATE.currentValue = '';
    operator === "=" ? userPressedEqualSign() : "";
}

const handleDeletetionSigns = (deletetionSign) => {
    if (deletetionSign == "del") {
        CALCULATOR_STATE.currentValue = CALCULATOR_STATE.currentValue.slice(0,CALCULATOR_STATE.currentValue.length-1);
        CALCULATOR_STATE.currentValue === "" ? CALCULATOR_STATE.currentValue = "0" : CALCULATOR_STATE.currentValue;
    }
    if (deletetionSign == 'C') {
        //purge all displayRows if exists
        CALCULATOR_STATE.currentValue = "0";
    }
    if (deletetionSign == 'CE') {
        //purge last dislayRows
        CALCULATOR_STATE.currentValue = "0";
    }
    updateDisplay(CALCULATOR_STATE.savedValues, CALCULATOR_STATE.currentValue);
}

const userPressedEqualSign = () => {
    let sum = "";
    const savedCleanedValues = [];

    CALCULATOR_STATE.savedValues.forEach((savedValue) => {
        const savedCleanedValue = savedValue.replace(/[()]/g, '');
        savedCleanedValues.push(savedCleanedValue);
    })
    console.log(`savedCleanedValues: ${savedCleanedValues}`);

    const calculatedValues = savedCleanedValues.map((item) => {
        return item;
    })

    while(calculatedValues.length > 0) {
        const numberIndex0 = parseInt(calculatedValues.shift());
        const operatorIndex1 = calculatedValues.shift();   
        const numberIndex2 = parseInt(calculatedValues.shift());
        operatorIndex1 === "+" ? sum = numberIndex0 + numberIndex2: "";
        operatorIndex1 === "-" ? sum = numberIndex0 - numberIndex2: "";
    }
    const newDisplayRow = document.createElement('div');
    newDisplayRow.setAttribute('class', 'displayRow');
    newDisplayRow.innerHTML = sum;
    document.querySelector('.display').appendChild(newDisplayRow);
}

export {handleKeyboardButtons};
