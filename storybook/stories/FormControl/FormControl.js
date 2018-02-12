import React from 'react';
import { Text, View } from 'react-native';

import { EmailFormControl, PasswordFormControl } from '../../../lib/components/Form';

export default () =>
  <View style={{ marginLeft: 16, marginRight: 16 }}>
    <EmailFormControl/>
    <PasswordFormControl/>
  </View>

