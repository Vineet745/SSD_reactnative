import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../utils/Dimension'
import { fonts } from '../../../utils/Theme'
import Button from '../../../components/Button'
import CustomDropdown from '../../../components/dropDown/CustomDropdown'

const ReportIssue = () => {
  return (
    <View style={{backgroundColor:"white",flex:1,padding:moderateScale(16)}}>
        <View style={{flex:1}}>
        <View style={{backgroundColor:"#eef3f6",paddingVertical:verticalScale(10),paddingHorizontal:horizontalScale(10)}}>
            <Text style={{fontFamily:fonts.SemiBold,marginBottom:verticalScale(5)}}>Select Order id</Text>
            <View>
            <CustomDropdown/>
            </View>
        </View>


        <View style={{marginTop:verticalScale(10),backgroundColor:"#eef3f6",paddingVertical:verticalScale(10),paddingHorizontal:horizontalScale(10)}}>
            <Text style={{fontFamily:fonts.SemiBold,marginBottom:verticalScale(5),color:"#94a8b7"}}>Select Issue</Text>
            <View >
            <CustomDropdown/>
            </View>
            <View >
            <CustomDropdown/>
            </View>
            <View style={{backgroundColor:"white",marginTop:verticalScale(10),borderRadius:moderateScale(10)}}>
            <TextInput multiline={true} numberOfLines={6} style={{paddingLeft:horizontalScale(15),fontFamily:fonts.Medium}} placeholder='Enter here...'>
            </TextInput>
            </View>
        </View>
        </View>
        <Button title="Submit Report" backgroundColor="black"/>
    </View>
  )
}

export default ReportIssue