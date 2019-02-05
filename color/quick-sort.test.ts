import * as Color from './quick-sort';

test('quick sort', () => {
  expect(Color.quickSort([11.8, 14.1, 21.3, 8.5, 16.7, 5.7])).toEqual([5.7, 8.5, 11.8, 14.1, 16.7, 21.3]);
})
