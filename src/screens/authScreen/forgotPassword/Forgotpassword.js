import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../components/Button';
import Background from '../../../components/Background';
import {colors, fonts} from '../../../utils/Theme';
import forgotPasswordStyle from './forgotPasswordStyle';

const Forgotpassword = ({navigation}) => {
  return (
    <View style={forgotPasswordStyle.registerMain}>
      <Background />

      <View style={forgotPasswordStyle.textArea}>
        <Text style={forgotPasswordStyle.registerTaintext}>
          Forgot Password
        </Text>
        
        <View style={forgotPasswordStyle.inputHolder}>
          <TextInput
            style={forgotPasswordStyle.textInput}
            placeholder="Mobile No."
          />
          <TextInput
            style={forgotPasswordStyle.textInput}
            placeholder="Password"
          />
          <TextInput
            style={forgotPasswordStyle.textInput}
            placeholder="Confirm Password"
          />
        </View>

        <View>
          <Button backgroundColor={colors.violetcolor} title="Save Password" />
        </View>
      </View>
    </View>
  );
};

export default Forgotpassword;
