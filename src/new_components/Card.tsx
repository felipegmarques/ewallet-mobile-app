import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontSize, Sizes } from './core';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    paddingVertical: Sizes.Regular,
    paddingHorizontal: Sizes.Regular,
    flexDirection: 'row',
  },
});

export class Card extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={{fontSize: FontSize.XSmall}}>SORVETE</Text>
          <Text style={{ fontSize: FontSize.Regular}}> -2.20 </Text>
        </View>
        <View>
          <Text> Ontem </Text>
        </View>
      </View>
    );
  }
}
