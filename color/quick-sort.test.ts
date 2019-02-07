import * as Color from './quick-sort';

// test('quick sort', () => {
//   expect(Color.quickSort([11.8, 14.1, 21.3, 8.5, 16.7, 5.7])).toBe([5.7, 8.5, 11.8, 14.1, 16.7, 21.3]);
// })

test('swap array elements', () => {
  const arrayMock = [1, 2, 3, 4, 5];
  expect(Color.swap(arrayMock, 1, 2)).toEqual([1, 3, 2, 4, 5]);
  expect(Color.swap([1, 3], 0, 1)).toEqual([3, 1]);
  expect(Color.swap(arrayMock, 1, 2)).toBe(arrayMock);
})
