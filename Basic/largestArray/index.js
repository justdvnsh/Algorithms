// -- Directions
// Return an array consisting of the largest number from each provided sub-array
// -- Examples
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001]

let largestOfFour = (arr) => {
  return arr.map((current) => {
    return Math.max.apply(null, current);
  });
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

let largestOfFourWithReduce = (arr) => {
	return arr.map((current) => {
		return current.reduce((prev, curr) => {
			return (curr > prev) ? curr : prev;
		}, 0);
	});
}

module.exports = largestOfFour
module.exports = largestOfFourWithReduce
