import * as React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { EntryForm } from './EntryForm';
import { EntriesListing } from './EntriesListing';

const RootStack = StackNavigator({
  Home: {
    screen: EntriesListing,
  },
  Entry: {
    screen: EntryForm,
  },
}, { headerMode: 'screen'});

export default class App extends React.Component {
  public render() {
    return <RootStack/>;
  }
}

AppRegistry.registerComponent('MyAwesomeProject', () => App);
