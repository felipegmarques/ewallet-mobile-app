import * as React from 'react';
import { FlatList, ListRenderItemInfo, Modal, StyleSheet, Text, View } from 'react-native';
import { Colors, FontSize, Sizes } from './core';
import { FullScreenModal } from './Modals';
import { HorizontalLine } from './HorizontalLine';

interface ListSelectorProperties {
  data: any[];
  renderTitle: () => React.ReactElement<any>;
  renderItem: (item: any, onPress: () => void) => React.ReactElement<any> | null;
  onItemSelected: (item: any) => void;
}

export class ListSelector extends React.Component<ListSelectorProperties> {

  public render() {
    return (<View>
          {this.props.renderTitle()}
          <HorizontalLine color={Colors.Black}/>
          <FlatList data={this.props.data}
            renderItem={({item}) => this.props.renderItem(item, () => this.props.onItemSelected(item))}
            ItemSeparatorComponent={() =>
                (<HorizontalLine color={Colors.Gray}/>)}/>
        </View>);
  }
}
