// -- Directions
// Slash out the given number of elements from the begginning of 
// the array .
// -- Examples
// slasher([1,2,3], 2) should return [3]
// slasher(['i want','a gf', 'douche'], 2) should 
// return ['douche'].

let slasher = (arr, num) => {
	return arr.slice(arr.splice(0, num), arr.length);
}

console.log(slasher(['a','b','c'], 2))

// -- alternatively

/*
let slash = (arr, num) => {
	return arr.slice(num)
}
 // -- OR

let slash = (arr, num) => {
	arr.splice(0, num);
	return arr;
}
*/

module.exports = slasher
