import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Solid', value: '1' },
  { label: 'Pulse', value: '2' },
  { label: 'Fade', value: '3' },
  { label: 'Rainbow', value: '4' },
];

export const SelectEffect = () => {
  const [value, setValue] = useState(data[0].value);

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
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select"
        value={value}
        onChange={(item) => {
          setValue(item.value);
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
    height: 50,
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
