import classes from './calculator.css';
import title from './title/title.js';
import display from './display/display.js';
const createCalculator = () => {
    const calculator = document.createElement('div');
    calculator.setAttribute('class', 'calculator');    
    document.getElementsByTagName('body')[0].appendChild(calculator);
    
}

export default () => {
    createCalculator();
    title();
    display();

 /*    keyPanel(); */

}
