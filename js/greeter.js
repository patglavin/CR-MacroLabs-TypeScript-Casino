var el = document.getElementById('display');
var userInput;
function addToDisplayText(text) {
    el.innerText += '\n';
    el.innerText += text;
}
function setInput(newInput) {
    userInput = newInput;
}
var btn = document.getElementById('submit');
var inputField = document.getElementById("user_input");
// var entry = document.getElementById('user_input').innerText;
btn.addEventListener("click", function (e) { return setInput(inputField.value); });
btn.addEventListener("click", function (e) { return addToDisplayText(userInput); });
btn.addEventListener("click", function (e) { return inputField.value = ''; });
//# sourceMappingURL=greeter.js.map