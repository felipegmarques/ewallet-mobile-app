import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Colors, FontSize, Sizes } from './';

const styles = StyleSheet.create({
  h3: {
    fontSize: FontSize.Regular,
    color: Colors.Black,
    marginVertical: Sizes.Small,
  },
});

export const H3: React.StatelessComponent<{}> =
  (props) => (<Text {...props} style={styles.h3}/>);
