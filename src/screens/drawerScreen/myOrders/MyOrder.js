import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import myOrderStyle from './myOrderStyle';
import {fonts} from '../../../utils/Theme';
import {verticalScale} from '../../../utils/Dimension';

const MyOrder = ({navigation}) => {
  return (
    <View style={myOrderStyle.wholePage}>
      <TouchableOpacity onPress={()=>navigation.navigate('Orders')} activeOpacity={1} style={{marginVertical:verticalScale(10)}}>
        <View style={myOrderStyle.MainBox}>
          <View style={myOrderStyle.leftBox}>
            <View>
              <View style={myOrderStyle.topTextContainer}>
                <Text style={myOrderStyle.orderText}>Order Id: </Text>
                <Text style={myOrderStyle.orderId}>123ORD7890</Text>
              </View>

              <Text
                style={{
                  fontFamily: fonts.Medium,
                  marginTop: verticalScale(5),
                  color: 'black',
                }}>
                26 Aug 2021 | 10:53 am
              </Text>
            </View>

            <View style={myOrderStyle.bottomTextContainer}>
              <Text style={myOrderStyle.orderText}>Order Amount:</Text>
              <Text style={myOrderStyle.orderId}> ₹ 2998.00</Text>
            </View>
          </View>
          <View>
            <Text style={myOrderStyle.statusText}>Status</Text>
          </View>
        </View>
      </TouchableOpacity>

     
    </View>
  );
};

export default MyOrder;
