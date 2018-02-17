import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class EntryForm extends React.Component<any, any> {

  public static navigationOptions = {
    header: null,
  };

  public constructor(props: any) {
    super(props);
  }

  public render() {
   return (
      <View>
        <Text>Hello, World!</Text>
      </View>
    );
  }
}
