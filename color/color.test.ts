import * as Color from './color';
import { palette } from './palette';

test('sRGB Relative luminance in colorimetric spaces', () => {
  expect(Color.luminance([255, 255, 255])).toEqual(1);
  expect(Color.luminance([0, 0, 0])).toEqual(0);
  expect(Color.luminance(palette[5].rgb)).toEqual(0.5023201943423656);
  expect(Color.luminance(palette[6].rgb)).toEqual( 0.7711529349131155);
});

test('sRGB Calculate the contrast ratio', () => {
  expect(Color.contrastRatio([227, 178, 60], [66, 62, 55])).toEqual(5.42);
  expect(Color.contrastRatio(palette[5].rgb, palette[1].rgb)).toEqual(6.41);
});
