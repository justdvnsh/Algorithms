// --- Directions
// Given an integer, return an integer that is 
// the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

let reverseInt = (num) => {
	return Math.sign(num) * parseInt(num.toString().split('').reverse().join(''));
}

console.log(reverseInt(-90))

/*
* Alternatively we can split the return 
* statement into multiple lines.
*/

module.exports = reverseInt;
