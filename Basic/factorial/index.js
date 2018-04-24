// -- Directions
//Write a program to find out the factorial of a number
// -- Examples
// factorial(5) = 120;
// factorial(0) = 1;
// factorial(2) = 2;

let factorial = (num) => {
	if(num === 0 || num === 1) {
		return 1;
	}

	for(let i = num-1; i>=1; i--){
		num = num * i;
	}

	return num;
}

console.log(factorial(20))

let factorialWithRecursion = (num) => {
	if(num === 0 || num === 1){
		return 1;
	} else if ( num < 0 ){
		return -1
	} else {
		return (num * 
		factorialWithRecursion( num - 1 ))
	}
}

/*
* Alternatively we can also use while or 
* Do-while loops for the same.
*/

module.exports = factorial
module.exports = factorialWithRecursion

