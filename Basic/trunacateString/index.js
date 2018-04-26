// -- Directions
// If the first argument(string) of the function is longer than 
// the given number(second argument), return first arg + ...
// but if the number is  > 3 then the ... should add 
// to the string length else if number <= 3 ... 
// should not add to the length
// -- Examples
// trunacate('Absolutely Long', 2) should return Ab...
// trunacate('A-',1) should return A...


let trunacate = (str, num) => {
	if(str.length > num){
		return str.slice(0, num > 3 ? num - 3 : num) + '...';
	}
	return str;
}

console.log(trunacate("Hello, i am a douche", '4'))

module.exports = trunacate
