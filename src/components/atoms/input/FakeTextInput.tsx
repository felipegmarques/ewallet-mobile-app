import * as React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { Colors, FontSize, Sizes } from 'app/components/core';
import { inputStyles, TextInputProps, InputUnderline } from './InputStyles';

const styles = StyleSheet.create({
  fakeInput: {
    paddingBottom: 4,
  },
});

interface FakeTextInputProps extends TextInputProps {
  value: any
}

export const EW_FakeTextInput: React.StatelessComponent<TextInputProps>  =
  ({color, value, ...props}) => (
      <View>
          <Text style={[inputStyles.input, styles.fakeInput]}>
            {value}
          </Text>
          <InputUnderline color={color} />
      </View>);
