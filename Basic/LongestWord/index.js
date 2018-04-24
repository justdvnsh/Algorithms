// -- Directions
// Find the Longest word in the given string.
// -- Examples
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5. 

let findLongestWord = (str) => {
  return str.split(' ').reduce((prev, current) => {
    if (prev.length > current.length) {
      return prev;
    } else {
      return current;
    }
  }, '').length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

let findLongestWordWithSort = (str) => {
	return str.split(' ').sort(( a, b ) => {
		return b.length - a.length
	})[0].length;
}

module.exports = findLongestWord
module.exports = findLongestWordWithSort


