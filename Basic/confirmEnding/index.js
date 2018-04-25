// -- Directions 
// Verify that the string ends with the target value given.
// -- Example
// confirmEnding("Any random string", "string") should return true
// confirmEnding("Marvel", "w") should return false.

let confirmEnding = (str, target) =>  {
  return str.substr(-target.length) === target;
}

console.log(confirmEnding("He has to give me a new name", "name"));

// Using EndsWith

let confirmEndingWithendsWith = (str, target) => {
	return str.endsWith(target)
}

module.exports = confirmEnding
module.exports = confirmEndingWithendsWith
