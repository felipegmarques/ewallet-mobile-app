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

interface ModalProperties {
  visible: boolean;
  onRequestClose: () => void;
}

export const FullScreenModal: React.StatelessComponent<ModalProperties> =
  ({children, visible, onRequestClose}) => (
        <Modal
          visible={visible}
          transparent={true}
          animationType='slide'
          onRequestClose={onRequestClose}>
          <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                {children}
              </View>
            </View>
        </Modal>);
