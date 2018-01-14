import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import Hello from '../../lib/components/Hello';
import fontMaker from '../../lib/components/utilities/FontMaker';

storiesOf('Typography', module)
  .add('Nunito', () =>
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
);
