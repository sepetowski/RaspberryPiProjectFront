/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import { Day, Effect } from '~/types/types';

interface Props {
  items: Effect[] | Day[];
  selectedItem: Effect | Day;
  onSelect: (effect: Effect | Day) => void;
}
export const SelectFromDropdown = ({ items, selectedItem, onSelect }: Props) => {
  return (
    <View className="w-full">
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        containerStyle={styles.container}
        itemContainerStyle={styles.containerStyle}
        itemTextStyle={styles.itemText}
        activeColor="#3333"
        data={items}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select"
        value={selectedItem.value}
        onChange={(item) => {
          onSelect({ label: item.label, value: item.value });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222222',
    borderColor: 'gray',
    padding: 16,
    borderRadius: 8,
    marginTop: 5,
  },
  dropdown: {
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  itemText: {
    color: 'white',
  },
  containerStyle: {
    borderRadius: 8,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
  },
});
