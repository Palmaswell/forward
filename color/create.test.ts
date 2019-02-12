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

  Color.quickSort({
    a: arrayMock,
    lo: 0,
    hi: arrayMock.length - 1,
    cb: Color.luminance
  })

  expect(Color.create(arrayMock)).toEqual([
    {
      name: 'Electromagnetic',
      type: Type.PaletteCase.electromagnetic,
      rgb: [47, 54, 64],
      aa: new Map(),
      aaa: new Map()
    },
    {
      name: 'Asbestos',
      type: Type.PaletteCase.asbestos,
      rgb: [127, 140, 141],
      aa: new Map(),
      aaa: new Map()
    },
    {
      name: 'Concrete',
      type: Type.PaletteCase.concrete,
      rgb: [149, 165, 166],
      aa: new Map(),
      aaa: new Map()
    },
    {
      name: 'Silver',
      type: Type.PaletteCase.silver,
      rgb: [189, 195, 199],
      aa: new Map(),
      aaa: new Map()
    },
    {
      name: 'Clouds',
      type: Type.PaletteCase.clouds,
      rgb: [236, 240, 241],
      aa: new Map(),
      aaa: new Map()
    },
  ]);

});
