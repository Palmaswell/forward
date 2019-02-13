import * as Util from './';

test('if a number is prime', () => {
  expect(Util.isPrime(2)).toBe(false);
  expect(Util.isPrime(3)).toBe(true);
  expect(Util.isPrime(5)).toBe(true);
})
