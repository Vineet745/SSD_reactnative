import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../utils/Theme';
import {moderateScale, verticalScale} from '../utils/Dimension';

const Button = ({title, backgroundColor, pressData}) => {
  return (
    <TouchableOpacity
      onPress={pressData}
      style={{
        backgroundColor: backgroundColor,
        marginVertical: verticalScale(12),
        paddingVertical: verticalScale(10),
        borderRadius: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: colors.white, fontFamily: fonts.Medium}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
