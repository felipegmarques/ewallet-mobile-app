import * as React from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, View } from 'react-native';
import { Colors, FontSize, Sizes } from './core';
import { ModalSelector } from './ModalSelector';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.33)',
  },
  innerContainer: {
    backgroundColor: Colors.White,
    marginHorizontal: Sizes.Regular,
    paddingHorizontal: Sizes.Regular,
    marginTop: Sizes.Large,
    marginBottom: Sizes.XLarge,
    borderRadius: Sizes.Small / 2,
  },
  item: {
    fontSize: FontSize.Small,
    color: Colors.GrayXDark,
    paddingVertical: Sizes.Regular,
  },
  h3: {
    fontSize: FontSize.Regular,
    color: Colors.Black,
    marginVertical: Sizes.Small,
  },
});

const data = [
                  {key: 1, value: 'amfwie'},
                  {key: 2, value: 'amfwie'},
                  {key: 3, value: 'amfwie'},
                  {key: 4, value: 'amfwie'},
                  {key: 5, value: 'amfwie'},
                  {key: 6, value: 'amfwie'},
                  {key: 7, value: 'amfwie'},
                  {key: 8, value: 'amfwie'},
                  {key: 9, value: 'amfwie'},
                  {key: 10, value: 'amfwie'},
                  {key: 11, value: 'amfwie'},
                  ];

export class MonthSelector extends React.Component<{}, { visible: boolean}> {

  public constructor(props: {}) {
    super(props);
    this.state = { visible: false };
  }

  public onCurrentValuePress() {
    this.setState((prevState) => ({...prevState, visible: !prevState.visible}));
  }

  public renderItem(item: any, onPress: () => void) {
    return (<Text style={styles.item} onPress={onPress}>{item.value}</Text>);
  }

  public render() {
    return (
      <View>
        <Text onPress={() => this.onCurrentValuePress()}>CurrentValue</Text>
        <ModalSelector
          visible={this.state.visible}
          data={data}
          renderTitle={() => (<Text style={styles.h3}>Choose month</Text>)}
          renderItem={this.renderItem}
          onItemSelected={() => this.onCurrentValuePress()}
          onRequestClose={() => this.onCurrentValuePress()}/>
     </View>);
  }
}
