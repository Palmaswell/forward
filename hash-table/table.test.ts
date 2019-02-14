import * as Table from '../hash-table';
test('compute hash from key string', () => {
  expect(Table.computeHash({
    s: 'Soothing Breeze',
    l: 8,
  })).toBe(6);
  expect(Table.computeHash({
    s: 'Electromagnetic',
    l: 8,
  })).toBe(7);
  expect(Table.computeHash({
    s: 'Lucky Point',
    l: 8,
  })).toBe(7);
});
