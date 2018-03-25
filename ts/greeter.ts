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

class Card {
    value:string;
    suit:string;
    constructor(value:string, suit:string) {
        this.value = value;
        this.suit = suit;
    }

    public get getSuit(): string {
        return this.suit;
    }

    public get getValue() : number {
        return cardValueInterpret(this.value);
    }
}

class Deck {
    cards:Array<Card> = [];
    constructor() {
        for (var i = 0; i < 4; i++){
            for(var j = 0; j < 13; j++){
                let tempCard:Card = new Card(CardValues[j],CardSuits[i]);
                this.cards.push(tempCard);
                console.log(tempCard.value + " of " + tempCard.suit)
            }
        }
    }
}

class BlackJack {
    deck: Deck;
    constructor() {
        this.deck = new Deck();
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