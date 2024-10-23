import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { label: 'Studying', value: '1' },
  { label: 'Cartoon', value: '2' },
  { label: 'Novel', value: '3' },
  { label: 'Others', value: '4' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState<string | null>(null);
  const [chkBox, setChkBox] = useState({
    Studying: false,
    Cartoon: false,
    Novel: false,
    Others: false,
  });

  const renderItem = (item: { label: string; value: string }) => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
      {item.value === value && (
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      )}
    </View>
  );

  const handleChange = (item: { label: string; value: string }) => {
    setValue(item.value);

    // อัปเดตสถานะ chkBox
    setChkBox(prevState => ({
      ...prevState,
      [item.label]: true, // เปลี่ยนเฉพาะค่า label ที่เลือกเป็น true
    }));

  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Categories"
      value={value}
      onChange={handleChange}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      )}
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
