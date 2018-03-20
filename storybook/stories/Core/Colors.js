import React from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../lib/components/core';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  cardColor: {
    height: 40,
  },
  cardColorLabel: {
    marginTop: 4,
  }

});

const ColorCard = ({name, color, ...otherProps}) => (<View {...otherProps}>
    <View style={[ styles.cardColor, { backgroundColor: color}]}/>
    <Text style={styles.cardColorLabel}>{name}: {color}</Text>
  </View>);

const Pallete = ({name, colors}) => {
  const renderColorCard = ({item, index}) => (<ColorCard
              style={[{flex: 0.5}, (index % 2 == 0) ? {marginRight: 8} : {marginLeft: 8}]}
              name={item.name}
              color={item.color}/>)
  return (
      <View style={{marginBottom: 16}}>
        <Text style={{marginBottom: 8}}>{name}</Text>
        <FlatList data={colors.map((val, index) => ({...val, key: index}))}
          renderItem={renderColorCard}
          horizontal={false}
          numColumns={2}
          ItemSeparatorComponent={() => (<View style={{height: 8}}/>)}
          />
     </View>)}

export default () =>
    <ScrollView style={styles.container}>
      <Pallete name="Brand Colors"
        colors={[
          {name: 'Light Blue', color: Colors.LightBlue},
          {name: 'Blue', color: Colors.Blue},
          {name: 'Red', color: Colors.Red},
          {name: 'Green', color: Colors.Green},
          {name: 'Yellow', color: Colors.Yellow}
        ]}/>
      <Pallete name="App Colors"
        colors={[
          {name: 'CTA', color: Colors.CTA},
          {name: 'Primary', color: Colors.Primary},
          {name: 'Secondary', color: Colors.Secondary},
          {name: 'Success', color: Colors.Success},
          {name: 'Danger', color: Colors.Danger}]}/>
      <Pallete name="Grayscale"
        colors={[
          {name: 'Black', color: Colors.Black},
          {name: 'GrayXDark', color: Colors.GrayXDark},
          {name: 'GrayDark', color: Colors.GrayDark},
          {name: 'Gray', color: Colors.Gray},
          {name: 'GrayLight', color: Colors.GrayLight},
          {name: 'GrayXLight', color: Colors.GrayXLight},
          {name: 'White', color: Colors.White},
        ]}/>
    </ScrollView>


