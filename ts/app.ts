var el: HTMLElement = document.getElementById('display');
let userInput;
let currentGame = false;
let userName:string;
let userFunds:number;

function addToDisplayText(text: string) {
    if (text != '') {
        el.innerText += '\n';
        el.innerText += text;
    }
}

function setInput(newInput:string) {
    userInput = newInput;
}

var btn = document.getElementById('submit');
var startbtn = document.getElementById('start');
var inputField: HTMLInputElement = <HTMLInputElement>document.getElementById("user_input");
btn.addEventListener("click", (e: Event) => setInput(inputField.value));
btn.addEventListener("click", (e:Event) => addToDisplayText('you input ' + userInput));

function clearInput() {
    inputField.value = '';
}

function blackJackTurn() {
    let blackjack = new BlackJack();
    btn.addEventListener("click", (e: Event) => blackjack.updateInput());
}

var timeout = null;

function acceptInput() {
    
} 

let CardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let CardSuits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

function cardValueInterpret(valueToInterpret:string) : number {
    if (valueToInterpret == 'J' || valueToInterpret == 'Q' || valueToInterpret == 'K') {
        return 10;
    } else if (valueToInterpret == 'A') {
        return 11;
    } else {
        return parseInt(valueToInterpret);
    }
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

blackJackTurn();