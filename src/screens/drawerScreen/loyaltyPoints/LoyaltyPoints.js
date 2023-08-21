import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../utils/Dimension'
import LoyaltyCard from '../../../components/loyaltyCard/LoyaltyCard'
import { fonts } from '../../../utils/Theme'
import loyaltyPointsStyle from './loyaltyPointsStyle'

const LoyaltyPoints = () => {
  return (
    <View style={{flex:1,paddingHorizontal:horizontalScale(10),backgroundColor:"white"}}>
    <View style={loyaltyPointsStyle.loyaltyMainView}>
      {/* Background */}
     
    <View style={loyaltyPointsStyle.loyaltyTopView}>
      <Text style={loyaltyPointsStyle.topText}>History</Text>
      <View style={loyaltyPointsStyle.ScrollView}>
      <ScrollView  showsVerticalScrollIndicator={false} style={{paddingBottom:verticalScale(50)}}>
        <LoyaltyCard/>
        <LoyaltyCard/>
        <LoyaltyCard/>
        <LoyaltyCard/>
        <LoyaltyCard/>
        <LoyaltyCard/>
        <LoyaltyCard/>
        <LoyaltyCard/>
      </ScrollView>
      </View>

    </View>
    </View>
          <View style={loyaltyPointsStyle.bottomSheetView}>
          <Text style={loyaltyPointsStyle.bottomSheetText}>- Lorem ipsum dolor sit amet consectetur.</Text>

          <Text style={loyaltyPointsStyle.bottomSheetText}>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <Text style={loyaltyPointsStyle.bottomSheetText}>- .Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda quis numquam eveniet? Esse laborum officia reiciendis?</Text>
        </View>
        </View>
  
  )
}

export default LoyaltyPoints