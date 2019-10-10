import * as Hashtbl from '../';

describe('Compute Hash', () => {
  test('compute hash from key string to array index', () => {
    expect(Hashtbl.computeHash({
      s: 'Soothing Breeze',
      l: 8,
    })).toBe(6);
    expect(Hashtbl.computeHash({
      s: 'Electromagnetic',
      l: 8,
    })).toBe(7);
    expect(Hashtbl.computeHash({
      s: 'Lucky Point',
      l: 8,
    })).toBe(7);
  });
})
