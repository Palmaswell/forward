import * as Hashtbl from '../hash-table';
import * as Type from '../types';

const arrayMock = [
  {
    name: 'C64 Purple',
    type: Type.PaletteCase.c64_purple,
    rgb: [112, 111, 211]
  },
  {
    name: 'Liberty',
    type: Type.PaletteCase.liberty,
    rgb: [71, 71, 135]
  },
  {
    name: 'Synthetic Pumpkin',
    type: Type.PaletteCase.synthetic_pumpkin,
    rgb: [255, 121, 63]
  },
  {
    name: 'Chilean Fire',
    type: Type.PaletteCase.chilean_fire,
    rgb: [205, 97, 51]
  },
];

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

test('create a new hash table with empty buckets', () => {
  expect(Hashtbl.create(2)).toEqual([
    undefined,
    undefined
  ]);
  expect(Hashtbl.create(5)).toEqual([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ]);
});
