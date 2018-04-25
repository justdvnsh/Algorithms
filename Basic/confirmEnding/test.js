// tests
const confirmEnding = require('./index');
const confirmEndingWithendsWith = require('./index');

test('confirmEnding function exists', () => {
  expect(confirmEnding).toBeDefined();
});

test('confirmEnding returns ture or false', () => {
  expect(confirmEnding('Hello', 'o')).toBeTruthy();
});

test('confirmEnding returns true or false', () => {
  expect(confirmEnding('Will i get a girlfriend', 'get')).toBeFalsy();
});

// -- EndsWith

test('confirmEndingWithendsWith function exists', () => {
  expect(confirmEndingWithendsWith).toBeDefined();
});

test('confirmEndingWithendsWith returns ture or false', () => {
  expect(confirmEndingWithendsWith('Hello', 'o')).toBeTruthy();
});

test('confirmEndingWithendsWith returns true or false', () => {
  expect(confirmEndingWithendsWith('Will i get a girlfriend', 'get')).toBeFalsy();
});
