function greeter(person) {
    return "Hello, " + person;
}
var user = 'Amy USER';
var user1 = 'Amy USER';
var el = document.getElementById('display');
alert(el.id);
// el.innerHTML = greeter(user);
el.innerText = greeter(user);
el.innerText += '\n';
el.innerText += greeter(user1);
