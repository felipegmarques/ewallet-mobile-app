import * as React from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from './components/Colors';
import { H1 } from './components/Typography';

const styles = StyleSheet.create({
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 56,
    backgroundColor: Colors.GrayXDark,
  },
});

export default class MyAwesomeProject extends React.Component<object, object> {
  public render() {
    return (
      <View>
        <View style={styles.appbar}>
          <H1 color={Colors.White}>Setembro/2017</H1>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('MyAwesomeProject', () => MyAwesomeProject);
