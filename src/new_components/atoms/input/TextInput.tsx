import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, TextInput, TextInputProperties, TouchableWithoutFeedback, View } from 'react-native';

import { Colors, FontSize, Sizes } from 'app/new_components/core';

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

interface TextInputProps extends TextInputProperties {
  color: string;
}

export const InputUnderline: React.StatelessComponent<{color: string}> =
  ({color}) => (<View style={[inputStyles.inputUnderline, { backgroundColor: color }]}/>);

export const EW_TextInput: React.StatelessComponent<TextInputProps>  =
  ({color, ...props}) => (
      <View>
        <TextInput
          {...props}
          style={inputStyles.input}
          underlineColorAndroid='rgba(0,0,0,0)'/>
        <InputUnderline color={color}/>
      </View>);
