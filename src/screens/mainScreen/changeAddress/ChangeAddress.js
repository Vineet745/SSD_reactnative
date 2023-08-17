import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChangeAddressStyle } from './changeAddressStyle'
import AntDesign from "react-native-vector-icons/AntDesign"
import { horizontalScale, verticalScale } from '../../../utils/Dimension'
import Search from '../../../components/searchTab/Search'
import { colors, fonts } from '../../../utils/Theme'
import { useNavigation } from '@react-navigation/native'

const ChangeAddress = () => {
  const {navigate} = useNavigation()
  return (
    <View style={{flex:1}}>
        {/* <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:horizontalScale(10)}}>
        <Text style={{fontFamily:fonts.SemiBold,color:"#538bfc"}}>Use Current Location</Text>
        </View> */}
      <View style={ChangeAddressStyle.changeAddressMain}>
        <View style={ChangeAddressStyle.AddressBox}>
            <View style={ChangeAddressStyle.addressHolder}>
            <Text style={ChangeAddressStyle.addressText}>111/A Satyagarh Marg Colony, Phase IV, Near Hanuman Mandir, Prayag
              Raaj, Uttar Pradesh - 110223</Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>navigate('Confirm Address')} style={ChangeAddressStyle.buttonStyle}>
                  <AntDesign name="right" size={25} />
                </TouchableOpacity>
              </View>
        </View>

        <View style={ChangeAddressStyle.AddressBox}>
            <View style={ChangeAddressStyle.addressHolder}>
            <Text style={ChangeAddressStyle.addressText}>111/A Satyagarh Marg Colony, Phase IV, Near Hanuman Mandir, Prayag
              Raaj, Uttar Pradesh - 110223</Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>navigate('Confirm Address')} style={ChangeAddressStyle.buttonStyle}>
                  <AntDesign name="right" size={25} />
                </TouchableOpacity>
              </View>
        </View>

        <View style={ChangeAddressStyle.AddressBox}>
            <View style={ChangeAddressStyle.addressHolder}>
            <Text style={ChangeAddressStyle.addressText}>111/A Satyagarh Marg Colony, Phase IV, Near Hanuman Mandir, Prayag
              Raaj, Uttar Pradesh - 110223</Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>navigate('Confirm Address')} style={ChangeAddressStyle.buttonStyle}>
                  <AntDesign name="right" size={25} />
                </TouchableOpacity>
              </View>
        </View>

        <View style={ChangeAddressStyle.AddressBox}>
            <View style={ChangeAddressStyle.addressHolder}>
            <Text style={ChangeAddressStyle.addressText}>111/A Satyagarh Marg Colony, Phase IV, Near Hanuman Mandir, Prayag
              Raaj, Uttar Pradesh - 110223</Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>navigate('Confirm Address')} style={ChangeAddressStyle.buttonStyle}>
                  <AntDesign name="right" size={25} />
                </TouchableOpacity>
              </View>
        </View>

        
    </View>
    </View>
  )
}

export default ChangeAddress