import * as Color from './';
import * as Type from '../types';
const colors: Type.Color[] = [
  {
    name: 'Black',
    rgb: [0, 0, 0]
  },
  {
    name: 'Electromagnetic',
    rgb: [47, 54, 64]
  },
  {
    name: 'Dracula Orchid',
    rgb: [45, 52, 54]
  },
  {
    name: 'Blue Nights',
    rgb: [53, 59, 72]
  },
];
describe('Color Element', () => {
  test('Creates a new ColorElement instance', () => {
    const colorEl = Color.createElement([245, 246, 250], 'Lynx White');
    expect(colorEl.getName()).toBe('Lynx White');
    expect(colorEl.getRGB()).toEqual([245, 246, 250]);
    expect(colorEl.getRGBString()).toBe('rgb(245, 246, 250)');
    expect(colorEl.getRGBAString(.5)).toBe('rgba(245, 246, 250, 0.5)');
    expect(colorEl.getHEXString()).toBe('#f5f6fa');
    expect(colorEl.getHSLString()).toBe('hsl(228, 33%, 97%)');
  });
});
