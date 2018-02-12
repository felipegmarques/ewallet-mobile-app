import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Colors from './Colors';
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

export class EmailFormControl extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  public onFocus() {
    this.setState({ focus: true });
  }

  public onBlur() {
    this.setState({ focus: false });
  }

  public stateColor(state: State) {
    return this.state.focus ? Colors.Primary : Colors.GrayXDark;
  }

  public render() {
    return (<View>
      <Label color={this.stateColor(this.state)}>Email</Label>
      <TextInput
        style={styles.input}
        keyboardType='email-address'
        placeholder={'john.doe@gmail.com'}
        onFocus={() => this.onFocus()}
        onBlur={() => this.onBlur()}
        underlineColorAndroid='rgba(0,0,0,0)'/>
      <View style={[styles.inputUnderline, { backgroundColor: this.stateColor(this.state)}]}/>
    </View>);
  }

}
