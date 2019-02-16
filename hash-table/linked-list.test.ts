import * as Hashtbl from './';
import * as Type from '../types';

test('create a node object for a linked list', () => {
  expect(Hashtbl.createNode({
    name: 'C64 Purple',
    type: Type.PaletteCase.c64_purple,
    rgb: [112, 111, 211],
    aaa: [{
      name: 'Eye Of Newt',
      type: Type.PaletteCase.eye_of_newt,
      rgb: [179, 57, 57]
    }],
    aa: [{
      name: 'Eye Of Newt',
      type: Type.PaletteCase.eye_of_newt,
      rgb: [179, 57, 57]
    }]
  })).toEqual({
    next: null,
    value: {
      name: 'C64 Purple',
      type: Type.PaletteCase.c64_purple,
      rgb: [112, 111, 211],
      aaa: [{
        name: 'Eye Of Newt',
        type: Type.PaletteCase.eye_of_newt,
        rgb: [179, 57, 57]
      }],
      aa: [{
        name: 'Eye Of Newt',
        type: Type.PaletteCase.eye_of_newt,
        rgb: [179, 57, 57]
      }]
    }
  });
});

