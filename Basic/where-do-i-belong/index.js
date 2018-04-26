// -- Directions
// insert teh second argument into the first one(an array)
// and then find the index of the element inserted
// after sorting out the array.
// -- Examples
// belong([1,2,43],3) should return 2
// belong([40,50,60],45) should return 1

let belong = (arr, num) => {
	arr.push(num);
	arr.sort((a,b) => a - b);
	return arr.indexOf(num);
}

console.log(belong([40,60],50))

let belongWithFindIndex = (arr, num) => {
	let index = arr.sort((curr, next) => curr > next)
			.findIndex((currNum) => num <= currNum)
	return index === -1 ? arr.length : index;
}

// For those who are wondering,
// => is the arrow function and <= is just the basic 
// less than equal to comparison operator.

module.exports = belong
module.exports = belongWithFindIndex
