import * as Color from './quick-sort';

test('quick sort', () => {
  expect(Color.quickSort([11.8, 14.1, 21.3, 8.5, 16.7, 5.7])).toEqual([5.7, 8.5, 11.8, 14.1, 16.7, 21.3]);
})

test('swap array elements', () => {
  const arrayMock = [1, 2, 3, 4, 5];
  const arrayMock2 = [1, 3];
  expect(Color.swap(arrayMock, 1, 2)).toEqual([1, 3, 2, 4, 5]);
  expect(Color.swap(arrayMock, 1, 2)).toBe(arrayMock);
  expect(Color.swap(arrayMock, 3, 4)).toEqual([1, 2, 3, 5, 4]);
  expect(Color.swap(arrayMock2, 0, 1)).toEqual([3, 1]);
})
