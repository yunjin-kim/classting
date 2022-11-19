export const COLOR_LIST = {
  LIGHT_GREEN: 'rgb(98, 241, 189)',
  GREEN: 'rgb(0, 200, 150)',

  WHITE: 'rgb(255, 255, 255)',

  LIGHT_GRAY: 'rgb(241, 241, 242)',
  GRAY: 'rgb(148, 153, 157)',

  BLACK: 'rgb(0, 0, 0)',
} as const;

export type ColorList = {
  LIGHT_GREEN: string;
  GREEN: string;
  WHITE: string;
  GRAY: string;
  LIGHT_GRAY: string;
  BLACK: string;
};

export type Colors = 'LIGHT_GREEN' | 'GREEN' | 'WHITE' | 'GRAY' | 'LIGHT_GRAY' | 'BLACK';
