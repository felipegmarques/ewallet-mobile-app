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

interface Props {
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: any;
  renderErrors?: (state: FormControlModel.State) => any;
  validators?: FormControlModel.Validator[];
}
type State = any;

export class FormControl extends React.Component<Props, FormControlModel.State> {

  public static defaultProps: Partial<Props> = {
    keyboardType: 'default',
    secureTextEntry: false,
    renderErrors: (state: FormControlModel.State) => {},
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

  public nextState(event: FormControlModel.Event) {
    this.setState((prevState) =>
      FormControlModel.nextState(prevState, event, this.props.validators));
  }

  public stateColor(state: State) {
    if (!this.state.valid) {
      return Colors.Danger;
    } else {
      return this.state.focus ? Colors.Primary : Colors.GrayXDark;
    }
  }

  public render() {
    const stateColor = this.stateColor(this.state);
    const renderErrors = this.props.renderErrors as (state: FormControlModel.State) => any;
    return (<View>
      <Label color={stateColor}>{this.props.label}</Label>
      <TextInput
        style={styles.input}
        keyboardType={this.props.keyboardType}
        placeholder={this.props.placeholder}
        onFocus={() => this.nextState({type: 'focus'})}
        onBlur={() => this.nextState({type: 'blur'})}
        onChangeText={(value) => this.nextState({type: 'change', value })}
        secureTextEntry={this.props.secureTextEntry}
        underlineColorAndroid='rgba(0,0,0,0)'/>
      <View style={[styles.inputUnderline, { backgroundColor: stateColor}]}/>
      <View style={styles.formCaption}>{renderErrors(this.state)}</View>
    </View>);
  }

}

export class PasswordFormControl extends React.Component<any, any> {
  public renderErrors(state: FormControlModel.State) {
    const errors = state.errors;
    let errorMsg;
    if (errors && errors.length !== 0) {
      const firstError = errors[0];
      if (firstError === 'required') {
        errorMsg = 'Digite uma senha';
      }
    }
    return (<View style={styles.formCaption}>
        <Caption color='red'>{errorMsg}</Caption>
    </View>);
  }

  public render() {
    return (<FormControl
      label='Password'
      validators={[Validators.required]}
      renderErrors={this.renderErrors}
      secureTextEntry={true}/>);
  }
}

export class EmailFormControl extends React.Component<any, any> {

  public renderErrors(state: FormControlModel.State) {
    const errors = state.errors;
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

  public render() {
    return(<FormControl
      label='Email'
      placeholder='john.doe@email.com'
      keyboardType='email-address'
      renderErrors={this.renderErrors}
      validators={[Validators.required, Validators.email]}/>);
  }
}
