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
var startbtn = document.getElementById('start');
var inputField = document.getElementById("user_input");
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
                // console.log(tempCard.value + " of " + tempCard.suit)
            }
        }
        shuffle(this.cards);
        // for (var k = 0; k < 52; k++){
        //     console.log(this.cards[k].value + " of " + this.cards[k].suit + " value of " + cardValueInterpret(this.cards[k].value))
        // }
    }
}
class BlackJack {
    constructor() {
        this.playerHand = [];
        this.dealerHand = [];
        this.turnOrder = 0;
        this.deck = new Deck();
    }
    updateInput() {
        if (this.turnOrder == 0) {
            this.getName();
            addToDisplayText('How much would you like to gamble with?');
            this.turnOrder += 1;
            console.log('turn 0 take name');
        }
        else if (this.turnOrder == 1) {
            addToDisplayText('Hello ' + userName);
            this.getFunds();
            addToDisplayText('You have ' + userFunds + ' chips');
            this.turnOrder += 1;
            console.log('turn 1 take funds, deal');
            this.playerDrawFirstHand();
            this.dealerDrawFirstHand();
            this.calcHandValue(this.playerHand);
            addToDisplayText('please place your bet');
        }
        else if (this.turnOrder == 2) {
            this.betStep();
            addToDisplayText('you bet ' + this.bet + ' chips.');
            this.turnOrder += 1;
            addToDisplayText('Would you like to hit?');
        }
        else if (this.turnOrder == 3) {
            if (inputField.value == 'yes') {
                this.playerDraw();
                console.log('hitting');
                this.calcHandValue(this.playerHand);
                addToDisplayText('would you like to hit again?');
            }
            else {
                this.turnOrder += 1;
            }
            inputField.value = '';
        }
        else if (this.turnOrder == 4) {
            addToDisplayText('after hit');
        }
    }
    getName() {
        userName = inputField.value;
        clearInput();
    }
    getFunds() {
        userFunds = parseInt(inputField.value);
        clearInput();
    }
    playerDraw() {
        let tempCard = this.deck.cards.pop();
        this.playerHand.push(tempCard);
        addToDisplayText(userName + " drew " + tempCard.value + " of " + tempCard.suit);
        console.log('player drew ' + tempCard.value + " of " + tempCard.suit);
    }
    playerDrawFirstHand() {
        this.playerDraw();
        this.playerDraw();
        console.log('player initial hand');
    }
    dealerDraw() {
        let tempCard = this.deck.cards.pop();
        this.dealerHand.push(tempCard);
        addToDisplayText("Dealer drew " + tempCard.value + " of " + tempCard.suit);
        console.log('dealer drew ' + tempCard.value + " of " + tempCard.suit);
    }
    dealerDrawFirstHand() {
        this.dealerDraw();
        this.dealerDraw();
        console.log('dealer initial hand');
    }
    betStep() {
        console.log('bet of ' + inputField.value);
        this.bet = parseInt(inputField.value);
        inputField.value = '';
    }
    hitStep() {
        this.playerDraw();
    }
    calcHandValue(hand) {
        let handValue = 0;
        hand.forEach(card => {
            handValue += cardValueInterpret(card.value);
        });
        addToDisplayText('Current hand value is ' + handValue);
    }
}
blackJackTurn();
//# sourceMappingURL=app.js.map