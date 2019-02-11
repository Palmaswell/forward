import * as Color from './quick-sort';

test('swap array elements', () => {
  const arrayMock = [1, 2, 3, 4, 5];
  const arrayMock2 = [1, 3];
  expect(Color.swap(arrayMock, 1, 2)).toEqual([1, 3, 2, 4, 5]);
  expect(Color.swap(arrayMock, 1, 2)).toBe(arrayMock);
  expect(Color.swap(arrayMock, 3, 4)).toEqual([1, 2, 3, 5, 4]);
  expect(Color.swap(arrayMock2, 0, 1)).toEqual([3, 1]);
  expect(Color.swap([10, 3, 11, 15, 19, 1], 2, 5)).toEqual([10, 3, 1, 15, 19, 11]);
});

test('quick sort', () => {
  const arrayMock = [10, 3, 11, 15, 19, 1];
  const arrayMock2 = [11.8, 14.1, 21.3, 8.5, 16.7, 5.7];
  Color.quickSort({
    a: arrayMock,
    lo: 0,
    hi: arrayMock.length - 1
  });
  Color.quickSort({
    a: arrayMock2,
    lo: 0,
    hi: arrayMock.length - 1
  });

  expect(arrayMock).toEqual([1, 3, 10, 11, 15, 19]);
  expect(arrayMock2).toEqual([5.7, 8.5, 11.8, 14.1, 16.7, 21.3]);
});

test('return next partition index', () => {
  const arrayMock = [10, 3, 11, 15, 19, 1];
  const arrayMock2 = [11.8, 14.1, 21.3, 8.5, 16.7, 5.7];
  expect(Color.partition({
    a: arrayMock,
    lo: 0,
    hi: arrayMock.length - 1,
    p: arrayMock[Math.floor((0 + (arrayMock.length - 1)) / 2)]
  })).toEqual({lo: 3, hi: 2});
  expect(Color.partition({
    a: arrayMock2,
    lo: 0,
    hi: arrayMock.length - 1,
    p: arrayMock2[Math.floor((0 + (arrayMock2.length - 1)) / 2)]
  })).toEqual({lo: 5, hi: 4});
  expect(Color.partition({
    a: arrayMock2,
    lo: 0,
    hi: arrayMock.length - 1,
    p: arrayMock2[1]
  })).toEqual({lo: 3, hi: 2});
});
