import * as Color from './';
import * as Type from '../types';

const sortedMock: Type.Color[] = [
  {
    name: 'Electromagnetic',
    rgb: [0, 0, 0]
  },
  {
    name: 'Asbestos',
    rgb: [127, 140, 141]
  },
  {
    name: 'Concrete',
    rgb: [149, 165, 166]
  },
  {
    name: 'Silver',
    rgb: [189, 195, 199]
  },
  {
    name: 'Clouds',
    rgb: [255, 255, 255]
  },
];
test('Check in a binary search if a color matches the A11y ratio', () => {
  Color.sort(Color.palette, Color.luminance);
  expect(Color.search(
    Color.palette,
    Color.palette[4],
    Type.A11yRatio.aaa
  )).toEqual(25);
  expect(Color.search(
    Color.palette,
    Color.palette[10],
    Type.A11yRatio.aaa
  )).toEqual([]);
  expect(Color.search(
    Color.palette,
    Color.palette[8],
    Type.A11yRatio.aa
  )).toEqual(26);
  expect(Color.search(
    sortedMock,
    sortedMock[0],
    Type.A11yRatio.aaa
  )).toEqual(2);
  expect(Color.search(
    Color.palette,
    Color.palette[20],
    Type.A11yRatio.aaa,
    Type.Search.upper
  )).toEqual(0);
  expect(Color.search(
    Color.palette,
    Color.palette[30],
    Type.A11yRatio.aaa,
    Type.Search.upper
  )).toEqual(7);
});
