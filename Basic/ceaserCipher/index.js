// -- Directions
// Ceasers cipher or Shift cipher is quite 
// famous encoding technique.
// Every letter is 13 letter ahead of itself.
// -- Examples 
// rot13("SERR PBQR PNZC") should decode to 
// "FREE CODE CAMP"
// rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR 
// YNML SBK.") should decode to "THE QUICK BROWN 
// DOG JUMPED OVER THE LAZY FOX."

let rot13 = (str) => {
	return str.split('').map.call(str, (char) => {
		x = char.charCodeAt(0);

		if (x < 65 || x > 90) {
			return String.fromCharCode(x);
		}

		else if (x < 78) {
			return String.fromCharCode(x + 13);
		}

		return String.fromCharCode(x - 13);
	}).join('');
}

console.log(rot13("SERR PBQR PNZC"))

let rot13UsingReplace = (str) => {
	return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

module.exports = rot13
module.exports = rot13UsingReplace
