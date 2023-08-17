import { View, Text, TextInput } from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import confirmAddressStyle from './confirmAddressStyle';
import { horizontalScale, moderateScale } from '../../../utils/Dimension';
import Button from '../../../components/Button';
import { colors } from '../../../utils/Theme';


const ConfirmAddress = () => {

    

  return (
    <View style={{flex:1,backgroundColor:"white",padding:moderateScale(15)}}>
    <View style={{flex:1}}>
        <View style={confirmAddressStyle.viewOne}>
            <TextInput style={[confirmAddressStyle.textInputbox,{width:horizontalScale(100)}]} placeholder='H.No'/>
            <TextInput style={[confirmAddressStyle.textInputbox,{width:horizontalScale(200)}]} placeholder='Floor/Apartment/Colony'/>
        </View>
        <TextInput style={confirmAddressStyle.textInputbox} placeholder='Address Line 1'/>
        <TextInput style={confirmAddressStyle.textInputbox} placeholder='Address Line 2'/>
        <View style={confirmAddressStyle.viewOne}>
            <TextInput style={[confirmAddressStyle.textInputbox,{width:horizontalScale(150)}]} placeholder='State'/>
            <TextInput style={[confirmAddressStyle.textInputbox,{width:horizontalScale(150)}]} placeholder='City'/>
        </View>
        <TextInput style={confirmAddressStyle.textInputbox} placeholder='PIN Code'/>

    </View>
        <Button title="Save as a Delivery Address" backgroundColor={colors.black}/>
    </View>
  )
}

export default ConfirmAddress