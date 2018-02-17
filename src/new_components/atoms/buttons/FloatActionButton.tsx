import * as React from 'react';
import { StyleSheet, Text, TextStyle, TouchableHighlight, View } from 'react-native';
import { Colors, FontSize, Sizes } from 'app/new_components/core';

const FAB_SIZE = 56;
const FAB_ELEVATION = 6;

const styles = StyleSheet.create({
  floatActionButton: {
    height: FAB_SIZE,
    width: FAB_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: FAB_SIZE / 2,
    elevation: FAB_ELEVATION,
  },
  icon: {
    fontSize: FontSize.Large,
  },
});

interface Props {
  renderTitle: () => React.ReactElement<any> | null;
}
/**
 * All the styles can be passed through the style props, except for color that must be pass
 * through the color prop.
 *
 */
export const FloatActionButton: React.StatelessComponent<{onPress?: () => void, color?: string, style?: any}> =
  ({children, color = Colors.White, style = { }, ...props}) => {
      return (
        <TouchableHighlight
          style={[{ backgroundColor: Colors.Primary }, style, styles.floatActionButton]}
          underlayColor={Colors.Primary}
          {...props}>
          <Text style={[{ color }, styles.icon]}>{children}</Text>
        </TouchableHighlight>);
};
