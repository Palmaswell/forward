import * as Color from '..';
import { ColorProps } from '../types';

const colors: ColorProps[] = [
  { name: 'Electromagnetic', rgb: [47, 54, 64] },
  { name: 'Swan White', rgb: [247, 241, 227] },
  { name: 'White', rgb: [255, 255, 255] },
  { name: 'Dracula Orchid', rgb: [45, 52, 54] },
  { name: 'Black', rgb: [0, 0, 0] },
  { name: 'Blue Nights', rgb: [53, 59, 72] },
  { name: 'Isabelline', rgb: [236, 236, 236] },
  { name: 'Arsenic', rgb: [68, 68, 68] },
];

const sortedColors: ColorProps[] = [
  { name: 'Black', rgb: [0, 0, 0] },
  { name: 'Dracula Orchid', rgb: [45, 52, 54] },
  { name: 'Electromagnetic', rgb: [47, 54, 64] },
  { name: 'Blue Nights', rgb: [53, 59, 72] },
  { name: 'Arsenic', rgb: [68, 68, 68] },
  { name: 'Isabelline', rgb: [236, 236, 236] },
  { name: 'Swan White', rgb: [247, 241, 227] },
  { name: 'White', rgb: [255, 255, 255] },
];
describe('Color Manager', () => {
  test('Sets elements with their corresponding AA and AA arrays', () => {
    const colorManager = Color.createManager();
    colorManager.addElements(colors);
    expect(colorManager.getElements().length).toBe(8);
    expect(colorManager.getElements().map(c => c.getRGB())).toEqual(
      sortedColors.map(c => c.rgb)
    );
    expect(colorManager.getElements()[0].getAA()).toEqual([
      { name: 'Isabelline', rgb: [236, 236, 236] },
      { name: 'Swan White', rgb: [247, 241, 227] },
      { name: 'White', rgb: [255, 255, 255] },
    ]);
  });
});
