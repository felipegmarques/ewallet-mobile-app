import React from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet } from 'react-native';
import { FontSize } from '../../../lib/new_components/core';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default () =>
    <View style={styles.container}>
      <Text style={{fontSize: FontSize.XLarge}}>XLarge</Text>
      <Text style={{fontSize: FontSize.Large}}>Large</Text>
      <Text style={{fontSize: FontSize.Regular}}>Regular</Text>
      <Text style={{fontSize: FontSize.Small}}>Small</Text>
      <Text style={{fontSize: FontSize.XSmall}}>XSmall</Text>
    </View>


