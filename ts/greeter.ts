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
var startbtn = document.getElementById('start_game')
var inputField: HTMLInputElement = <HTMLInputElement>document.getElementById("user_input");
// var entry = document.getElementById('user_input').innerText;
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

enum CardValue {
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Jack = 10,
    Queen = 10,
    King = 10,
    Ace = 11,
}

enum Suit {
    Hearts,
    Diamonds,
    Clubs,
    Spades,
}

class card {
    value:CardValue;
    suit:string;
    constructor(parameters) {
        
    }
}

class deck {
    cards;

    constructor() {
        
    }
}

class BlackJack {
    constructor() {

    }
    turnOrder:number = 0;
    name:string;
    updateInput(){
        if (this.turnOrder == 0) {
            this.initialTurn();
        } else if (this.turnOrder == 1) {
            alert('turn 1');
            addToDisplayText(this.name);
            this.turnOrder += 1;
        }   
    }
    initialTurn(){
        alert('turn 0');
        this.name = inputField.value;
        clearInput();
        this.turnOrder += 1;
    }
}

blackJackTurn();