//tests
const factorial = require('./index');
const factorialWithRecursion = require('./index');

test('Factorial function exists', () => {
  expect(factorial).toBeDefined();
});

test('Factorial returns a factorial', () => {
  expect(factorial(5)).toEqual(120);
});

test('Factorial returns a factorial', () => {
  expect(factorial(10)).toEqual(3628800);
});

test('Factorial returns a factorial', () => {
  expect(factorial(0)).toEqual(1);
});

// -- Recursoin test

test('Factorial function exists', () => {
  expect(factorialWithRecursion).toBeDefined();
});

test('Factorial returns a factorial', () => {
  
expect(factorialWithRecursion(5)).toEqual(120);
});

test('Factorial returns a factorial', () => {
  
expect(factorialWithRecursion(10)).toEqual(3628800);
});

test('Factorial returns a factorial', () => {
  expect(factorialWithRecursion(0)).toEqual(1);
});
