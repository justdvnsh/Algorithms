// tests
const repeat = require('./index');
const repeatWithrepeat = require('./index');

test('Repeat function exists', () => {
  expect(repeat).toBeDefined();
});

test('Repeat repeats a string', () => {
  expect(repeat('gf',2)).toEqual('gfgf');
});

test('repeat repeats a string', () => {
  expect(repeat('girlfriend', -1)).toEqual('');
});

// -- Repeat with Repeat test


test('RepeatWithrepeat function exists', () => {
  expect(repeatWithrepeat).toBeDefined();
});

test('RepeatWithrepeat repeats a string', () => {
  
expect(repeatWithrepeat('douche', 1)).toEqual('douche');
});

test('RepeatWithrepeat repeats a string', () => {
  expect(repeatWithrepeat('gf', 4)).toEqual('gfgfgfgf');
});
