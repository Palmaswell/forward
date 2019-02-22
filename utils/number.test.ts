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

test('binary search check if a number is in a sorted array', () => {
  const sortedNumArr = [1, 3, 4, 7, 9, 12, 23, 25, 28, 33, 35, 39, 40, 42, 44, 47];
  expect(Util.search(sortedNumArr, 44)).toBe(14);
  expect(Util.search(sortedNumArr, 47)).toBe(15);
  expect(Util.search(sortedNumArr, 23)).toBe(6);
  expect(Util.search(sortedNumArr, 5)).toBe(3);
  expect(Util.search(sortedNumArr, 2)).toBe(1);
  expect(Util.search(sortedNumArr, 41)).toBe(13);
});
