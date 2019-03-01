import * as Color from './color';
import * as Type from '../types';
import { palette } from './raw-palette';

test('sRGB Relative luminance in colorimetric spaces', () => {
  expect(Color.luminance([255, 255, 255])).toEqual(1);
  expect(Color.luminance([0, 0, 0])).toEqual(0);
  expect(Color.luminance(palette[5].rgb)).toEqual(0.5023201943423656);
  expect(Color.luminance(palette[6].rgb)).toEqual(0.7711529349131155);
});

test('sRGB Calculate the contrast ratio', () => {
  expect(Color.contrastRatio([227, 178, 60], [66, 62, 55])).toEqual(5.42);
  expect(Color.contrastRatio([66, 62, 55], [227, 178, 60])).toEqual(5.42);
  expect(Color.contrastRatio(palette[5].rgb, palette[1].rgb)).toEqual(6.41);
  expect(Color.contrastRatio(palette[1].rgb, palette[5].rgb)).toEqual(6.41);
});

const arrayMock: Type.Color[] = [
  {
    name: 'Soothing Breeze',
    rgb: [178, 190, 195]
  },
  {
    name: 'City Lights',
    rgb: [223, 228, 234]
  },
  {
    name: 'Concrete',
    rgb: [149, 165, 166]
  }
];
test('tranform RGB array into rgb string', () => {
  expect(Color.toRGBString(arrayMock[0].rgb)).toEqual('rgb(178, 190, 195)');
  expect(Color.toRGBString(arrayMock[1].rgb)).toEqual('rgb(223, 228, 234)');
  expect(Color.toRGBString(arrayMock[2].rgb)).toEqual('rgb(149, 165, 166)');
});

