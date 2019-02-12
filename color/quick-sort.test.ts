import * as Color from './';
import * as Type from '../types';

test('quick color sort', () => {
  const arrayMock: Type.Color[] = [
    {
      name: 'Black',
      type: Type.PaletteCase.black,
      rgb: [0, 0, 0]
    },
    {
      name: 'Electromagnetic',
      type: Type.PaletteCase.electromagnetic,
      rgb: [47, 54, 64]
    },
    {
      name: 'Dracula Orchid',
      type: Type.PaletteCase.dracula_orchid,
      rgb: [45, 52, 54]
    },
    {
      name: 'Blue Nights',
      type: Type.PaletteCase.blue_nights,
      rgb: [53, 59, 72]
    },
  ];
  Color.quickSort({
    a: arrayMock,
    lo: 0,
    hi: arrayMock.length - 1,
    cb: Color.luminance
  });
  console.log(arrayMock);
  expect(arrayMock[1]).toEqual({
    name: 'Dracula Orchid',
    type: Type.PaletteCase.dracula_orchid,
    rgb: [45, 52, 54]
  },)
});

test('color partition', () => {
  const arrayMock: Type.Color[] = [
    {
      name: 'Black',
      type: Type.PaletteCase.black,
      rgb: [0, 0, 0]
    },
    {
      name: 'Electromagnetic',
      type: Type.PaletteCase.electromagnetic,
      rgb: [47, 54, 64]
    },
    {
      name: 'Dracula Orchid',
      type: Type.PaletteCase.dracula_orchid,
      rgb: [45, 52, 54]
    },
    {
      name: 'Blue Nights',
      type: Type.PaletteCase.blue_nights,
      rgb: [53, 59, 72]
    },
  ];
  expect(Color.partition({
    a: arrayMock,
    lo: 0,
    hi: arrayMock.length - 1,
    p: Color.luminance(arrayMock[Math.floor(0 + arrayMock.length - 1)].rgb),
    cb: Color.luminance

  })).toEqual({lo: 4, hi: 2});
});
