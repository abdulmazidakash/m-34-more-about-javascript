//global execution context


let a = 5;

function add(num1, num2){
	const result = num1 + num2 + a;
	return result;
}

const result = add(4, 5);
console.log(result);