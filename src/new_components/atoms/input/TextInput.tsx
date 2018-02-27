import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, TextInput, TextInputProperties, View } from 'react-native';

import { Colors, FontSize, Sizes } from 'app/new_components/core';

const styles = StyleSheet.create({
  input: {
    paddingTop: 4,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  inputUnderline: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.GrayXDark,
  },
});

interface TextInputProps extends TextInputProperties {
  color: string;
}

export const EW_TextInput: React.StatelessComponent<TextInputProps>  =
  ({color, ...props}) => (
      <View>
        <TextInput
          {...props}
          style={styles.input}
          underlineColorAndroid='rgba(0,0,0,0)'/>
        <View style={[styles.inputUnderline, { backgroundColor: color}]}/>
      </View>);
