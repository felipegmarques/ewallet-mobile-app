import * as React from 'react';
import { TextInput } from 'react-native';

export class EmailFormControl extends React.Component {

  public render() {
    return (<TextInput value={'john.doe@gmail.com'}/>);
  }

}
