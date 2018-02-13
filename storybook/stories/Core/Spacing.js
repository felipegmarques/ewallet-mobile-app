import React from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet } from 'react-native';
import Colors from '../../../lib/new_components/core/Colors';
import Sizes from '../../../lib/new_components/core/Spacing';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  cardSpace: {
    backgroundColor: Colors.GrayXDark,
  },
  cardLabel: {
    marginTop: 4,
  }

});

const SpaceCard = ({name, size}) => (<View style={{ width: 80, marginBottom: 16 }}>
    <View style={[ styles.cardSpace, { height: size, width: size}]}/>
    <Text style={styles.cardLabel}>{name}: {size}</Text>
  </View>);

export default () =>
    <ScrollView style={styles.container}>
      <Text style={{marginBottom: 8}}>Spaces</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <SpaceCard name='XLarge' size={Sizes.XLarge}/>
        <SpaceCard name='Large' size={Sizes.Large}/>
        <SpaceCard name='Regular' size={Sizes.Regular}/>
        <SpaceCard name='Small' size={Sizes.Small}/>
        <SpaceCard name='XSmall' size={Sizes.XSmall}/>
      </View>
    </ScrollView>


