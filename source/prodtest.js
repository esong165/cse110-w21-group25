const test = require('./test.js');
test('adds 1 + 2 to equal 3', () => {
  expect(testFunc(1, 2)).toBe(3);
});
