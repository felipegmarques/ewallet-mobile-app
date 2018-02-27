import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors, FontSize, Sizes } from 'app/new_components/core';
import { Caption, EW_TextInput, Label } from 'app/new_components/atoms';
import { Event, Mask, State, Validator, nextState } from './domain';

const styles = StyleSheet.create({
  formCaption: {
    paddingTop: Sizes.XSmall,
  },
})

interface Props {
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: any;
  caption?: (state: State) => string;
  validators?: Validator[];
  mask?: Mask;
  editable?: boolean;
  onChange: (state: State) => void;
  fieldState: State;
}

export class FormField extends React.Component<Props> {

  public static defaultProps: Partial<Props> = {
    keyboardType: 'default',
    secureTextEntry: false,
    caption: (state: State) => '',
    validators: [],
    editable: true,
    fieldState: {
      valid: true,
      focus: false,
      pristine: true,
    },
    mask: {clean: (val: any) => val, apply: (val: any) => val},
  };

  public nextState(event: Event) {
    this.props.onChange(nextState(this.props.fieldState, event, this.props.validators, this.props.mask))
  }


  public render() {
    const color = this.stateColor(this.props.fieldState);
    const caption = this.props.caption as (state: State) => string;

    return (
      <View style={{ marginVertical: Sizes.Small }}>
        <Label style={{color}}>{this.props.label}</Label>
        <EW_TextInput
          keyboardType={this.props.keyboardType}
          onFocus={() => this.nextState({type: 'focus'})}
          onBlur={() => this.nextState({type: 'blur'})}
          onChangeText={(value: any) => this.nextState({type: 'change', value })}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          editable={this.props.editable}
          color={color}
          value={this.props.fieldState.value}/>
        <View style={styles.formCaption}>
          <Caption style={{color}}>{caption(this.props.fieldState)}</Caption>
        </View>
      </View>
    )
  }

  private stateColor(state: State) {
    if (!state.valid) {
      return Colors.Danger;
    } else {
      return state.focus ? Colors.Primary : Colors.GrayXDark;
    }
  }


}
