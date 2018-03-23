var el = document.getElementById('display');
function addToDisplayText(text) {
    el.innerText += text;
}
var btn = document.getElementById('submit');
var entry = document.getElementById('input');
btn.addEventListener("click", function (e) { return addToDisplayText(entry.innerText); });
btn.addEventListener("click", function (e) { return alert('oh shit gambling'); });
