import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, TextInput, TextInputProperties, TouchableWithoutFeedback, View } from 'react-native';

import { Colors, FontSize, Sizes } from 'app/components/core';
import { inputStyles, TextInputProps, InputUnderline } from './InputStyles';

export const EW_TextInput: React.StatelessComponent<TextInputProps>  =
  ({color, ...props}) => (
      <View>
        <TextInput
          {...props}
          style={inputStyles.input}
          underlineColorAndroid='rgba(0,0,0,0)'/>
        <InputUnderline color={color}/>
      </View>);
