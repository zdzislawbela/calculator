import calculator from './calculator/calculator.js';
//import {setKeyClassInterval} from '../events/displayEvents.js';
import {buttonsListener} from '../events/keyListeners.js';

export default () => {
    calculator();
    buttonsListener();
    //setInterval(setKeyClassInterval, 3000);
}
