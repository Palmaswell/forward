import * as Color from './';
import * as Type from '../types';
test('sort and create color data', () => {
  const arrayMock: Type.Color[] = [
    {
      name: 'Concrete',
      type: Type.PaletteCase.concrete,
      rgb: [149, 165, 166]
    },
    {
      name: 'Asbestos',
      type: Type.PaletteCase.asbestos,
      rgb: [127, 140, 141]
    },
    {
      name: 'Clouds',
      type: Type.PaletteCase.clouds,
      rgb: [236, 240, 241]
    },
    {
      name: 'Silver',
      type: Type.PaletteCase.silver,
      rgb: [189, 195, 199]
    },
    {
      name: 'Electromagnetic',
      type: Type.PaletteCase.electromagnetic,
      rgb: [47, 54, 64]
    },
  ];

  Color.quickSort(
    arrayMock,
    0,
    arrayMock.length - 1,
    Color.luminance
  );

  expect(Color.create(arrayMock)).toEqual([
    {
      name: 'Electromagnetic',
      type: Type.PaletteCase.electromagnetic,
      rgb: [47, 54, 64],
      aa: [],
      aaa: []
    },
    {
      name: 'Asbestos',
      type: Type.PaletteCase.asbestos,
      rgb: [127, 140, 141],
      aa: [],
      aaa: []
    },
    {
      name: 'Concrete',
      type: Type.PaletteCase.concrete,
      rgb: [149, 165, 166],
      aa: [],
      aaa: []
    },
    {
      name: 'Silver',
      type: Type.PaletteCase.silver,
      rgb: [189, 195, 199],
      aa: [],
      aaa: []
    },
    {
      name: 'Clouds',
      type: Type.PaletteCase.clouds,
      rgb: [236, 240, 241],
      aa: [],
      aaa: []
    },
  ]);

});
