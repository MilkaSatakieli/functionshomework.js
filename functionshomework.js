//Number to String function
function numberToString(n) {
	let result = n.toString();
	return result;
}
console.log(numberToString(10)); //output: "10"

//function to increase given number
function increase(n) {
	let result = n + 1;
	return result;
}
console.log(increase(8)); //output: 9

//function to decrease given number
function decrease(n) {
	let result = n - 1;
	return result;
}
console.log(decrease(5)); //output: 4

//function that adds two numbers(parameters)
function add(x, y) {
	let sum = x + y;
	return sum;
}
console.log(add(10, 5)); //output: 15

//function that substracts two numbers
function substract(x, y) {
	let diff = x - y;
	return diff;
}
console.log(substract(10, 5)); //output: 5

//function that multiply two numbers
function multiply(x, y) {
	let product = x * y;
	return product;
}
console.log(multiply(10, 5)); // output: 50

//function that divides two numbers
function divide(x, y) {
	let division = x / y;
	return division;
}
console.log(divide(10, 5)); // output: 2

//function that retruns squared number
function square(n) {
	let sqr = n * n;
	return sqr;
}
console.log(square(9)); // output: 81

//function that returns calculation of numbers that we choose
function calculate(operation, x, y) {
	let result = 0;
	switch (operation) {
		case '+':
			result = x + y;
			break;
		case '-':
			result = x - y;
			break;
		case '*':
			result = x * y;
			break;
		case '/':
			result = x / y;
			break;
		case '%':
			result = x % y;
			break;
	}
	return result;
}
console.log(calculate('*', 10, 6)); // output: 30

//boolean if true
function isGreaterThan(a, b) {
	let result = Boolean(a > b);
	return result;
}
console.log(isGreaterThan(7, 4) + ', a is larger than b'); // output: true, a is larger than b

//boolean if false
function isLessThan(a, b) {
	let result = Boolean(a < b);
	return result;
}
console.log(isLessThan(7, 14) + ', a is smaller than b'); // output: true, a is smaller than b

//boolean equal
function areEqual(a, b) {
	let result = Boolean(a == b);
	return result;
}
console.log(areEqual(7, 7) + ', a and b are equal'); // output: true, a are equal b

//return minimum value
function minimum(a, b) {
	return Math.min(a, b);
}
console.log(minimum(7, 4)); // output: 4

//return maximum value
function maximum(a, b) {
	let result = Mat.max(a, b);
	return result;
}
console.log(maximum(7, 4)); // output: 7

//return if even
function isEven(a, b) {
	if (num % 2) {
		return 'Even';
	}
}
console.log(isEven(4, 4)); // output: 'Even'

//return if value is odd number
function isOdd(num) {
	if (num % 2) {
		return false;
	} else {
		return true;
	}
}

console.log(isOdd(9));

//combine two strings with space
function combine(string1, string2) {
	let string = string1 + ' ' + string2;
	return string;
}
console.log(combine('Milka', 'Bijelic'));
//Create Circle
function creatCircle(radius) {
	const mathP = 3.14;
	let o = 2 * radius * mathP;
	let p = radius * radius * mathP;
	let Circle = {
		scope: o,
		area: p,
	};
	return Circle;
}
