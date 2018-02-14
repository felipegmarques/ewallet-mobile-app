import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, AppbarTitle } from '../../../lib/new_components/Appbar';
import { Sizes } from '../../../lib/new_components/core';

const styles = StyleSheet.create({
  container: {
    paddingLeft: Sizes.Regular,
    paddingRight: Sizes.Regular,
  },
  removeContainer: {
    marginLeft: -Sizes.Regular,
    marginRight: -Sizes.Regular,
  },
});

export default () => (<View style={styles.container}>
    <Text>Appbar with title</Text>
    <View style={[styles.removeContainer, {marginTop: Sizes.Small}]}>
      <Appbar renderTitle={() => <AppbarTitle>Setembro/2017</AppbarTitle>}/>
    </View>
  </View>)
