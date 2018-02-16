import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontSize, Sizes } from './core';

const styles = StyleSheet.create({
  section: {
    marginVertical: Sizes.Small,
  },
  gutter: {
    marginHorizontal: Sizes.Small,
  },
});

export const Section: React.StatelessComponent<{}> =
  (props) => (<View {...props} style={styles.section}/>);

export const SectionWithGutter: React.StatelessComponent<{}> =
  (props) => (<View {...props} style={[styles.section, styles.gutter]}/>);
