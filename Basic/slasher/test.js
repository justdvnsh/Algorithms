// tests
const slasher = require('./index');

test('slasher function exists', () => {
  expect(slasher).toBeDefined();
});

test('slasher slashes an array', () => {
  expect(slasher([1,2,23,4],2)).toEqual([23,4]);
});

test('slasher slashes an array', () => {
  expect(slasher(['a','b','c'],4)).toEqual([]);
});
