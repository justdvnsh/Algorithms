// tests
const belong = require('./index');
const belongWithFindIndex = require('./index');

test('belong function exists', () => {
  expect(belong).toBeDefined();
});

test('belong return the index', () => {
  expect(belong([20,10,43],22)).toEqual(2);
});

test('belong returns the index', () => {
  expect(belong([1,2,3,4],5)).toEqual(4);
});

// -- With FindIndex


test('belong function exists', () => {
  expect(belongWithFindIndex).toBeDefined();
});

test('belong return the index', () => {
  expect(belongWithFindIndex([20,10,43],22)).toEqual(2);
});

test('belong returns the index', () => {
  expect(belongWithFindIndex([1,2,3,4],5)).toEqual(4);
});

