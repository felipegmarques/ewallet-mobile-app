import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Colors, FontSize, Sizes } from 'app/components/core';

const styles = StyleSheet.create({
  horizontalLine: {
    marginHorizontal: - Sizes.Regular,
    backgroundColor: Colors.Gray,
    height: StyleSheet.hairlineWidth,
  },
});

export const HorizontalLine: React.StatelessComponent<{color: string, width?: number}> =
  ({color, width, ...props}) => (<View {...props} style={[styles.horizontalLine, {width, backgroundColor: color}]}/>);
