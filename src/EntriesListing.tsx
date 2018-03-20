import * as React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import { Colors, FontSize, Sizes } from 'app/components/core';
import { FloatActionButton, H3, HorizontalLine } from 'app/components/atoms';
import { MainCard, Card } from 'app/components/molecules';
import { Appbar, AppbarTitle } from 'app/components/organisms';
import { FullScreenModal, Section, SectionWithGutter } from 'app/components/templates';
import { EntryForm } from './EntryForm';
import { ListSelector, } from 'app/components/pages';

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

export class EntriesListing extends React.Component<any, any> {

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
