/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class MyAwesomeProject extends React.Component<object, object> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          -406.60
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.tsx
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const fontMaker = () => {
  console.log('Am I evaluated at build or runtime?');
  if (Platform.OS === 'android') {
    return { fontFamily: 'Nunito-SemiBold' };
  } else {
    return {fontWeight: '600', fontFamily: 'Nunito'};
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    ...fontMaker(),
    color: '#234343',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyAwesomeProject', () => MyAwesomeProject);
