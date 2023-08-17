import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import checkOutStyle from './checkOutStyle';
import {fonts} from '../../../utils/Theme';
import {horizontalScale} from '../../../utils/Dimension';
import { useNavigation } from '@react-navigation/native';

const CheckOutPage = () => {
  const {navigate} = useNavigation()
  return (
    <View style={checkOutStyle.checkOutMain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={checkOutStyle.addressMain}>
          <View style={checkOutStyle.addressTop}>
            <Text style={checkOutStyle.DeliveryText}>Delivery Address</Text>
            <TouchableOpacity onPress={()=>navigate('Change Address')}>
              <Text style={checkOutStyle.ChangeText}>CHANGE ADDRESS</Text>
            </TouchableOpacity>
          </View>

          <View style={checkOutStyle.address}>
            <Text style={checkOutStyle.addressText}>
              111/A Satyagarh Marg Colony, Phase IV, Near Hanuman Mandir, Prayag
              Raaj, Uttar Pradesh - 110223
            </Text>
          </View>
        </View>

        <View style={checkOutStyle.contactView}>
          <Text style={checkOutStyle.contactMainText}>Contact Number</Text>
          <View style={checkOutStyle.inputView}>
            <TextInput
              style={{fontFamily: fonts.Medium}}
              placeholder="Enter Contact No. here..."></TextInput>
          </View>
        </View>

        {/* Loyalty View */}
        <View style={checkOutStyle.LoyaltyView}>
          <Text style={{fontFamily: fonts.Medium, color: '#7f94a2'}}>
            Loyalty Point
          </Text>
          <View style={checkOutStyle.loyaltyPoints}>
            <Text style={checkOutStyle.loyaltyPointsText}>
              My Loyalty Points Balance:
            </Text>
            <Text style={checkOutStyle.loyaltyPointsText}>253</Text>
          </View>
          <View style={checkOutStyle.ReddemView}>
            <TextInput
              style={{
                backgroundColor: 'white',
                width: horizontalScale(165),
                paddingLeft: horizontalScale(10),
                fontFamily: fonts.Medium,
              }}
              placeholder="No. of Loyality points..."
            />
            <TouchableOpacity style={checkOutStyle.ReddemButton}>
              <Text style={checkOutStyle.ReddemButtonText}>
                Redeem Loyalty Points
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Coupon Code */}
        <View style={checkOutStyle.couponCode}>
          <Text style={{fontFamily: fonts.Medium, color: '#7f94a2'}}>
            Coupon Code
          </Text>

          <View style={checkOutStyle.couponCodeView}>
            <TextInput
              style={{
                backgroundColor: 'white',
                width: horizontalScale(240),
                paddingLeft: horizontalScale(10),
                fontFamily: fonts.Medium,
              }}
              placeholder="No. of Loyality points..."
            />
            <TouchableOpacity style={checkOutStyle.ReddemButton}>
              <Text style={checkOutStyle.ReddemButtonText}>Apply Code</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={checkOutStyle.offerView}>View Offers</Text>
            <View></View>
          </View>
        </View>

        {/* GST */}
        <View style={checkOutStyle.contactView}>
          <Text style={checkOutStyle.contactMainText}>Gst No.</Text>
          <View style={checkOutStyle.inputView}>
            <TextInput
              style={{fontFamily: fonts.Medium}}
              placeholder="Enter GST No. here..."></TextInput>
          </View>
        </View>

        {/* Payment Method */}
        <View style={checkOutStyle.contactView}>
          <Text style={checkOutStyle.contactMainText}>Payment Method</Text>
          <View style={checkOutStyle.inputView}>
            <TextInput
              style={{fontFamily: fonts.Medium}}
              placeholder="Enter GST No. here..."></TextInput>
          </View>
        </View>
      </ScrollView>

      {/* Bottom View */}
      <View style={checkOutStyle.bottomView}>
        <View style={checkOutStyle.bottomHolderView}>
          <View style={checkOutStyle.bottomTextHolder}>
            <View style={checkOutStyle.informationView}>
              <Text style={checkOutStyle.informationLeftText}>
                Total Bill Amount
              </Text>
              <Text style={checkOutStyle.informationRightText}>₹ 835.50</Text>
            </View>
            <View style={checkOutStyle.informationView}>
              <Text style={checkOutStyle.informationLeftText}>
                Loyalty Points Redeemed
              </Text>
              <Text style={checkOutStyle.informationRightText}> - ₹ 10.00</Text>
            </View>
            <View style={checkOutStyle.informationView}>
              <Text style={checkOutStyle.informationLeftText}>
                Coupon Applied
              </Text>
              <Text style={checkOutStyle.informationRightText}> - ₹ 12.50</Text>
            </View>
            <View style={checkOutStyle.informationView}>
              <Text style={checkOutStyle.informationLeftText}>
                Delivery Charge
              </Text>
              <Text style={checkOutStyle.informationRightText}>₹ 42.00</Text>
            </View>
          </View>
          <View style={{borderWidth: 0.3, width: horizontalScale(300)}} />

          <View style={checkOutStyle.totalAmount}>
            <Text style={checkOutStyle.totalAmountLeftText}>
              Total Amount Payable
            </Text>
            <Text style={checkOutStyle.totalAmountRightText}>₹ 835.50</Text>
          </View>

          <TouchableOpacity activeOpacity={1} style={checkOutStyle.ButtonStyle}>
            <Text style={checkOutStyle.ButtonTextStyle}>
              Proceed to Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CheckOutPage;
