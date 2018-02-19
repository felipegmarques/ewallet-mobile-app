import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors, FontSize, Sizes } from 'app/new_components/core';
import { EW_TextInput, Label } from 'app/new_components/atoms';
import { Event, State, Validator, nextState } from './domain';

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
  renderErrors?: (state: State) => any;
  validators?: Validator[];
}

export class FormField extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    keyboardType: 'default',
    secureTextEntry: false,
    renderErrors: (state: State) => {},
    validators: [],
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      valid: true,
      focus: false,
      pristine: true,
    };
  }

  public nextState(event: Event) {
    this.setState((prevState) => nextState(prevState, event, this.props.validators));
  }


  public render() {
    const color = this.stateColor(this.state);
    const renderErrors = this.props.renderErrors as (state: State) => any;
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
          color={color}/>
        <View style={styles.formCaption}>{renderErrors(this.state)}</View>
      </View>
    )
  }

  private stateColor(state: State) {
    if (!this.state.valid) {
      return Colors.Danger;
    } else {
      return this.state.focus ? Colors.Primary : Colors.GrayXDark;
    }
  }


}
