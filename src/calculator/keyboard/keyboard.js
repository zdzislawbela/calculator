import classes from './keyboard.css';

const keyboard = () => {

    const keyboard = document.createElement('div');
    keyboard.setAttribute('class', 'keyboard');
    document.querySelector('.calculator').appendChild(keyboard);

    const buttons = [
        {
            "class": "key",
            "value": "CE"
        },
        {
            "class": "key",
            "value": "C"
        },
        {
            "class": "key",
            "value": "del"
        },
        {
            "class": "mathKey",
            "value": "/"
        },        
        {
            "class": "key",
            "value": "7"
        },
        {
            "class": "key",
            "value": "8"
        },
        {
            "class": "key",
            "value": "9"
        },
        {
            "class": "mathKey",
            "value": "x"
        },        
        {
            "class": "key",
            "value": "4"
        },
        {
            "class": "key",
            "value": "5"
        },
        {
            "class": "key",
            "value": "6"
        },
        {
            "class": "mathKey",
            "value": "-"
        },        
        {
            "class": "key",
            "value": "1"
        },
        {
            "class": "key",
            "value": "2"
        },
        {
            "class": "key",
            "value": "3"
        },
        {
            "class": "mathKey",
            "value": "+"
        },
        {
            "class": "key",
            "value": "+/-"
        },
        {
            "class": "key",
            "value": "0"
        },
        {
            "class": "key",
            "value": "."
        },
        {
            "class": "mathKey",
            "value": "="
        },

    ]

    buttons.forEach((button)=>{
        const container = document.createElement('div');
        container.setAttribute('class', button.class);
        container.innerHTML = button.value;
        document.querySelector('.keyboard').appendChild(container);

    })

}



export default () => {
    keyboard();
}
