import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { H1, H2, H3, H4, Label, Body, MoneyLarge, Money, MoneySmall } from '../../lib/components/Typography';
import fontMaker from '../../lib/components/utilities/FontMaker';
import  { headersWrapper, copiesWrapper, moneyWrapper } from './Typography';
import { nunitoWrapper, nunitoItalicWrapper } from './Fonts';

storiesOf('Typography', module)
  .add('Headers', headersWrapper)
  .add('Copies', copiesWrapper)
  .add('Money', moneyWrapper);

storiesOf('Fonts', module)
  .add('Nunito', nunitoWrapper)
  .add('Nunito Italic', nunitoItalicWrapper);
