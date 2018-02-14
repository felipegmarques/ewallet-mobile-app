import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { colorsWrapper, spacingWrapper, fontSizeWrapper } from './Core';
import { appbarWrapper, monthSelectorWrapper } from './Components';

storiesOf('Components', module)
  .add('MonthSelector', monthSelectorWrapper)
  .add('Appbar', appbarWrapper);

storiesOf('Core', module)
  .add('Colors', colorsWrapper)
  .add('Spacing', spacingWrapper)
  .add('Font size', fontSizeWrapper);



