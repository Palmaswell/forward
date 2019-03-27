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

const sortedMockII: Type.Color[] = [
  {
    name: 'Blue Nights',
    rgb: [59, 68, 70]
  },
  {
    name: 'Synthetic Pumpkin',
    rgb: [255, 121, 63]
  },
  {
    name: 'Celestial Green',
    rgb: [51, 217, 178]
  },
  {
    name: 'Mandarin Sorbet',
    rgb: [255, 177, 66]
  },
  {
    name: 'City Lights',
    rgb: [223, 228, 234]
  }
];

test('check in the binary search if a color meets the AAA color contrast', () => {
  expect(Color.search(
    sortedMockII,
    sortedMockII[0],
    Type.A11yRatio.aaa,
  )).toEqual(4);
});
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
