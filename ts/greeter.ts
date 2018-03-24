var el: HTMLElement = document.getElementById('display');

function addToDisplayText(text: string) {
    el.innerText += '\n';
    el.innerText += text;
}

function interpret(playerInput:string) {
    if (playerInput == 'yes') {
        addToDisplayText('you win');
    } else {
        addToDisplayText('you lose');
    }
}

addToDisplayText("pick yes");

var btn = document.getElementById('submit');
var inputField: HTMLInputElement = <HTMLInputElement>document.getElementById("user_input");
// var entry = document.getElementById('user_input').innerText;
btn.addEventListener("click", (e: Event) => interpret(inputField.value));
