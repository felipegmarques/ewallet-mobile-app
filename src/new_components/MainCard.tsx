import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontSize, Sizes } from './core';
import { HorizontalLine } from './HorizontalLine';

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: Sizes.Small,
    marginHorizontal: Sizes.Small,
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
          <Text style={{ fontSize: FontSize.XLarge }}>-406.60</Text>
          <Text style={{marginBottom: Sizes.Regular, fontSize: FontSize.Small}}>SALDO ATUAL</Text>
          <HorizontalLine color={Colors.Black} width={Sizes.XLarge}/>
          <Text style={{marginTop: Sizes.Regular}}>{'Anterior:  -902.22'}</Text>
        </View>
        <View style={styles.subContent}>
          <View style={styles.secondaryCard}>
            <Text style={{fontSize: FontSize.XSmall}}>CRÉDITOS</Text>
            <Text style={{fontSize: FontSize.Regular}}>0,63k</Text>
          </View>
          <View style={styles.secondaryCard}>
            <Text style={{fontSize: FontSize.XSmall}}>DÉBITOS</Text>
            <Text style={{fontSize: FontSize.Regular}}>1,12k</Text>
          </View>
        </View>
      </View>);
  }
}
