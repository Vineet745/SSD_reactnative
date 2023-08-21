import { View, Text } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../../../utils/Dimension'
import { contactInfoStyle } from './contactInfoStyle'
import { colors, fonts } from '../../../utils/Theme'
import Button from '../../../components/Button'

const ContactInfo = () => {
  return (
    <View style={{flex:1,backgroundColor:"white",paddingHorizontal:horizontalScale(20)}}>
    <View style={{flex:1,paddingVertical:verticalScale(10)}}>
      <Text style={{fontFamily:fonts.SemiBold,color:colors.black}}>Please feel free to contact us. We are here to help you.</Text>
      <View>
           <View style={contactInfoStyle.companyDetail}>
           <View style= {contactInfoStyle.bottomView} >
          <Text style={contactInfoStyle.heading}>Contact No.</Text>
          <Text style={contactInfoStyle.profileText}>0755 22 4560</Text>
        </View>

        <View style= {contactInfoStyle.bottomView} >
          <Text style={contactInfoStyle.heading}>Alternate Contact No.</Text>
          <Text style={contactInfoStyle.profileText}>0755 22 4587</Text>
        </View>

        <View style= {contactInfoStyle.bottomView} >
          <Text style={contactInfoStyle.heading}>Email</Text>
          <Text style={contactInfoStyle.profileText}>contact@ssd.com</Text>
        </View>
           </View>
      </View>
    </View>
    <Button title="Contact Customer Support" backgroundColor="black"/>
    </View>
  )
}

export default ContactInfo