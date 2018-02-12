import * as React from 'react';
import { Platform, StyleSheet, Text, TextStyle } from 'react-native';
import Colors from './Colors';
import Sizes from './Spacing';
import fontMaker from './utilities/FontMaker';

const styles = StyleSheet.create({
  h1: {
    ...fontMaker({fontFamily: 'Nunito', fontWeight: 'bold'}, Platform.OS),
    fontSize: Sizes.Large,
    color: Colors.GrayXDark,
  },
  h2: {
    ...fontMaker({ fontFamily: 'Nunito' }, Platform.OS),
    fontSize: Sizes.Regular,
    color: Colors.GrayXDark,
    letterSpacing: 0.05,
  },
  h3: {
    ...fontMaker({fontFamily: 'Nunito', fontWeight: 'bold'}, Platform.OS),
    fontSize: Sizes.XSmall,
    color: Colors.GrayXDark,
    letterSpacing: 0.05,
  },
  h4: {
    ...fontMaker({fontFamily: 'Nunito'}, Platform.OS),
    fontSize: Sizes.Small,
    color: Colors.Gray,
    letterSpacing: 0.05,
  },
  label: {
    ...fontMaker({fontFamily: 'Nunito'}, Platform.OS),
    fontSize: Sizes.Small,
    letterSpacing: 0.05,
  },
  caption: {
    ...fontMaker({fontFamily: 'Nunito'}, Platform.OS),
    fontSize: Sizes.XSmall,
    letterSpacing: 0.05,
  },
  body: {
    ...fontMaker({fontFamily: 'Nunito'}, Platform.OS),
    fontSize: Sizes.Small,
    color: Colors.GrayXDark,
    letterSpacing: 0.05,
  },

  money: {
    ...fontMaker({fontFamily: 'Nunito', fontWeight: '600'}, Platform.OS),
    fontSize: Sizes.Large,
    color: Colors.GrayXDark,
  },
  moneyLarge: { fontSize: Sizes.XLarge },
  moneySmall: { fontSize: Sizes.Regular },
});

const buildHeader = (style: TextStyle): React.StatelessComponent<{onPress?: (event: any) => void}> => {
  return ({onPress, children}) => <Text onPress={onPress} style={style}>{children}</Text>;
};

const buildMoneyVariant = (variantStyle: TextStyle = {}): React.StatelessComponent<{}> => {
  return ({children}) => <Text style={[styles.money, variantStyle]} >{children}</Text>;
};

interface HeaderProps {
  onPress?: (event: any) => void;
}

export const H1: React.StatelessComponent<HeaderProps> = buildHeader(styles.h1);
export const H2: React.StatelessComponent<HeaderProps> = buildHeader(styles.h2);
export const H3: React.StatelessComponent<HeaderProps> = buildHeader(styles.h3);
export const H4: React.StatelessComponent<HeaderProps> = buildHeader(styles.h4);

export const Label: React.StatelessComponent<{color?: string}> =
  ({children, color = Colors.GrayXDark}) => <Text style={[styles.label, { color }]}>{children}</Text>;
export const Caption: React.StatelessComponent<{color?: string}> =
  ({children, color = Colors.GrayXDark}) => <Text style={[styles.caption, { color }]}>{children}</Text>;
export const Body: React.StatelessComponent<{}> = ({children}) => <Text style={styles.body}>{children}</Text>;
export const Money: React.StatelessComponent<{}> = buildMoneyVariant();
export const MoneyLarge: React.StatelessComponent<{}> = buildMoneyVariant(styles.moneyLarge);
export const MoneySmall: React.StatelessComponent<{}> = buildMoneyVariant(styles.moneySmall);
