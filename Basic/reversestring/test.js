const reverse = require('./index');
const reverseUsingLoop = require('./index');
const reverseUsingReduce = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

// -- Loop test


test('Reverse function exists', () => {
  expect(reverseUsingLoop).toBeDefined();
});

test('Reverse reverses a string', () => {
  
expect(reverseUsingLoop('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseUsingLoop('  abcd')).toEqual('dcba  ');
});

// -- Reduce test


test('Reverse function exists', () => {
  expect(reverseUsingReduce).toBeDefined();
});

test('Reverse reverses a string', () => {
  
expect(reverseUsingReduce('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseUsingReduce('  abcd')).toEqual('dcba  ');
});
