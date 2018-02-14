import * as React from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Appbar, AppbarTitle } from './new_components/Appbar';
import { Colors, FontSize, H3, Sizes  } from './new_components/core';
import { ModalSelector } from './new_components/ModalSelector';

const styles = StyleSheet.create({
  item: {
    fontSize: FontSize.Small,
    color: Colors.GrayXDark,
    paddingVertical: Sizes.Regular,
  },
});

export default class MyAwesomeProject extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);
    this.state = { visible: false, currentMonth: 'Setembro/2017' };
  }

  public toggleMonthSelector() {
    this.setState((prevState: any) => ({...prevState, visible: !prevState.visible}));
  }

  public renderItem(item: any, onPress: () => void) {
    return (<Text style={styles.item} onPress={onPress}>{item.key}</Text>);
  }

  public onItemSelected(item: any) {
    this.setState((prevState: any) => ({...prevState, visible: false, currentMonth: item.key}));
  }

  public render() {
    return (
      <View>
        <Appbar renderTitle={() =>
          (<AppbarTitle onPress={() => this.toggleMonthSelector()}>{this.state.currentMonth}</AppbarTitle>)}/>
        <ModalSelector
          visible={this.state.visible}
          data={[
            {key: 'Setembro/2017'},
            {key: 'Outubro/2017'},
            {key: 'Novembro/2017'},
            {key: 'Dezembro/2017'}]}
          renderTitle={() => (<H3>Escolha o mês</H3>)}
          renderItem={this.renderItem}
          onItemSelected={(item) => this.onItemSelected(item)}
          onRequestClose={() => this.toggleMonthSelector()}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('MyAwesomeProject', () => MyAwesomeProject);
