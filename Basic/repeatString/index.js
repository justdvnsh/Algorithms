// -- Directions 
// Repeat the given string a given number of times.
// -- Examples
// repeat('abc',3) should return abcabcabc
// repeat('*',2) should return **

let repeat = (str, num) => {
	if(num < 0) {
		return '';
	} else if(num === 1) {
		return str;
	}

	return str + repeat(str, num - 1);
};

console.log(repeat('hello', 2));

let repeatWithrepeat = (str, num) => {
	if (num > 0) {
	return str.repeat(num);
	} else {
	return '';
	}
};

module.exports = repeat
module.exports = repeatWithrepeat
