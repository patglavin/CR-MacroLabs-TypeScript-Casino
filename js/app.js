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
var flipper = document.getElementById('coinflip');
var coinflipper = new CoinFlip();
flipper.addEventListener('click', (e) => coinflipper.flipCoin());
function clearInput() {
    inputField.value = '';
}
function blackJackTurn() {
    let blackjack = new BlackJack();
    btn.addEventListener("click", (e) => blackjack.updateInput());
}
blackJackTurn();
//# sourceMappingURL=app.js.map