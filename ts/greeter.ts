import {CasinoNav} from "./CasinoNav";
let el: HTMLElement = document.getElementById('display');

function addToDisplayText(text: string) {
    el.innerText += '\n';
    el.innerText += text;
}

let casinoNav = new CasinoNav('eyyyy');
casinoNav.inputNav;

let btn = document.getElementById('submit');
let inputField: HTMLInputElement = <HTMLInputElement>document.getElementById("user_input");
// var entry = document.getElementById('user_input').innerText;
btn.addEventListener("click", (e: Event) => addToDisplayText(inputField.value));
