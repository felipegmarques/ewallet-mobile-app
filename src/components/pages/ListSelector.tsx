import * as React from 'react';
import { FlatList, ListRenderItemInfo, Modal, StyleSheet, Text, View } from 'react-native';

import { Colors, FontSize, Sizes } from 'app/components/core';
import { HorizontalLine } from 'app/components/atoms/HorizontalLine';
import { FullScreenModal } from 'app/components/templates';

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
