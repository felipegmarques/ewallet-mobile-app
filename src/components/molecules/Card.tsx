import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontSize, Sizes } from 'app/components/core';
import { H4, MoneyRegular } from 'app/components/atoms';

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
          <H4>SORVETE</H4>
          <MoneyRegular> -2.20 </MoneyRegular>
        </View>
        <Text> Ontem </Text>
      </View>
    );
  }
}
