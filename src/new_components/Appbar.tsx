import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Colors, FontSize, Sizes } from './core';

const styles = StyleSheet.create({
  appbar: {
    padding: Sizes.Regular,
    backgroundColor: Colors.Primary,
    elevation: Sizes.XSmall,
  },
  appbarText: {
    fontSize: FontSize.Regular,
    color: Colors.White,
  },
});

interface Props {
  renderTitle: () => React.ReactElement<any> | null;
}

export const AppbarTitle: React.StatelessComponent<{ onPress: () => void}> =
  (props) => (<Text {...props} style={styles.appbarText}/>);

export class Appbar extends React.Component<Props> {
  public render() {
    return (
      <View style={styles.appbar}>
        {this.props.renderTitle()}
      </View>);
  }
}
