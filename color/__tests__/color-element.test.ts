import * as Color from '..';
import { ColorProps, A11yRatio, Search } from '../color';
describe('Color Element', () => {
  const colors:  ColorProps[] = [
    {name: 'Blue Nights', rgb: [59, 68, 70]},
    {name: 'Synthetic Pumpkin', rgb: [255, 121, 63]},
    {name: 'Celestial Green', rgb: [51, 217, 178]},
    {name: 'Mandarin Sorbet', rgb: [255, 177, 66]},
    {name: 'City Lights', rgb: [223, 228, 234]},
    {name: 'Isabelline', rgb: [236, 236, 236]},
    {name: 'Arsenic', rgb: [68, 68, 68]}
  ]

  test('Creates a new ColorElement instance', () => {
    const colorEl = Color.createElement([245, 246, 250], 'Lynx White');
    expect(colorEl.getName()).toBe('Lynx White');
    expect(colorEl.getRGB()).toEqual([245, 246, 250]);
    expect(colorEl.getRGBString()).toBe('rgb(245, 246, 250)');
    expect(colorEl.getRGBAString(.5)).toBe('rgba(245, 246, 250, 0.5)');
    expect(colorEl.getHEXString()).toBe('#f5f6fa');
    expect(colorEl.getHSLString()).toBe('hsl(228, 33%, 97%)');
  });
  test('Search for correspondintg AA and AAA contrast', () => {
    const colorEl = Color.createElement([59, 68, 70], 'Blue Nights');
    Color.sort(colors, Color.luminance);
    colorEl.setAA(colors, Search.lower);
    colorEl.setAAA(colors, Search.lower);
    const aa = Color.search(
      colors,
      {rgb: colorEl.getRGB(), name: colorEl.getName()},
      A11yRatio.aa
    ) as number;
    const aaa = Color.search(
      colors,
      {rgb: colorEl.getRGB(), name: colorEl.getName()},
      A11yRatio.aaa
    ) as number;

    expect(colorEl.getAA()).toEqual(JSON.parse(JSON.stringify(colors.slice(aa))));
    expect(colorEl.getAAA()).toEqual(JSON.parse(JSON.stringify(colors.slice(aaa))));
  })
});
