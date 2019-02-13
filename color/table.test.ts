import * as Color from './';
test('hash function', () => {
  expect(Color.computeHash({
    s: 'Soothing Breeze',
    l: 8,
    t: 0,
    i: 0
  })).toBe(1);
})
