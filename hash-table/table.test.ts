import * as Color from '../color';
import * as Hashtbl from './';
import * as Type from '../types';

const arrayMock: any = [
  {
    name: 'C64 Purple',
    rgb: [112, 111, 211]
  },
  {
    name: 'Liberty',
    rgb: [71, 71, 135]
  },
  {
    name: 'Synthetic Pumpkin',
    rgb: [255, 121, 63]
  },
  {
    name: 'Chilean Fire',
    rgb: [205, 97, 51]
  },
  {
    name: 'Lynx white',
    rgb: [245, 246, 250],
    aaa: [{
      name: 'Eye Of Newt',
      rgb: [179, 57, 57]
    }],
    aa: [{
      name: 'Eye Of Newt',
      rgb: [179, 57, 57]
    }]
  }
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

test('add item to hash table with an empty bucket array slot', () => {
  const hashTabl = Hashtbl.create(15);
  hashTabl.set(arrayMock[0]);
  hashTabl.set(arrayMock[3]);
  expect(hashTabl.bucketArray[4]).toEqual({
    next: null,
    value: arrayMock[0]
  });
  expect(hashTabl.bucketArray[9]).toEqual({
    next: null,
    value: arrayMock[3]
  });
});

test('find free bucket for an object with colliding computed hashes', () => {
  Color.sort(Color.palette, Color.luminance);
  const hashTabl = Hashtbl.create(Color.palette.length);
  const white = {
    name: 'White',
    rgb: [255, 255, 255]
  };
  const LuckyPoint = {
    name: 'Lucky Point',
    rgb: [44, 44, 84]
  };

  hashTabl.set(white as Type.colorEnhanced);
  expect(hashTabl.bucketArray[18]).toEqual({
    next: null,
    value: white
  });
  hashTabl.set(LuckyPoint as Type.colorEnhanced);
  expect(hashTabl.bucketArray[18]).toEqual({
    next: {
      next: null,
      value: LuckyPoint
    },
    value: white
  });
  hashTabl.set(white as Type.colorEnhanced);
  expect(hashTabl.bucketArray[18]).toEqual({
    next: {
      next: {
        next: null,
        value: white
      },
      value: LuckyPoint
    },
    value: white
  });
});

test('delete linked list nodes from hash table', () => {
  const hashTbl = Hashtbl.create(15);
  hashTbl.set(arrayMock[0]);
  expect(hashTbl.bucketArray[4]).toEqual({
    next: null,
    value: arrayMock[0]
  });
  hashTbl.delete(arrayMock[0]);
  expect(hashTbl.bucketArray[4]).toEqual(null);
});


test('find item from hash table', () => {
  const hashTabl = Hashtbl.create(20);
  hashTabl.set(arrayMock[0]);
  expect(hashTabl.bucketArray[9]).toEqual({
    next: null,
    value: arrayMock[0]
  });
  hashTabl.set(arrayMock[0]);
  expect(hashTabl.get('C64 Purple')).toEqual(arrayMock[0]);
});

test('create a node object for a linked list', () => {
  const color = {
    name: 'C64 Purple',
    rgb: [112, 111, 211],
    aaa: [{
      name: 'Eye Of Newt',
      rgb: [179, 57, 57]
    }],
    aa: [{
      name: 'Eye Of Newt',
      rgb: [179, 57, 57]
    }]
  };
  expect(Hashtbl.createNode(color as Type.colorEnhanced)).toEqual({
    next: null,
    value: {
      name: 'C64 Purple',
      rgb: [112, 111, 211],
      aaa: [{
        name: 'Eye Of Newt',
        rgb: [179, 57, 57]
      }],
      aa: [{
        name: 'Eye Of Newt',
        rgb: [179, 57, 57]
      }]
    }
  });
});
