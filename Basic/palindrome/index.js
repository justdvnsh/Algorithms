// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

let palindrome = (str) => {
	return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

console.log(palindrome('greetings'));

let palindromeWithEvery = (str) => {
	return str.replace(/[\W_]/g, '').toLowerCase().split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}

module.exports = palindrome;
module.exports = palindromeWithEvery;
