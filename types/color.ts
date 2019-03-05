import { HashTbl } from './table';

export interface Color {
  name: string;
  rgb: RGB;
};

export type RGB = [number, number, number];

export interface colorEnhanced {
  name: string;
  rgb: RGB;
  aaa: Color[] | [];
  aa: Color[] | [];
  toRGB(): string;
  toHEX(): string;
  toHSL(): string;
  toRGBA(alpha: number): string;
}

export interface ColorModel {
  colors: colorEnhanced[];
  colorTbl: HashTbl<colorEnhanced>;
  activeColor: colorEnhanced;
  setActiveColor: (color: colorEnhanced) => void;
}

export enum YValues {
  r = 0.2126,
  g = 0.7152,
  b = 0.0722,
}

export enum A11yRatio {
  aa = 4.5,
  aaa = 7,
}

export enum ColorTile {
  primary = 'primary',
  secondary = 'secondary'
}

export enum ColorList {
  primary = 'primary',
  secondary = 'seconday'
}

export enum Search {
  lower = 'lower',
  upper = 'upper',
}

export enum PaletteCase {
  black = 'black',
  electromagnetic = 'electromagnetic',
  dracula_orchid = 'dracula_orchid',
  blue_nights = 'blue_nights',
  american_river = 'american_river',
  soothing_breeze = 'soothing_breeze',
  city_lights = 'city_lights',
  concrete = 'concrete',
  clouds = 'clouds',
  asbestos = 'asbestos',
  silver = 'silver',
  lynx_white = 'lynx_white',
  white = 'white',
  swan_white = 'swan_white',
  hot_stone = 'hot_stone',
  summer_sky = 'summer_sky',
  devil_blue = 'devil_blue',
  mandarin_sorbet = 'mandarin_sorbet',
  almeda_ochre = 'almeda_ochre',
  celestial_green = 'celestial_green',
  palm_springs_splash = 'palm_springs_splash',
  spiced_butternut = 'spiced_butternut',
  desert = 'desert',
  jacksons_purple = 'jacksons_purple',
  lucky_point = 'lucky_point',
  fluorescent_red = 'fluorescent_red',
  eye_of_newt = 'eye_of_newt',
  c64_purple = 'c64_purple',
  liberty = 'liberty',
  synthetic_pumpkin = 'synthetic_pumpkin',
  chilean_fire = 'chilean_fire',
}
