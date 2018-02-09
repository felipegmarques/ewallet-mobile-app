import React from 'react';
import { Text, View } from 'react-native';
import fontMaker from '../../../lib/components/utilities/FontMaker';

export default  () =>
  <View style={{ marginLeft: 16 }}>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito',
                    fontWeight: '200', fontStyle: 'italic'})}}>Nunito ExtraLight</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito',
                    fontWeight: '300', fontStyle: 'italic'})}}>Nunito Light</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito', fontStyle: 'italic'})}}>Nunito Regular</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito',
                    fontWeight: '600', fontStyle: 'italic'})}}>Nunito SemiBold</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito',
                    fontWeight: 'bold', fontStyle: 'italic'})}}>Nunito Bold</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito',
                    fontWeight: '800', fontStyle: 'italic'})}}>Nunito ExtraBold</Text>
    <Text style={{ fontSize: 24,
                  ...fontMaker({fontFamily: 'Nunito',
                    fontWeight: '900', fontStyle: 'italic'})}}>Nunito Black</Text>
  </View>
