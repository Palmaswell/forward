import * as Color from './';
describe('Color Element', () => {
  test('Creates a new ColorElement instance', () => {
    expect(Color.createElement([245, 246, 250], 'Lynx White')).toMatchObject({
      rgb: [245, 246, 250],
      name: 'Lynx White',
      aa: [],
      aaa: []
    })
  })
});
