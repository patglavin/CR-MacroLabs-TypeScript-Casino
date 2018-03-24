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
var CardValue;
(function (CardValue) {
    CardValue[CardValue["Two"] = 2] = "Two";
    CardValue[CardValue["Three"] = 3] = "Three";
    CardValue[CardValue["Four"] = 4] = "Four";
    CardValue[CardValue["Five"] = 5] = "Five";
    CardValue[CardValue["Six"] = 6] = "Six";
    CardValue[CardValue["Seven"] = 7] = "Seven";
    CardValue[CardValue["Eight"] = 8] = "Eight";
    CardValue[CardValue["Nine"] = 9] = "Nine";
    CardValue[CardValue["Ten"] = 10] = "Ten";
    CardValue[CardValue["Jack"] = 10] = "Jack";
    CardValue[CardValue["Queen"] = 10] = "Queen";
    CardValue[CardValue["King"] = 10] = "King";
    CardValue[CardValue["Ace"] = 11] = "Ace";
})(CardValue || (CardValue = {}));
var Suit;
(function (Suit) {
    Suit[Suit["Hearts"] = 0] = "Hearts";
    Suit[Suit["Diamonds"] = 1] = "Diamonds";
    Suit[Suit["Clubs"] = 2] = "Clubs";
    Suit[Suit["Spades"] = 3] = "Spades";
})(Suit || (Suit = {}));
class card {
    constructor(parameters) {
    }
}
class deck {
    constructor() {
    }
}
class BlackJack {
    constructor() {
        this.turnOrder = 0;
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