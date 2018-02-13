import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { colorsWrapper, spacingWrapper } from './Core';


storiesOf('Core', module)
  .add('Colors', colorsWrapper)
  .add('Spacing', spacingWrapper);


