import { TextStyle } from 'react-native';
import fontMaker from '../FontMaker';

const android = 'android';
const ios = 'ios';

describe('maps fontSpec with and without Weight to correct file for each OS', () => {

  it('maps correctly \'100\' to Thin font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontWeight: '100'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito-Thin'});
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly \'200\' to ExtraLight font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontWeight: '200'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito-ExtraLight'});
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly \'300\' to Light font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontWeight: '300'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito-Light'});
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly \'400\' to Regular font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontWeight: '400'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito' });
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly \'normal\' to Regular font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontWeight: 'normal'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito'});
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly regular font for android and iOS', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito'});
    expect(resultIOS).toEqual({fontFamily: 'Nunito'});
  });

  it('maps correctly \'500\' to Medium font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontWeight: '500'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito-Medium'});
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly \'600\' to Semibold font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontWeight: '600'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito-SemiBold'});
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly \'bold\' font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontWeight: 'bold'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito-Bold'});
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly \'700\' font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontWeight: '700'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito-Bold'});
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly \'800\' to ExtraBold font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontWeight: '800'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito-ExtraBold'});
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly \'900\' to Black font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontWeight: '900'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito-Black'});
    expect(resultIOS).toEqual(fontSpec);
  });

});

describe('maps fontSpec with and without Style to correct file for each OS', () => {

  it('maps correctly style \'normal\' without weight to font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontStyle: 'normal'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito' });
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly style \'normal\' with weight to font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontWeight: '500', fontStyle: 'normal'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito-Medium'});
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly style \'italic\' without weight to font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontStyle: 'italic'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito-Italic'});
    expect(resultIOS).toEqual(fontSpec);
  });

  it('maps correctly style \'italic\' with weight to font for android and ios', () => {
    const fontSpec: TextStyle = { fontFamily: 'Nunito', fontStyle: 'italic', fontWeight: '600'};

    const resultAndroid = fontMaker(fontSpec, android);
    const resultIOS = fontMaker(fontSpec, ios);

    expect(resultAndroid).toEqual({ fontFamily: 'Nunito-SemiBoldItalic'});
    expect(resultIOS).toEqual(fontSpec);
  });

});
