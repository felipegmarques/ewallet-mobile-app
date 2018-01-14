const fontWeightMap: any = {
  normal: '',
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  500: 'Medium',
  600: 'SemiBold',
  bold: 'Bold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
};

const fontStyleMap: any = { normal: '', italic: 'Italic' };

interface FontSpec {
  fontFamily: string;
  fontWeight?: string;
  fontStyle?: string;
}

const addWeight = (fontFamily: string, fontWeight: string) => {
  return fontFamily + fontWeightMap[fontWeight];
};

const addStyle = (fontFamily: string, fontStyle: string) =>
  fontFamily + fontStyleMap[fontStyle];

const fontMaker = (fontSpec: FontSpec, os: string) => {
  const {fontWeight, fontStyle } = fontSpec;
  let fontFamily = fontSpec.fontFamily;
  if ((fontStyle === 'italic')
    || !(['normal', '400', undefined].some((val) => val === fontSpec.fontWeight))) {
    fontFamily = addStyle(addWeight(fontFamily + '-', fontWeight || 'normal'), fontStyle || 'normal');
  }
  return os === 'ios' ? fontSpec : { fontFamily };
};

export default fontMaker;
