import * as Util from './';

test('check if a number is a prime number', () => {
  expect(Util.isPrime(11)).toBe(true);
  expect(Util.isPrime(7)).toBe(true);
  expect(Util.isPrime(24)).toBe(false);
  expect(Util.isPrime(10)).toBe(false);
});

test('find the closest next prime number', () => {
  expect(Util.findPrime(8)).toBe(11);
  expect(Util.findPrime(14)).toBe(17);
});
