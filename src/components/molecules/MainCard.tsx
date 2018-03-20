import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, FontSize, Sizes } from 'app/components/core';
import { H2, H4, HorizontalLine, MoneyRegular, MoneyLarge } from 'app/components/atoms';

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: Sizes.Regular,
    borderRadius: Sizes.XSmall,
    backgroundColor: Colors.White,
    elevation: Sizes.XSmall / 2,
  },
  mainContent: {
    marginTop: Sizes.Regular,
    marginBottom: Sizes.Small,
    alignItems: 'center',
  },
  subContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Sizes.Regular,
    marginBottom: Sizes.Small,
  },
  secondaryCard: {
    flex: 1,
    alignItems: 'center',
  },
});

export class MainCard extends React.Component {
  public render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.mainContent}>
          <MoneyLarge> -406.60</MoneyLarge>
          <H2>SALDO ATUAL</H2>
          <HorizontalLine color={Colors.Black} width={Sizes.XLarge}/>
          <Text style={{marginTop: Sizes.Regular}}>{'Anterior:  -902.22'}</Text>
        </View>
        <View style={styles.subContent}>
          <View style={styles.secondaryCard}>
            <H4>CRÉDITOS</H4>
            <MoneyRegular>0,63k</MoneyRegular>
          </View>
          <View style={styles.secondaryCard}>
            <H4>DÉBITOS</H4>
            <MoneyRegular>1,12k</MoneyRegular>
          </View>
        </View>
      </View>);
  }
}
