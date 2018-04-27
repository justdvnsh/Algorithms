// tests
const rot13 = require('./index');
const rot13UsingReplace = require('./index');

test('rot13 function exists', () => {
  expect(rot13).toBeDefined();
});

test('rot13 decodes a string', () => {
  expect(rot13('SERR CVMMN')).toEqual('FREE PIZZA');
});

test('rot13 decodes a string', () => {
  expect(rot13('SERR YBIR ?')).toEqual('FREE LOVE ?');
});

// -- Using replace


test('rot13UsingReplace function exists', () => {
  expect(rot13UsingReplace).toBeDefined();
});

test('rot13UsingReplace decodes a string', () => {
  expect(rot13UsingReplace('SERR CVMMN')).toEqual('FREE PIZZA');
});

test('rot13UsingReplace decodes a string', () => {
  expect(rot13UsingReplace('SERR YBIR ?')).toEqual('FREE LOVE ?');
});
