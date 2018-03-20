import * as React from 'react';
import { StyleSheet, View, TextInputProperties } from 'react-native';

import { Colors, FontSize, Sizes } from 'app/components/core';

export const inputStyles = StyleSheet.create({
  input: {
    paddingTop: Sizes.XSmall,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    color: Colors.Black,
  },
  inputUnderline: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.GrayXDark,
  },
});

export interface TextInputProps extends TextInputProperties {
  color: string;
}

export const InputUnderline: React.StatelessComponent<{color: string}> =
  ({color}) => (<View style={[inputStyles.inputUnderline, { backgroundColor: color }]}/>);

