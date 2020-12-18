import {catchButtonInnerHTML} from './handlePressedButton.js';

function buttonsListener() {

    const allButtons = document.querySelectorAll('.button');

    allButtons.forEach((button) => {
        button.addEventListener('mouseover', () => {
            button.classList = 'mouseover'
        })
        button.addEventListener('mouseout', () => {
            button.classList = "button"
        })
        button.addEventListener('mousedown', () => {
            button.classList = "mousedown"
        })
        button.addEventListener('mouseup', () => {
            button.classList = "mouseover"
            catchButtonInnerHTML(button.innerHTML);
        })
    })
}
export {buttonsListener};
