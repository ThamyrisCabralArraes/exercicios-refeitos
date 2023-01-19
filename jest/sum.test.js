const { sum } = require('./sum');

test('sums two values', () => {
  expect(sum(4, 1)).toEqual(5);
});
