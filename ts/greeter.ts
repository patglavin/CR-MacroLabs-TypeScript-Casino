var el: HTMLElement = document.getElementById('display');
let userInput;
let currentGame = false;
let updateInput = false;
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
var startbtn = document.getElementById('start_game')
var inputField: HTMLInputElement = <HTMLInputElement>document.getElementById("user_input");
// var entry = document.getElementById('user_input').innerText;
btn.addEventListener("click", (e: Event) => setInput(inputField.value));
btn.addEventListener("click", (e:Event) => addToDisplayText(userInput));
btn.addEventListener("click", (e: Event) => inputField.value = '');
btn.addEventListener("click", (e: Event) => updateInput = true);
startbtn.addEventListener("click", (e: Event) => currentGame = true);
startbtn.addEventListener("click", (e:Event) => blackJackTurn());

function blackJackTurn() {
    let blackjack = new BlackJack();
    blackjack.askForName();
}

var timeout = null;

function acceptInput() {
    
} 

class BlackJack {
    constructor() {}
    name:string;
    askForName() {
        addToDisplayText('write your name');
        btn.addEventListener("click", (e:Event) => this.name = inputField.value);
        
        addToDisplayText(this.name);
    }
    
}

blackJackTurn();