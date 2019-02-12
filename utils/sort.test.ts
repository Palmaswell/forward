import * as Util from './';

test('swap array elements', () => {
  const arrayMock = [1, 2, 3, 4, 5];
  const arrayMock2 = [1, 3];
  const arrayMock3 = [10, 3, 11, 15, 19, 1];
  Util.swap(arrayMock, 1, 2);

  expect(arrayMock).toEqual([1, 3, 2, 4, 5]);
  expect(arrayMock).toBe(arrayMock);

  Util.swap(arrayMock, 2, 3);
  expect(arrayMock).toEqual([1, 3, 4, 2, 5]);
  Util.swap(arrayMock2, 0, 1);
  expect(arrayMock2).toEqual([3, 1]);
  Util.swap(arrayMock3, 2, 5)
  expect(arrayMock3).toEqual([10, 3, 1, 15, 19, 11]);
});

test('quick sort', () => {
  const arrayMock = [10, 3, 11, 15, 19, 1];
  const arrayMock2 = [11.8, 14.1, 21.3, 8.5, 16.7, 5.7];
  Util.quickSort({
    a: arrayMock,
    lo: 0,
    hi: arrayMock.length - 1
  });
  Util.quickSort({
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
  expect(Util.partition({
    a: arrayMock,
    lo: 0,
    hi: arrayMock.length - 1,
    p: arrayMock[Math.floor((0 + (arrayMock.length - 1)) / 2)]
  })).toEqual({lo: 3, hi: 2});
  expect(Util.partition({
    a: arrayMock2,
    lo: 0,
    hi: arrayMock.length - 1,
    p: arrayMock2[Math.floor((0 + (arrayMock2.length - 1)) / 2)]
  })).toEqual({lo: 5, hi: 4});
  expect(Util.partition({
    a: arrayMock2,
    lo: 0,
    hi: arrayMock.length - 1,
    p: arrayMock2[1]
  })).toEqual({lo: 3, hi: 2});
});
