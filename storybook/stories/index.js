import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { colorsWrapper, spacingWrapper, fontSizeWrapper } from './core';
import { inputWrapper } from './atoms';

storiesOf('Atoms', module)
  .add('Input', inputWrapper);

storiesOf('Core', module)
  .add('Colors', colorsWrapper)
  .add('Spacing', spacingWrapper)
  .add('Font size', fontSizeWrapper);


