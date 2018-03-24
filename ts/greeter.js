import { CasinoNav } from "./CasinoNav";
let el = document.getElementById('display');
function addToDisplayText(text) {
    el.innerText += '\n';
    el.innerText += text;
}
let casinoNav = new CasinoNav('eyyyy');
casinoNav.inputNav;
let btn = document.getElementById('submit');
let inputField = document.getElementById("user_input");
// var entry = document.getElementById('user_input').innerText;
btn.addEventListener("click", (e) => addToDisplayText(inputField.value));
//# sourceMappingURL=greeter.js.map