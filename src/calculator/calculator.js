import classes from './calculator.css';

const createCalculator = () => {
    const calculator = document.createElement('div');
    calculator.setAttribute('class', 'calculator');    
    document.getElementsByTagName('body')[0].appendChild(calculator);
    
}

export default () => {
    createCalculator();
 /*    displayTitle();
    display();
    keyPanel(); */

}
