import * as React from 'react';
import {
  AppRegistry,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import {
  Appbar,
  AppbarTitle,
  Card,
  FullScreenModal,
  HorizontalLine,
  ListSelector,
  MainCard,
  Section,
  SectionWithGutter  } from 'app/new_components';
import { Colors, FontSize, Sizes } from 'app/new_components/core';
import { H3 } from 'app/new_components/atoms';

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
    const data = [{key: 'Setembro/2017'},
            {key: 'Outubro/2017'},
            {key: 'Novembro/2017'},
            {key: 'Dezembro/2017'}];
    return (
      <ScrollView style={{backgroundColor: Colors.GrayXLight, flex: 1}}>
        <Appbar renderTitle={() =>
          (<AppbarTitle onPress={() => this.toggleMonthSelector()}>{this.state.currentMonth}</AppbarTitle>)}/>
        <FullScreenModal visible={this.state.visible} onRequestClose={() => this.toggleMonthSelector()}>
            <ListSelector
              renderTitle={() => (<H3>Escolha o mês</H3>)}
              data={data}
              renderItem={this.renderItem}
              onItemSelected={(item) => this.onItemSelected(item)}
              />
        </FullScreenModal>
        <SectionWithGutter>
            <MainCard/>
        </SectionWithGutter>
        <Section>
          <Text style={{fontSize: FontSize.XSmall,
              marginHorizontal: Sizes.Regular, marginBottom: Sizes.Small}}>MOVIMENTAÇÕES</Text>
          <FlatList
            data={[{key: 1}, {key: 2}, {key: 3}]}
            renderItem={({item}) => (<Card />)}
            ItemSeparatorComponent={() => (<HorizontalLine color={Colors.Gray}/>)}/>
        </Section>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('MyAwesomeProject', () => MyAwesomeProject);
