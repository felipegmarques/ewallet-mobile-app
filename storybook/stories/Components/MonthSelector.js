import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MonthSelector } from '../../../lib/new_components/MonthSelector';
import { Sizes } from '../../../lib/new_components/core';

const styles = StyleSheet.create({
  container: {
    paddingLeft: Sizes.Regular,
    paddingRight: Sizes.Regular,
  },
});

export default () => (<View style={styles.container}>
    <MonthSelector />
  </View>)
