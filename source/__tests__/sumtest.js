const testFunc = require('../testFunc');
test('adds 1 + 2 to equal 3', () => {
  expect(testFunc(1, 2)).toBe(3);
});
