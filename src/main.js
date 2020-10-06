import {setKeyClassInterval} from './functions.js';
import {addKeyListeners, addMathKeyListeners} from './keyListeners.js';


export default () => {
    addKeyListeners();
    addMathKeyListeners();
    setInterval(setKeyClassInterval, 3000);
}
