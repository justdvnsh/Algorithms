
// tests
const largestOfFour = require('./index');
const largestOfFourWithReduce = require('./index');

test('largestOfFour function exists', () => {
  expect(largestOfFour).toBeDefined();
});

test('largestOfFour gives an array', () => {
  expect(largestOfFour([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]])).toEqual([4,8,12,16]);
});

// -- With Reduce

test('largestOfFourWithReduce function exists', () => {
  expect(largestOfFourWithReduce).toBeDefined();
});

test('largestOfFourWithReduce gives an array', () => {
  expect(largestOfFourWithReduce([[3,4,3,5], [1,1,2,3], [5,5,5,5], [6,7,8,9]])).toEqual([5,3,5,9]);
});

