// tests

const chunk = require('./index');

test('chunk function exists', () => {
  expect(chunk).toBeDefined();
});

test('chunk chunks an array', () => {
  expect(chunk([2,3,4,5], 3)).toEqual([[2,3,4], [5]]);
});

test('chunk chunks an array', () => {
  expect(chunk(['a','b','c','d'],4)).toEqual([['a','b','c','d']]);
});
