var el: HTMLElement = document.getElementById('display');

function addToDisplayText(text: string) {
    el.innerText += text;
}

var btn = document.getElementById('submit');
var entry = document.getElementById('input');
btn.addEventListener("click", (e:Event) => addToDisplayText(entry.innerText));
btn.addEventListener("click", (e: Event) => alert('oh shit gambling'));
