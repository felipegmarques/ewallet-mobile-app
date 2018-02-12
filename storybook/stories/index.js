import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import  { headersWrapper, copiesWrapper, moneyWrapper } from './Typography';
import { nunitoWrapper, nunitoItalicWrapper } from './Fonts';
import formControlWrapper from './FormControl/FormControl';

storiesOf('Form', module)
  .add('FormControl', formControlWrapper);

storiesOf('Typography', module)
  .add('Headers', headersWrapper)
  .add('Copies', copiesWrapper)
  .add('Money', moneyWrapper);

storiesOf('Fonts', module)
  .add('Nunito', nunitoWrapper)
  .add('Nunito Italic', nunitoItalicWrapper);

