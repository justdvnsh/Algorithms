// -- Directions
// Return the array with only truthy value and remove 
// all falsy(null, NaN, 0, '', undefined, false) from it.
// -- Examples
// bouncy([1,2,3,false,0]) should return [1,2,3]
// bouncy(["h",'a','','','d',NaN]) should return ['h', 'a', 'd']

let bouncy = (arr) => {
	return arr.filter(Boolean);
}

console.log(bouncy(['a','b','c']))

module.exports = bouncy

/*

Alternatively

let bouncy = (arr) => {
	return arr.filter(current => {
		if(current) {
			return current;
		}
	})
}

*/
