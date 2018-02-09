import React from 'react';
import { View } from 'react-native';

import { MoneyLarge, Money, MoneySmall } from '../../../lib/components/Typography';

export default () =>
    <View style={{ marginLeft: 16 }}>
      <MoneySmall>0,63k</MoneySmall>
      <Money>0,63k</Money>
      <MoneyLarge>0,63k</MoneyLarge>
    </View>
