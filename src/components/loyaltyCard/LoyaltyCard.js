import { View, Text } from 'react-native'
import React from 'react'
import { loyaltyCardStyle } from './loyaltyCardStyle'

const LoyaltyCard = () => {
  return (
        <View style={loyaltyCardStyle.cardmain}>
          <View style={loyaltyCardStyle.cardLeft}>
            <View style={loyaltyCardStyle.cardTopText}>
              <Text style={loyaltyCardStyle.headingText}>Order Id:</Text>
              <Text style={loyaltyCardStyle.OrderNumber}>123ORD7890</Text>
            </View>
            <Text style={loyaltyCardStyle.dateView}>26 Aug 2021 | 10:53 am </Text>
          </View>
          <View>
           <Text style={loyaltyCardStyle.points}> +12 pts </Text>
          </View>
    </View>
  )
}

export default LoyaltyCard