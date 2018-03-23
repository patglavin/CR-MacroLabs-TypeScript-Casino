function greeter(person) {
    return "Hello, " + person;
}
var user = 'Pat';
var el = document.getElementById('display');
alert(el.id);
// el.innerHTML = greeter(user);
el.innerText = greeter(user);
el.innerText += '\n';
el.innerText += "ya big nerd";
