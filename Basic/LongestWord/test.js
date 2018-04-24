// tests
const findLongestWord = require('./index');
const findLongestWordWithSort = require('./index');

test('FindLongestWord function exists', () => {
  expect(findLongestWord).toBeDefined();
});

test('findLongestWord gives a number', () => {
  expect(findLongestWord('The quick brown fox jumped over the lazy dog')).toEqual(6);
});


test('findLongestWord gives a number', () => {
  expect(findLongestWord('a aa aaa aaaa aaaaa')).toEqual(5);
});

// -- With Sort


test('FindLongestWordWithSort function exists', () => {
  expect(findLongestWordWithSort).toBeDefined();
});

test('findLongestWordWithSort gives a number', () => {
  expect(findLongestWordWithSort('The quick brown fox jumped over the lazy dog')).toEqual(6);
});

test('findLongestWordWithSort gives a number', () => {
  expect(findLongestWordWithSort('a aa aaa aaaa aaaaa')).toEqual(5);
});
