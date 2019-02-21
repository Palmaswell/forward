import * as Color from './';
import * as Type from '../types';

const sortedMock: Type.Color[] = [
  {
    name: 'Electromagnetic',
    type: Type.PaletteCase.electromagnetic,
    rgb: [0, 0, 0]
  },
  {
    name: 'Asbestos',
    type: Type.PaletteCase.asbestos,
    rgb: [127, 140, 141]
  },
  {
    name: 'Concrete',
    type: Type.PaletteCase.concrete,
    rgb: [149, 165, 166]
  },
  {
    name: 'Silver',
    type: Type.PaletteCase.silver,
    rgb: [189, 195, 199]
  },
  {
    name: 'Clouds',
    type: Type.PaletteCase.clouds,
    rgb: [255, 255, 255]
  },
];
test('binary search', () => {
  Color.quickSort(
    Color.palette,
    0,
    Color.palette.length - 1,
    Color.luminance
  );
  expect(Color.search({
    ratio: Type.A11yRatio.aaa,
    el: Color.palette[2],
    arr: Color.palette,
    lo: 0,
    hi: Color.palette.length - 1
  })).toEqual(20);
  expect(Color.search({
    ratio: Type.A11yRatio.aaa,
    el: Color.palette[25],
    arr: Color.palette,
    lo: 0,
    hi: Color.palette.length - 1
  })).toEqual(6);
  expect(Color.search({
    ratio: Type.A11yRatio.aaa,
    el: Color.palette[8],
    arr: Color.palette,
    lo: 0,
    hi: Color.palette.length - 1
  })).toEqual(undefined);
});
