import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';

import { Appbar, AppbarTitle } from 'app/new_components';

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
      </View>
    );
  }
}
