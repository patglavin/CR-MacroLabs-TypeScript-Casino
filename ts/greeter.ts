var el: HTMLElement = document.getElementById('display');
let userInput;

function addToDisplayText(text: string) {
    el.innerText += '\n';
    el.innerText += text;
}

function setInput(newInput:string) {
    userInput = newInput;
}

var btn = document.getElementById('submit');
var inputField: HTMLInputElement = <HTMLInputElement>document.getElementById("user_input");
// var entry = document.getElementById('user_input').innerText;
btn.addEventListener("click", (e: Event) => setInput(inputField.value));
btn.addEventListener("click", (e:Event) => addToDisplayText(userInput));
btn.addEventListener("click", (e: Event) => inputField.value = '');

