// tests
const destroy = require('./index');
const destroyWithIncludes = require('./index');

test('destroy function exists', () => {
  expect(destroy).toBeDefined();
});

test('destroy destroys the elements', () => {
  expect(destroy([1,2,3],2,3)).toEqual([1]);
});

test('destroy destroys the elements', () => {
  expect(destroy(['hello','hello','tree'], "hello")).toEqual(['tree']);
});

// -- Using Includes


test('destroy function exists', () => {
  expect(destroy).toBeDefined();
});

test('destroy destroys the elements', () => {
  expect(destroy([1,2,3],2,3)).toEqual([1]);
});

test('destroy destroys the elements', () => {
  expect(destroy(['hello','hello','tree'], 'hello')).toEqual(['tree']);
});

