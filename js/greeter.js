var el = document.getElementById('display');
function addToDisplayText(text) {
    el.innerText += '\n';
    el.innerText += text;
}
function interpret(playerInput) {
    if (playerInput == 'yes') {
        addToDisplayText('you win');
    }
    else {
        addToDisplayText('you lose');
    }
}
addToDisplayText("pick yes");
var btn = document.getElementById('submit');
var inputField = document.getElementById("user_input");
// var entry = document.getElementById('user_input').innerText;
btn.addEventListener("click", function (e) { return interpret(inputField.value); });
//# sourceMappingURL=greeter.js.map