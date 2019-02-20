import * as Type from '../types';
import * as Util from './';
const arrayMock: Type.Color | Type.EnhancedColor = [
  {
    name: 'Soothing Breeze',
    type: Type.PaletteCase.soothing_breeze,
    rgb: [178, 190, 195]
  },
  {
    name: 'City Lights',
    type: Type.PaletteCase.city_lights,
    rgb: [223, 228, 234]
  },
  {
    name: 'Concrete',
    type: Type.PaletteCase.concrete,
    rgb: [149, 165, 166]
  }
];
test('tranform RGB array into rgb string', () => {
  expect(Util.toRGBString(arrayMock[0].rgb)).toEqual('rgb(178, 190, 195)');
  expect(Util.toRGBString(arrayMock[1].rgb)).toEqual('rgb(223, 228, 234)');
  expect(Util.toRGBString(arrayMock[2].rgb)).toEqual('rgb(149, 165, 166)');
});
