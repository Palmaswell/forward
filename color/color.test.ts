import * as Color from './color';

test('sRGB Relative luminance in colorimetric spaces', () => {
  expect(Color.luminance([255, 255, 255])).toEqual(1);
  expect(Color.luminance([0, 0, 0])).toEqual(0);
})

test('sRGB Calculate the contrast ratio', () => {
  expect(Color.contrast([227, 178, 60], [66, 62, 55])).toEqual(5.42);
})
