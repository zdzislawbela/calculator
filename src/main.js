import calculator from './calculator/calculator.js';
import {setKeyClassInterval} from './handleEvents.js';
import {addKeyListeners, addMathKeyListeners} from './keyListeners.js';

export default () => {
    calculator();
/*     addKeyListeners();
    addMathKeyListeners();
    setInterval(setKeyClassInterval, 3000); */
}
