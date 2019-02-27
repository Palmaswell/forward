import * as Type from '../types';
export interface ComponentColor {
  [propName: string]: Type.RGB
}

export const Color: ComponentColor = {
  black: [0, 0, 0],
  draculaOrchid: [45, 52, 54],
  blueNights: [53, 59, 72],
  americanRiver: [99, 110, 114],
  cityLights: [223, 228, 234],
  licorice: [19, 19, 19],
  lynxWhite: [245, 246, 250],
  white: [255, 255, 255]
}
