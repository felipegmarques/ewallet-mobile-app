import React from 'react';
import { Text, View } from 'react-native';
import fontMaker from '../../../lib/components/utilities/FontMaker';

export default () =>
  <View style={{ marginLeft: 16 }}>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontWeight: '200'})}}>Nunito ExtraLight</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontWeight: '300'})}}>Nunito Light</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito'})}}>Nunito Regular</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontWeight: '600'})}}>Nunito SemiBold</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontWeight: 'bold'})}}>Nunito Bold</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontWeight: '800'})}}>Nunito ExtraBold</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontWeight: '900'})}}>Nunito Black</Text>
  </View>
