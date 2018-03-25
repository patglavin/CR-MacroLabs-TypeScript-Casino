var el = document.getElementById('display');
let userInput;
let currentGame = false;
let userName;
let userFunds;
function addToDisplayText(text) {
    if (text != '') {
        el.innerText += '\n';
        el.innerText += text;
    }
}
function setInput(newInput) {
    userInput = newInput;
}
var btn = document.getElementById('submit');
var startbtn = document.getElementById('start_game');
var inputField = document.getElementById("user_input");
// var entry = document.getElementById('user_input').innerText;
btn.addEventListener("click", (e) => setInput(inputField.value));
btn.addEventListener("click", (e) => addToDisplayText('you input ' + userInput));
function clearInput() {
    inputField.value = '';
}
function blackJackTurn() {
    let blackjack = new BlackJack();
    btn.addEventListener("click", (e) => blackjack.updateInput());
}
var timeout = null;
function acceptInput() {
}
let CardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let CardSuits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
function cardValueInterpret(valueToInterpret) {
    if (valueToInterpret == 'J' || valueToInterpret == 'Q' || valueToInterpret == 'K') {
        return 10;
    }
    else if (valueToInterpret == 'A') {
        return 11;
    }
    else {
        return parseInt(valueToInterpret);
    }
}
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    get getSuit() {
        return this.suit;
    }
    get getValue() {
        return cardValueInterpret(this.value);
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
class Deck {
    constructor() {
        this.cards = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 13; j++) {
                let tempCard = new Card(CardValues[j], CardSuits[i]);
                this.cards.push(tempCard);
                console.log(tempCard.value + " of " + tempCard.suit);
            }
        }
        shuffle(this.cards);
        for (var k = 0; k < 52; k++) {
            console.log(this.cards[k].value + " of " + this.cards[k].suit);
        }
    }
}
class BlackJack {
    constructor() {
        this.turnOrder = 0;
        this.deck = new Deck();
    }
    updateInput() {
        if (this.turnOrder == 0) {
            this.initialTurn();
        }
        else if (this.turnOrder == 1) {
            alert('turn 1');
            addToDisplayText(this.name);
            this.turnOrder += 1;
        }
    }
    initialTurn() {
        alert('turn 0');
        this.name = inputField.value;
        clearInput();
        this.turnOrder += 1;
    }
}
blackJackTurn();
//# sourceMappingURL=greeter.js.map