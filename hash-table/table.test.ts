import * as Hashtbl from './';
import * as Type from '../types';

const arrayMock: Type.Color = [
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

test('create a hashtable an initialize empty buckets', () => {
  expect(Hashtbl.create(2)).toMatchObject({
    bucketArray: [undefined, undefined]
  });
  expect(Hashtbl.create(3)).toMatchObject({
    bucketArray: [undefined, undefined, undefined]
  });
});

test('add item to the hash table', () => {
  const hashTabl = Hashtbl.create(15);
  hashTabl.set(arrayMock[0]);
  hashTabl.set(arrayMock[3]);
  expect(hashTabl.bucketArray[4]).toEqual(arrayMock[0]);
  expect(hashTabl.bucketArray[9]).toEqual(arrayMock[3]);
});

test('delete item from hash table', () => {
  const hashTabl = Hashtbl.create(15);
  hashTabl.set(arrayMock[0]);
  expect(hashTabl.bucketArray[4]).toEqual(arrayMock[0]);
  hashTabl.delete(arrayMock[0].name);
  expect(hashTabl.bucketArray[4]).toEqual(undefined);
});

test('find item from hash table', () => {
  const hashTabl = Hashtbl.create(20);
  hashTabl.set(arrayMock[0]);
  expect(hashTabl.bucketArray[9]).toEqual(arrayMock[0]);
  expect(hashTabl.get(arrayMock[0].name)).toEqual(arrayMock[0]);
});


test('create a node object for a linked list', () => {
  expect(Hashtbl.createNode({
    name: 'C64 Purple',
    type: Type.PaletteCase.c64_purple,
    rgb: [112, 111, 211],
    aaa: [{
      name: 'Eye Of Newt',
      type: Type.PaletteCase.eye_of_newt,
      rgb: [179, 57, 57]
    }],
    aa: [{
      name: 'Eye Of Newt',
      type: Type.PaletteCase.eye_of_newt,
      rgb: [179, 57, 57]
    }]
  })).toEqual({
    next: null,
    value: {
      name: 'C64 Purple',
      type: Type.PaletteCase.c64_purple,
      rgb: [112, 111, 211],
      aaa: [{
        name: 'Eye Of Newt',
        type: Type.PaletteCase.eye_of_newt,
        rgb: [179, 57, 57]
      }],
      aa: [{
        name: 'Eye Of Newt',
        type: Type.PaletteCase.eye_of_newt,
        rgb: [179, 57, 57]
      }]
    }
  });
});
