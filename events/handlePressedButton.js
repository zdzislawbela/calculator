import { updateDisplay } from './displayEvents.js';

const POSSIBLE_DIGITS     = ['0','1','2','3','4','5','6','7','8','9'];
const NUMBERS_MODIFIERS   = ['+/-','.'];
const DELETATION_SIGNS    = ['CE','C','del'];
const OPERATORS           = ['/','x','-','+','='];

const CALCULATOR_STATE = {
    currentValue: "0",
    savedValues: []
}

const handleKeyboardButtons = (userInput) => {

    const userChooseDigit     = POSSIBLE_DIGITS.includes(userInput);
    const userChooseModifier  = NUMBERS_MODIFIERS.includes(userInput);
    const userChooseSign      = DELETATION_SIGNS.includes(userInput);
    const userChooseOperator  = OPERATORS.includes(userInput);

    if (userChooseDigit) 
        return handleDigit(userInput);
    if (userChooseModifier) 
        return handleModifier(userInput);
    if (userChooseSign) 
        return handleDeletetionSign(userInput);
    if (userChooseOperator) 
        return handleOperator(userInput);
}

const handleDigit = (digit) => {
    const isDigitZero = CALCULATOR_STATE.currentValue === "0";
    const isZeroWithMinus = CALCULATOR_STATE.currentValue === "-(0)";
    const isParenthesesAtTheEnd = CALCULATOR_STATE.currentValue.slice(-1) == ")";
    const addDigitBeforeParentheses = `${CALCULATOR_STATE.currentValue.slice(0,CALCULATOR_STATE.currentValue.length-1)}${digit})`;
    
    if (isDigitZero) {
        CALCULATOR_STATE.currentValue = digit;
        return updateDisplay(CALCULATOR_STATE.savedValues, CALCULATOR_STATE.currentValue);
    } 
    if (isZeroWithMinus) {
        CALCULATOR_STATE.currentValue = `-(${digit})`;
        return updateDisplay(CALCULATOR_STATE.savedValues, CALCULATOR_STATE.currentValue);
    }
    if (isParenthesesAtTheEnd) {
        CALCULATOR_STATE.currentValue = addDigitBeforeParentheses;
    } else {
        CALCULATOR_STATE.currentValue += digit;
    }

    updateDisplay(CALCULATOR_STATE.savedValues, CALCULATOR_STATE.currentValue);
}

const handleModifier = (modifier) => {
    const currentLength = CALCULATOR_STATE.currentValue.length;
    const pressedPlusMinus = modifier === '+/-';
    const pressedDot = modifier == '.';
    const isMinusAtTheBegin = CALCULATOR_STATE.currentValue.slice(0,1) === '-';
    const isParenthesesAtTheEnd = CALCULATOR_STATE.currentValue.slice(-1) == ")";
    const includesDot = CALCULATOR_STATE.currentValue.includes('.');
    const removeMinusAtBegin = CALCULATOR_STATE.currentValue.slice(2,currentLength-1);
    const addMinusAtBegin = `-(${CALCULATOR_STATE.currentValue})`;
    const removeParenthesesAndAddDot = `${CALCULATOR_STATE.currentValue.slice(0,currentLength-1)}.)`;
    const addDotAtTheEnd = `${CALCULATOR_STATE.currentValue}.`;

    pressedPlusMinus && isMinusAtTheBegin 
        ? CALCULATOR_STATE.currentValue = removeMinusAtBegin : "";

    pressedPlusMinus && !isMinusAtTheBegin 
        ? CALCULATOR_STATE.currentValue = addMinusAtBegin : "";
    
    pressedDot && !includesDot
        ? `${CALCULATOR_STATE.currentValue = addDotAtTheEnd})` : "";

    pressedDot && isParenthesesAtTheEnd && !includesDot
        ? `${CALCULATOR_STATE.currentValue = removeParenthesesAndAddDot}` : "";

    updateDisplay(CALCULATOR_STATE.savedValues, CALCULATOR_STATE.currentValue);
}

const handleOperator = (operator) => {

/*     if (CALCULATOR_STATE.savedValues.slice(-3) === "/" || "x" || "+" || "-" || "=") {
        return;
    } */
    const isZeroAtTheEnd = parseInt(CALCULATOR_STATE.currentValue.slice(CALCULATOR_STATE.currentValue.indexOf(".")+1, CALCULATOR_STATE.currentValue.length)) === 0;
    const isDotAtTheEnd = CALCULATOR_STATE.currentValue.slice(CALCULATOR_STATE.currentValue.indexOf("."), CALCULATOR_STATE.currentValue.length) === ".";
    const removeZeroOrDotAtTheEnd = CALCULATOR_STATE.currentValue.slice(0,CALCULATOR_STATE.currentValue.indexOf("."));

    isZeroAtTheEnd || isDotAtTheEnd
        ? CALCULATOR_STATE.currentValue = removeZeroOrDotAtTheEnd
        : "";

    CALCULATOR_STATE.savedValues.push(CALCULATOR_STATE.currentValue);
    CALCULATOR_STATE.savedValues.push(operator);
    updateDisplay(CALCULATOR_STATE.savedValues);
    CALCULATOR_STATE.currentValue = '';
    operator === "=" ? userPressedEqualSign() : "";
}

const handleDeletetionSign = (deletetionSign) => {
    const pressedDel = deletetionSign == "del";
    const pressedC = deletetionSign == 'C';
    const pressedCE = deletetionSign == 'CE';
    const isCurrentValueEmpty = CALCULATOR_STATE.currentValue.slice(0,CALCULATOR_STATE.currentValue.length-1) === "";
    const assignZero = "0";
    const deleteLastDigit = CALCULATOR_STATE.currentValue.slice(0,CALCULATOR_STATE.currentValue.length-1);
     
    pressedDel 
        ? CALCULATOR_STATE.currentValue = deleteLastDigit
        : "";
        
    isCurrentValueEmpty
        ? CALCULATOR_STATE.currentValue = assignZero 
        : "";

    //purge all displayRows if exists (not implemented)
    pressedC
        ? CALCULATOR_STATE.currentValue = "0"
        : "";

    //purge last dislayRows (not implemented)
    pressedCE     
        ? CALCULATOR_STATE.currentValue = "0"
        : "";

    updateDisplay(CALCULATOR_STATE.savedValues, CALCULATOR_STATE.currentValue);
}

const userPressedEqualSign = () => {
    if (CALCULATOR_STATE.currentValue === "0" || "") {
        return;
    }
    
    let sum = "";
    const calculatedValues = CALCULATOR_STATE.savedValues.map((savedValue) => {
        const savedCleanedValue = savedValue.replace(/[()]/g, '');
        return savedCleanedValue;
    })

    while(calculatedValues.length > 0) {
        const numberIndex0 = parseInt(calculatedValues.shift());
        const operatorIndex1 = calculatedValues.shift();   
        const numberIndex2 = parseInt(calculatedValues.shift());
        operatorIndex1 === "+" ? sum = numberIndex0 + numberIndex2: "";
        operatorIndex1 === "-" ? sum = numberIndex0 - numberIndex2: "";
        operatorIndex1 === "x" ? sum = numberIndex0 * numberIndex2: "";
        operatorIndex1 === "/" ? sum = numberIndex0 / numberIndex2: "";
    }

    updateDisplay(CALCULATOR_STATE.savedValues, sum, true);
    CALCULATOR_STATE.savedValues = [];
}

export {handleKeyboardButtons};
