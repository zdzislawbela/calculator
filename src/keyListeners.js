import {countingValue, handleMathKey} from './functions.js';
function addKeyListeners() {
    const keys = document.querySelectorAll('.key');

    keys.forEach((key) => {
        key.addEventListener('mouseover', () => {
            key.classList = "mouseover"
        })
        key.addEventListener('mouseout', () => {
            key.classList = "key"
        })
        key.addEventListener('mousedown', () => {
            key.classList = "mousedown"
        })
        key.addEventListener('mouseup', () => {
            key.classList = "mouseover"
            countingValue(key.innerHTML);
        })
    })
}

function addMathKeyListeners() {
    const keys = document.querySelectorAll('.mathKey');
    keys.forEach((key) => {
        key.addEventListener('mouseover', () => {
            key.classList = "mouseover"
        })
        key.addEventListener('mouseout', () => {
            key.classList = "key"
        })
        key.addEventListener('mousedown', () => {
            key.classList = "mousedown"
        })
        key.addEventListener('mouseup', () => {
            key.classList = "mouseover"
            handleMathKey(key.innerHTML);
        })
    })
}

export {addKeyListeners, addMathKeyListeners};
