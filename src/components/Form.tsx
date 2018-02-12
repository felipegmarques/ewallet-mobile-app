import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Colors from './Colors';
import * as FormControlModel from './forms/FormControlModel';
import * as Validators from './forms/Validators';
import Sizes from './Spacing';
import { Caption, Label } from './Typography';

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
  formCaption: {
    paddingTop: 4,
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
    this.nextState({ type: 'focus' });
  }

  public onChange(value: string) {
    this.nextState({type: 'change', value});
  }

  public onBlur() {
    this.nextState({ type: 'blur'});
  }

  public renderErrors() {
    const errors = this.state.errors;
    let errorMsg;
    if (errors && errors.length !== 0) {
      const firstError = errors[0];
      if (firstError === 'required') {
        errorMsg = 'Esse campo é obrigatório';
      } else if (firstError === 'invalid-email') {
        errorMsg = 'Digite um email válido';
      }
    }
    return (<View style={styles.formCaption}>
        <Caption color='red'>{errorMsg}</Caption>
    </View>);
  }

  public stateColor(state: State) {
    if (!this.state.valid) {
      return Colors.Danger;
    } else {
      return this.state.focus ? Colors.Primary: Colors.GrayXDark;
    }
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
      <View style={styles.formCaption}>{this.renderErrors()}</View>
    </View>);
  }

  private nextState(event: FormControlModel.Event) {
    this.setState((prevState) => FormControlModel.nextState(prevState, event, [Validators.required, Validators.email]));
  }

}
