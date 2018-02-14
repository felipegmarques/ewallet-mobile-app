import * as React from 'react';
import { FlatList, ListRenderItemInfo, Modal, StyleSheet, Text, View } from 'react-native';
import { Colors, FontSize, Sizes } from './core';
import { HorizontalLine } from './HorizontalLine';

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
interface ModalSelectorProperties {
  visible: boolean;
  data: any[];
  renderTitle: () => React.ReactElement<any>;
  renderItem: (item: any, onPress: () => void) => React.ReactElement<any> | null;
  onItemSelected: (item: any) => void;
  onRequestClose: () => void;
}

export class ModalSelector extends React.Component<ModalSelectorProperties> {

  public render() {
    return (
        <Modal
          visible={this.props.visible}
          transparent={true}
          animationType='slide'
          onRequestClose={this.props.onRequestClose}>
          <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                {this.props.renderTitle()}
                <HorizontalLine color={Colors.Black}/>
                <FlatList data={this.props.data}
                  renderItem={({item}) => this.props.renderItem(item, () => this.props.onItemSelected(item))}
                  ItemSeparatorComponent={() =>
                    (<HorizontalLine color={Colors.Gray}/>)}/>
              </View>
            </View>
        </Modal>);
  }
}
