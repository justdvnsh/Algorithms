// test
const titleCase = require('./index');
const titleCaseWithReplace = require('./index');

test('titleCase function exists', () => {
  expect(titleCase).toBeDefined();
});

test('titleCase returns the strig with first letter capital', () => {
  expect(titleCase('hello i am a douche')).toEqual('Hello I Am A Douche');
});


test('titleCase returns the string with first letter capital', () => {
  expect(titleCase('i want a girlfriend')).toEqual('I Want A Girlfriend');
});

// -- Using Replace


test('titleCaseWith Replace function exists', () => {
  expect(titleCaseWithReplace).toBeDefined();
});

test('titleCaseWithReplace returns the strig with first letter capital', () => {
  expect(titleCaseWithReplace('i am lonely')).toEqual('I Am Lonely');
});

test('titleCaseWithReplace returns the string with first letter capital', () => {
  expect(titleCaseWithReplace('will i get a girlfriend')).toEqual('Will I Get A Girlfriend');
});
