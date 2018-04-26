// tests
const bouncy = require('./index');

test('bouncy function exists', () => {
  expect(bouncy).toBeDefined();
});

test('bouncy bounces the false value', () => {
  expect(bouncy([false, null])).toEqual([]);
});

test('bouncy bounces the false values', () => {
  expect(bouncy([1,2,3,null,false])).toEqual([1,2,3]);
});
