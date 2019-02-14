import * as Util from './';

test('if a number is prime', () => {
  expect(Util.isPrime(11)).toBe(true);
  expect(Util.isPrime(7)).toBe(true);
  expect(Util.isPrime(24)).toBe(false);
  expect(Util.isPrime(10)).toBe(false);
})
