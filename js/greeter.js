var el = document.getElementById('display');
let userInput;
let currentGame = false;
let updateInput = false;
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
btn.addEventListener("click", (e) => addToDisplayText(userInput));
btn.addEventListener("click", (e) => inputField.value = '');
btn.addEventListener("click", (e) => updateInput = true);
startbtn.addEventListener("click", (e) => currentGame = true);
startbtn.addEventListener("click", (e) => blackJackTurn());
function blackJackTurn() {
    let blackjack = new BlackJack();
    blackjack.askForName();
}
var timeout = null;
function acceptInput() {
}
class BlackJack {
    constructor() { }
    askForName() {
        addToDisplayText('write your name');
        btn.addEventListener("click", (e) => this.name = inputField.value);
        addToDisplayText(this.name);
    }
}
blackJackTurn();
//# sourceMappingURL=greeter.js.map