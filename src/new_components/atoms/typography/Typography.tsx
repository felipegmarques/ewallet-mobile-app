import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Colors, FontSize, Sizes } from 'app/new_components/core';

const styles = StyleSheet.create({
  h2: {
    marginBottom: Sizes.Regular,
    fontSize: FontSize.Small},
  h3: {
    fontSize: FontSize.Regular,
    color: Colors.Black,
    marginVertical: Sizes.Small,
  },
  h4: {
    fontSize: FontSize.XSmall,
  },
  moneyLarge: {
    fontSize: FontSize.XLarge,
  },
  moneyRegular: {
    fontSize: FontSize.Regular,
  },
});

export const H2: React.StatelessComponent<{}> =
  (props) => (<Text {...props} style={styles.h2}/>);

export const H3: React.StatelessComponent<{}> =
  (props) => (<Text {...props} style={styles.h3}/>);

export const H4: React.StatelessComponent<{}> =
  (props) => (<Text {...props} style={styles.h4}/>);

export const MoneyRegular: React.StatelessComponent<{}> =
  (props) => (<Text {...props} style={styles.moneyRegular}/>);

export const MoneyLarge: React.StatelessComponent<{}> =
  (props) => (<Text {...props} style={styles.moneyLarge}/>);
