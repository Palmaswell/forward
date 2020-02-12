import * as Impl from '../impl';
import * as SystemMap from '../system-map';
import {sort, palette, luminance} from '../../color';
import { ColorEnhanced } from '../../color/types';

[Impl, SystemMap].forEach(Hashtbl => {
  const arrayMock: any = [
    {
      name: 'C64 Purple',
      rgb: [112, 111, 211],
    },
    {
      name: 'Liberty',
      rgb: [71, 71, 135],
    },
    {
      name: 'Synthetic Pumpkin',
      rgb: [255, 121, 63],
    },
    {
      name: 'Chilean Fire',
      rgb: [205, 97, 51],
    },
    {
      name: 'Lynx white',
      rgb: [245, 246, 250],
      aaa: [
        {
          name: 'Eye Of Newt',
          rgb: [179, 57, 57],
        },
      ],
      aa: [
        {
          name: 'Eye Of Newt',
          rgb: [179, 57, 57],
        },
      ],
    },
  ];

  test('create a hashtable an initialize empty buckets', () => {
    expect(Hashtbl.create(3)).toMatchObject({});
  });

  test('delete linked list nodes from hash table', () => {
    const hashTbl = Hashtbl.create(15);
    hashTbl.set(arrayMock[0]);
    expect(hashTbl.get(arrayMock[0].name)).toEqual({
      name: 'C64 Purple',
      rgb: [112, 111, 211],
    });
    hashTbl.delete(arrayMock[0]);
    expect(hashTbl.get(arrayMock[0].name)).toBeFalsy();
  });

  test('find item from hash table', () => {
    const hashTabl = Hashtbl.create(20);
    hashTabl.set(arrayMock[0]);
    expect(hashTabl.get(arrayMock[0].name)).toEqual(arrayMock[0]);
    hashTabl.set(arrayMock[0]);
    expect(hashTabl.get('C64 Purple')).toEqual(arrayMock[0]);
  });

  test('find an item allocated in a linked list bucket', () => {
    sort(palette, luminance);
    const hashTabl = Hashtbl.create(palette.length);
    const white = {
      name: 'White',
      rgb: [255, 255, 255],
    };
    const LuckyPoint = {
      name: 'Lucky Point',
      rgb: [44, 44, 84],
    };
    hashTabl.set(white as ColorEnhanced);
    hashTabl.set(LuckyPoint as ColorEnhanced);
    expect(hashTabl.get('Lucky Point')).toEqual(LuckyPoint);
    expect(hashTabl.get('White')).toEqual(white);
  });
});
