console.log(1);
console.log(2);

// console.log(3);
// doSomething();
// setTimeout(doSomething())

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

setTimeout(() => {
	console.log('lazy logged')
}, 8000);


console.log(4);
console.log(5);
console.log(6);

function doSomething(){
	console.log(3);
}

