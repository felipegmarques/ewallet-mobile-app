import * as React from 'react';
import { Platform, StyleSheet, Text, TextStyle } from 'react-native';
import fontMaker from './utilities/FontMaker';

const styles = StyleSheet.create({
  h1: {
    ...fontMaker({fontFamily: 'Nunito', fontWeight: 'bold'}, Platform.OS),
    fontSize: 24,
    color: '#4f4f4f',
  },
  h2: {
    ...fontMaker({ fontFamily: 'Nunito' }, Platform.OS),
    fontSize: 16,
    color: '#4f4f4f',
    letterSpacing: 0.5,
  },
});

const buildHeader = (style: TextStyle): React.StatelessComponent<{onPress?: (event: any) => void}> => {
  return ({onPress, children}) => <Text onPress={onPress} style={style}>{children}</Text>;
};

export const H1: React.StatelessComponent<{ onPress?: (event: any) => void}> = buildHeader(styles.h1);
export const H2: React.StatelessComponent<{ onPress?: (event: any) => void}> = buildHeader(styles.h2);
