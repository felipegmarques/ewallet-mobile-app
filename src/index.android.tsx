import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Appbar,
  AppbarTitle,
  Card,
  FloatActionButton,
  FullScreenModal,
  HorizontalLine,
  ListSelector,
  MainCard,
  Section,
  SectionWithGutter  } from 'app/new_components';
import { Colors, FontSize, Sizes } from 'app/new_components/core';
import { H3 } from 'app/new_components/atoms';
import { EntryForm } from './EntryForm';

const styles = StyleSheet.create({
  fabPosition: {
    marginRight: Sizes.Regular,
    marginBottom: Sizes.Regular,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  item: {
    fontSize: FontSize.Small,
    color: Colors.GrayXDark,
    paddingVertical: Sizes.Regular,
  },
});

class MyAwesomeProject extends React.Component<any, any> {

  public static navigationOptions = {
    header: null,
  };

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
    console.log(styles.fabPosition);
    return (
      <View style={{ flex: 1 }}>
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
        <ScrollView style={{backgroundColor: Colors.GrayXLight, flex: 1}}>
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
        <FloatActionButton style={styles.fabPosition}
          onPress={() => this.props.navigation.navigate('Entry')}>+</FloatActionButton>
      </View>
    );
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: MyAwesomeProject,
  },
  Entry: {
    screen: EntryForm,
  },
}, { headerMode: 'screen'});

export default class App extends React.Component {
  public render() {
    return <RootStack/>;
  }
}

AppRegistry.registerComponent('MyAwesomeProject', () => App);
