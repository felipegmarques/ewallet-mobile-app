import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Button } from 'react-native';

import { Appbar, AppbarTitle, FormField } from 'app/new_components';
import { Colors, Sizes } from 'app/new_components/core';

export class EntryForm extends React.Component<any, any> {

  public static navigationOptions = {
    header: null,
  };

  public constructor(props: any) {
    super(props);
  }

  public render() {
   return (
      <View style={{flex: 1}}>
        <Appbar renderTitle={() =>
          (<AppbarTitle>Nova movimentação</AppbarTitle>)}/>
        <View style={{ margin: Sizes.Regular }}>
          <FormField label={'Descrição'} placeholder={'Digite a descrição do movimento'}/>
          <FormField label={'Valor'} placeholder={'Digite o valor do movimento'}/>
          <FormField label={'Data'} placeholder={'Digite a data'}/>
          <View style={{marginTop: Sizes.Regular}}>
            <Button title='Salvar' onPress={() => console.log('Submit')}/>
          </View>
        </View>
      </View>
    );
  }
}
