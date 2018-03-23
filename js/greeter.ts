function greeter(person) {
	return "Hello, " + person;
}

let user = 'Pat';

var el: HTMLElement = document.getElementById('display');

// el.innerHTML = greeter(user);
el.innerText = greeter(user);
el.innerText += '\n';
el.innerText += "ya big nerd";