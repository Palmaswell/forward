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
  expect(Color.search({
    t: Type.A11yRatio.aaa,
    e: sortedMock[0],
    a: sortedMock,
    l: 0,
    h: sortedMock.length - 1
  })).toEqual(2);
})
