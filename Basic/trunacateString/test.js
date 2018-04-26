// tests

const trunacate = require('./index');

test('trunacate function exists', () => {
  expect(trunacate).toBeDefined();
});

test('trunacate trunacates a string', () => {
  expect(trunacate('Absolutely Longer', 2)).toEqual('Ab...');
});

test('trunacate trunacates a string', () => {
  expect(trunacate('A-', 1)).toEqual('A...');
});
