var el: HTMLElement = document.getElementById('display');

function addToDisplayText(text: string) {
    el.innerText += '\n';
    el.innerText += text;
}

var btn = document.getElementById('submit');
var inputField: HTMLInputElement = <HTMLInputElement>document.getElementById("user_input");
// var entry = document.getElementById('user_input').innerText;
btn.addEventListener("click", (e: Event) => addToDisplayText(inputField.value));