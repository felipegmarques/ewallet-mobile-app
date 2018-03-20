const BrandPalette = {
  Blue:  '#0396FF',
  LightBlue: '#ABDCFF',
  Red: '#EA5455',
  Green: '#81FBB8',
  Yellow: '#FDEB71',
};
// Brand colors

const AppPalette = {
  CTA: BrandPalette.Green,
  Primary: BrandPalette.Blue,
  Secondary: BrandPalette.LightBlue,
  Success: BrandPalette.Green,
  Danger: BrandPalette.Red,
};

const Grayscale = {
  Black: '#333333',
  GrayXDark: '#555555',
  GrayDark: '#777777',
  Gray: '#999999',
  GrayLight: '#BBBBBB',
  GrayXLight: '#DDDDDD',
  White: '#FDFDFD',
};

export const Colors = {
  ...BrandPalette,
  ...AppPalette,
  ...Grayscale,
};
