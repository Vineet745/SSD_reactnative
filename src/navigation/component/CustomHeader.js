import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Dimension';
import {fonts} from '../../utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({headerText,iconname}) => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: verticalScale(6),
        paddingRight: horizontalScale(20),
      }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: moderateScale(10),
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <AntDesign name="left" size={22} style={{color: 'black'}} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: fonts.SemiBold,
            color: 'black',
            fontSize: 18,
            marginLeft: verticalScale(10),
          }}>
          {headerText}
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Feather name={iconname} size={22} style={{color: 'black'}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
