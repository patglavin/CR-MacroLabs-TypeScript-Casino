var el = document.getElementById('display');
function addToDisplayText(text) {
    el.innerText += '\n';
    el.innerText += text;
}
var btn = document.getElementById('submit');
var inputField = document.getElementById("user_input");
// var entry = document.getElementById('user_input').innerText;
btn.addEventListener("click", function (e) { return addToDisplayText(inputField.value); });
