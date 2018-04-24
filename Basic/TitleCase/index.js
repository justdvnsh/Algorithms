// -- Directions
// Change the very first letter of every word to Upper case.
// -- Examples
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".

let titleCase = (str) => {
  return str.toLowerCase().split(' ').map((current) => {
    return current[0].toUpperCase() + current.slice(1);
  }).join(' ');
}

console.log(titleCase("I'm a little tea pot"));

let titleCaseWithReplace = (str) => {
	return str.toLowerCase().split(' ').map((current) => {
		return current.replace(current[0], current[0].toUpperCase());
	}).join(' ');
}

module.exports = titleCase
module.exports = titleCaseWithReplace
