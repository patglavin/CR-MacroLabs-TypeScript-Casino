function greeter(person) {
	return "Hello, " + person;
}

let user = 'Amy USER';
let user1 = 'Amy USER';

var el: HTMLElement = document.getElementById('display');
alert(el.id);

// el.innerHTML = greeter(user);
el.innerText = greeter(user);
el.innerText += '\n';
el.innerText += greeter(user1);