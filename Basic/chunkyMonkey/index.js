// -- Directions
// chunk the given array into given number number of arrays.
// -- Examples
// chunk([1,2,3,4,5,6,7,8], 4) should return [[1,2,3,4], [5,6,7,8]]
// chunk(["a","b","c","d"], 2) should return [["a","b"],["c", "d"]]


let chunk = (arr, size) => {
	let array = [];
	for(let i = 0; i < arr.length; i+=size){
		array.push(arr.slice(i, i+size));
	}
	return array;
}

console.log(chunk(['a','b','c','d'], 1));

/*
* this same thing could have been very easily done by 
* the while and do while loops.
*/

module.exports = chunk
