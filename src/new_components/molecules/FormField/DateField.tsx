import * as React from 'react';
import { DatePickerAndroid, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { Colors, FontSize, Sizes } from 'app/new_components/core';
import { Caption, EW_TextInput, InputUnderline, inputStyles, Label } from 'app/new_components/atoms';

import { Event, Mask, State, Validator, nextState } from './domain';
import { FormField } from './FormField';

const styles = StyleSheet.create({
  fakeInput: {
    paddingBottom: 4,
  },
});



interface Props {
  label: string;
  mask?: Mask;
  onChange: (state: State) => void;
  fieldState: State;
}

export class DateField extends React.Component<Props> {

  public static defaultProps: Partial<Props> = {
    fieldState: {
      valid: true,
      focus: false,
      pristine: false,
      value: new Date(),
    },
    mask: {clean: (val: any) => val, apply: (val: any) => val},
  };

  public async openPicker() {
    const mask = this.props.mask as any;
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: this.props.fieldState.value
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        console.log(year + ' ' + month + ' ' + day);
        this.props.onChange(
          nextState(this.props.fieldState,
            {type: 'change', value:
              mask.clean(new Date(year as number, month as number, day as number))
          }));
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  public render() {
    const color = this.stateColor(this.props.fieldState);
    const mask = this.props.mask as any;

    return (
      <TouchableWithoutFeedback style={{ marginVertical: Sizes.Small }} onPress={() => this.openPicker()}>
        <View>
          <Label style={{color}}>{this.props.label}</Label>
          <Text style={[inputStyles.input, styles.fakeInput]}>
            {mask.apply(this.props.fieldState.value)}
          </Text>
          <InputUnderline color={color} />
        </View>
      </TouchableWithoutFeedback>);
  }

  private stateColor(state: State) {
    if (!state.valid) {
      return Colors.Danger;
    } else {
      return state.focus ? Colors.Primary : Colors.GrayXDark;
    }
  }


}
