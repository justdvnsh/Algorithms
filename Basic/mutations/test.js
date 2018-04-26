// tests
const mutations = require('./index');

test('mutations function exists', () => {
  expect(mutations).toBeDefined();
});

test('mutations mutates a string', () => {
  expect(mutations(['just','q'])).toBeFalsy();
});

test('mutations mutates a string', () => {
  expect(mutations(['hello', 'h'])).toBeTruthy();
});
