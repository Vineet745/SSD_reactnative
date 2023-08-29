import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {fonts} from '../../utils/Theme';
import {useDispatch, useSelector} from 'react-redux';

const CustomDropdown = ({
  backgroundColor,
  placeholder,
  data,
  labelField,
  valueField,
  onChangeText,
}) => {
  const [selectedState, setSelectedState] = useState();
  const [isFocus, setIsFocus] = useState(false);


  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      {data && (
        <Dropdown
          style={[styles.dropdown, isFocus]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField={labelField}
          valueField={valueField}
          placeholder={!isFocus ? placeholder : '...'}
          value={selectedState}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSelectedState(item.id);
            onChangeText(item[valueField]);
            setIsFocus(false);
          }}
        />
      )}
    </View>
  );
};
export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eef3f6',
    borderRadius: 8,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontFamily: fonts.SemiBold,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 13,
    fontFamily: fonts.SemiBold,
  },
  selectedTextStyle: {
    fontSize: 13,
    fontFamily: fonts.Medium,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
