export interface Color {
  name: string;
  type: string;
  value: string;
};

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

export const palette: Color[] = [
  {
    name: 'Black',
    type: PaletteCase.black,
    value: 'rgb(0, 0, 0)'
  },
  {
    name: 'Electromagnetic',
    type: PaletteCase.electromagnetic,
    value: 'rgb(47, 54, 64)'
  },
  {
    name: 'Dracula Orchid',
    type: PaletteCase.dracula_orchid,
    value: 'rgb(45, 52, 54)'
  },
  {
    name: 'Blue Nights',
    type: PaletteCase.blue_nights,
    value: 'rgb(53, 59, 72)'
  },
  {
    name: 'American River',
    type: PaletteCase.american_river,
    value: 'rgb(99, 110, 114)'
  },
  {
    name: 'Soothing Breeze',
    type: PaletteCase.soothing_breeze,
    value: 'rgb(178, 190, 195)'
  },
  {
    name: 'City Lights',
    type: PaletteCase.city_lights,
    value: 'rgb(223, 228, 234)'
  },
  {
    name: 'Concrete',
    type: PaletteCase.concrete,
    value: 'rgb(149, 165, 166)'
  },
  {
    name: 'Asbestos',
    type: PaletteCase.asbestos,
    value: 'rgb(127, 140, 141)'
  },
  {
    name: 'Clouds',
    type: PaletteCase.clouds,
    value: 'rgb(236, 240, 241)'
  },
  {
    name: 'Silver',
    type: PaletteCase.silver,
    value: 'rgb(189, 195, 199)'
  },
  {
    name: 'Lynx white',
    type: PaletteCase.lynx_white,
    value: 'rgb(245, 246, 250)'
  },
  {
    name: 'White',
    type: PaletteCase.white,
    value: 'rgb(255, 255, 255)'
  },
  {
    name: 'Swan White',
    type: PaletteCase.swan_white,
    value: 'rgb(247, 241, 227)'
  },
  {
    name: 'Hot Stone',
    type: PaletteCase.hot_stone,
    value: 'rgb(247, 241, 227)'
  },
  {
    name: 'Summer Sky',
    type: PaletteCase.summer_sky,
    value: 'rgb(52, 172, 224)'
  },
  {
    name: 'Devil Blue',
    type: PaletteCase.devil_blue,
    value: 'rgb(34, 112, 147)'
  },
  {
    name: 'Mandarin Sorbet',
    type: PaletteCase.mandarin_sorbet,
    value: 'rgb(255, 177, 66)'
  },
  {
    name: 'Alameda Ochre',
    type: PaletteCase.almeda_ochre,
    value: 'rgb(204, 142, 53)'
  },
  {
    name: 'Celestial Green',
    type: PaletteCase.celestial_green,
    value: 'rgb(51, 217, 178)'
  },
  {
    name: 'Palm Springs Splash',
    type: PaletteCase.palm_springs_splash,
    value: 'rgb(33, 140, 116)'
  },
  {
    name: 'Spiced Butternut',
    type: PaletteCase.spiced_butternut,
    value: 'rgb(255, 218, 121)'
  },
  {
    name: 'Desert',
    type: PaletteCase.desert,
    value: 'rgb(204, 174, 98)'
  },
  {
    name: 'Jacksons Purple',
    type: PaletteCase.jacksons_purple,
    value: 'rgb(64, 64, 122)'
  },
  {
    name: 'Lucky Point',
    type: PaletteCase.lucky_point,
    value: 'rgb(44, 44, 84)'
  },
  {
    name: 'Fluorescent Red',
    type: PaletteCase.fluorescent_red,
    value: 'rgb(255, 82, 82)'
  },
  {
    name: 'Eye Of Newt',
    type: PaletteCase.eye_of_newt,
    value: 'rgb(179, 57, 57)'
  },
  {
    name: 'C64 Purple',
    type: PaletteCase.c64_purple,
    value: 'rgb(112, 111, 211)'
  },
  {
    name: 'Liberty',
    type: PaletteCase.liberty,
    value: 'rgb(71, 71, 135)'
  },
  {
    name: 'Synthetic Pumpkin',
    type: PaletteCase.synthetic_pumpkin,
    value: 'rgb(255, 121, 63)'
  },
  {
    name: 'Chilean Fire',
    type: PaletteCase.chilean_fire,
    value: 'rgb(205, 97, 51)'
  },
]
