// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

let reverse = (str) => {
	return str.split('').reverse().join('');
}

console.log(reverse("apple"))

let reverseUsingLoop = (str) => {
	let reversedString = '';

	for (let char of str) {
		reversedString = char + reversedString;
	}

	return reversedString;
}

let reverseUsingReduce = (str) => {
	return str.split('').reduce((reversed, char) => {
		return char + reversed ; 
	}, '')
}

module.exports = reverse;
module.exports = reverseUsingLoop;
module.exports = reverseUsingReduce;

