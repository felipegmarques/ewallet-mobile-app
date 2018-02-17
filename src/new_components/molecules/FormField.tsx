import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Colors, FontSize, Sizes } from 'app/new_components/core';

export const FormField: React.StatelessComponent<{style?:  any}> =
  ({style, ...props}) => (<Text {...props} style={[style]} />)
