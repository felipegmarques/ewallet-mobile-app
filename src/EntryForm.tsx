import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Button } from 'react-native';

import * as Validators from 'app/domain/validators';
import * as Masks from 'app/domain/mask';
import { Appbar, AppbarTitle, FormField } from 'app/new_components';
import { Colors, Sizes } from 'app/new_components/core';

export class EntryForm extends React.Component<any, any> {

  public static navigationOptions = {
    header: null,
  };

  public constructor(props: any) {
    super(props);
    this.state = {valid: true};
  }

  public nextState(field: string, fieldState: any) {
    this.setState((prevState: any) => {
      prevState[field] = fieldState;
      prevState.valid = fieldState.valid && prevState.valid;
      return prevState;
    })
  }

  public submit(form: any) {
    if (form.valid) {
      this.props.navigation.goBack();
    } else {
      console.log('Invalid form');
    }
  }

  public render() {
   return (
      <View style={{flex: 1}}>
        <Appbar renderTitle={() =>
          (<AppbarTitle>Nova movimentação</AppbarTitle>)}/>
        <View style={{ margin: Sizes.Regular }}>
          <FormField
            label='Descrição'  validators={[Validators.required]}
            caption={({ valid, errors }: any) => (valid ? '' : 'Campo obrigatório')}
            onChange={(state) => this.nextState('description', state)}
            fieldState={this.state.description}
            placeholder={'Digite a descrição do movimento'}/>
          <FormField
            label='Valor'  validators={[Validators.required]}
            caption={({ valid, errors }: any) => (valid ? '' : 'Campo obrigatório')}
            onChange={(state) => this.nextState('amount', state)}
            keyboardType='numeric'
            mask={Masks.MoneyMask}
            fieldState={this.state.amount}
            placeholder='Digite o valor do movimento'/>
          <View style={{marginTop: Sizes.Regular}}>
            <Button title='Salvar' onPress={() => this.submit(this.state)}/>
          </View>
        </View>
      </View>
    );
  }
}
