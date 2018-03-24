"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CasinoNav_1 = require("./CasinoNav");
var el = document.getElementById('display');
function addToDisplayText(text) {
    el.innerText += '\n';
    el.innerText += text;
}
var casinoNav = new CasinoNav_1.CasinoNav('eyyyy');
casinoNav.inputNav;
var btn = document.getElementById('submit');
var inputField = document.getElementById("user_input");
// var entry = document.getElementById('user_input').innerText;
btn.addEventListener("click", function (e) { return addToDisplayText(inputField.value); });
//# sourceMappingURL=greeter.js.map