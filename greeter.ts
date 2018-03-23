function greeter(person) {
	return "Hello, " + person;
}

let user = 'Amy User';

var el: HTMLElement = document.getElementById('display');
alert(el.id);

// el.innerHTML = greeter(user);
el.innerText = greeter(user);