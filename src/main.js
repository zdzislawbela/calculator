import calculator from './calculator/calculator.js';

import {buttonsListener} from '../events/keyListeners.js';

export default () => {
    calculator();
    buttonsListener();
}
