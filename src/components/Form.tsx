import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Colors from './Colors';
import * as FormControlModel from './forms/FormControlModel';
import Sizes from './Spacing';
import { Label } from './Typography';

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

type Props = any;
type State = any;

export class EmailFormControl extends React.Component<Props, FormControlModel.State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      valid: true,
      focus: false,
      pristine: true,
    };
  }

  public onFocus() {
    this.setState((prevState) =>
      FormControlModel.nextState(prevState, { type: 'focus' }));
  }

  public onChange(value: string) {
    this.setState((prevState) =>
      FormControlModel.nextState(prevState, {type: 'change', value}));
  }

  public onBlur() {
    this.setState((prevState) =>
      FormControlModel.nextState(prevState, { type: 'blur'}));
  }

  public stateColor(state: State) {
    return this.state.focus ? Colors.Primary : Colors.GrayXDark;
  }

  public render() {
    const stateColor = this.stateColor(this.state);
    return (<View>
      <Label color={stateColor}>Email</Label>
      <TextInput
        style={styles.input}
        keyboardType='email-address'
        placeholder={'john.doe@gmail.com'}
        onFocus={() => this.onFocus()}
        onBlur={() => this.onBlur()}
        onChangeText={(text) => this.onChange(text)}
        underlineColorAndroid='rgba(0,0,0,0)'/>
      <View style={[styles.inputUnderline, { backgroundColor: stateColor}]}/>
    </View>);
  }

}
