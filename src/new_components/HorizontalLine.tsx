import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Colors, FontSize, Sizes } from './core';

const styles = StyleSheet.create({
  horizontalLine: {
    marginHorizontal: - Sizes.Regular,
    backgroundColor: Colors.Gray,
    height: StyleSheet.hairlineWidth,
  },
});

export const HorizontalLine: React.StatelessComponent<{color: string}> =
  ({color, ...props}) => (<View {...props} style={[styles.horizontalLine, {backgroundColor: color}]}/>);
