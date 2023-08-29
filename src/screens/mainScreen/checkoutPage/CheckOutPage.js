import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import checkOutStyle from './checkOutStyle';
import {fonts} from '../../../utils/Theme';
import {horizontalScale, verticalScale} from '../../../utils/Dimension';
import {useNavigation} from '@react-navigation/native';
import CustomDropdown from '../../../components/dropDown/CustomDropdown';
import {useSelector} from 'react-redux';
import {getAllAddress, getUserProfile} from '../../../service/api/UserApi';
import {createOrder, getOrderSchedule} from '../../../service/api/OrderApi';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RFValue} from 'react-native-responsive-fontsize';
import CalendarModal from '../../../components/calendarModal/CalendarModal';

const CheckOutPage = ({route}) => {
  const {
    params: {total},
  } = route;

  // All Imports And States

  const [userProfile, setuserProfile] = useState('');
  const [schedule, setSchedule] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState('');
  const [mobileNumber, setMobileNumber] = useState();
  // const [loyaltyPoints, setLoyaltyPointx
  const [payment, setPayment] = useState();
  const [visible, setVisible] = useState(false);

  const {navigate} = useNavigation();
  const {selectedDate} = useSelector(state => state.order);

  // Toggle Modal

  const toggleModal = () => {
    setVisible(!visible);
  };

  // GetCustomerDetails ----------------------------------

  const getCustomer = async () => {
    try {
      const {data} = await getUserProfile();
      setuserProfile(data?.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getCustomer();
  }, []);

  // Order Schedule------------------------------------

  const handleOrderSchedule = async () => {
    try {
      const {data} = await getOrderSchedule();
      setSchedule(data?.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    handleOrderSchedule();
  }, []);

  // Payment Method Manually----------------------

  const data = [
    {name: 'Credit Card', id: 1},
    {name: 'Paytm', id: 2},
    {name: 'Debit Card', id: 3},
    {name: 'COD', id: 4},
  ];

  // loyalty Points Function

  // const points = () => {
  //   const totalLoyaltyPoints = 253;
  //   const AfterRedeem = totalLoyaltyPoints - loyaltyPoints;
  //   setRedeemPoints(AfterRedeem);
  // };

  // Modify Schedule data

  const ModifyScheduleData = schedule.map(item => ({
    label: `${item.from_time}-${item.to_time}`,
    value: `${item.from_time}-${item.to_time}`,
  }));

  //Create Order

  const handleCreateOrder = async () => {
    try {
      const data = await createOrder({
        total,
        payment,
        selectedSchedule,
        selectedDate,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView style={checkOutStyle.checkOutMain}>
      <CalendarModal visible={visible} onClose={toggleModal} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={checkOutStyle.addressMain}>
          <View style={checkOutStyle.addressTop}>
            <Text style={checkOutStyle.DeliveryText}>Delivery Address</Text>
            <TouchableOpacity
              onPress={() => {
                navigate('Change Address', {userProfile});
                // : navigate('Confirm Address', {userProfile});
              }}>
              <Text style={checkOutStyle.ChangeText}>CHANGE ADDRESS</Text>
            </TouchableOpacity>
          </View>

          <View style={checkOutStyle.address}>
            <Text style={checkOutStyle.addressText}>
              {/* 111/A Satyagarh Marg Colony, Phase IV, Near Hanuman Mandir, Prayag
              Raaj, Uttar Pradesh - 110223 */}
            </Text>
          </View>
        </View>

        <View style={checkOutStyle.contactView}>
          <Text style={checkOutStyle.contactMainText}>Contact Number</Text>
          <View style={checkOutStyle.inputView}>
            <TextInput
              value={mobileNumber}
              onChangeText={value => setMobileNumber(value)}
              style={{fontFamily: fonts.Medium}}
              placeholder="Enter Contact No. here..."></TextInput>
          </View>
        </View>

        {/* //Date and time Selector */}

        <View style={checkOutStyle.dataTimeSelector}>
          <Text style={checkOutStyle.dateTimeMainText}>
            Delivery Date & Time Slot
          </Text>

          <View style={checkOutStyle.selectedDelievery}>
            <Text
              style={{
                fontFamily: fonts.Medium,
                fontSize: RFValue(10, 667),
                color: '#898989',
              }}>
              {!selectedDate ? 'Select Delievery Data' : selectedDate}
            </Text>
            <TouchableOpacity onPress={() => toggleModal()}>
              <FontAwesome name="calendar" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{marginVertical: verticalScale(5)}}>
            <CustomDropdown
              data={ModifyScheduleData}
              labelField="label"
              valueField="value"
              placeholder={
                !selectedSchedule ? 'Select Schedule Time' : selectedSchedule
              }
              onChangeText={value => {
                setSelectedSchedule(value);
              }}
            />
          </View>
        </View>

        {/* Loyalty View */}
        {/* <View style={checkOutStyle.LoyaltyView}>
          <Text style={{fontFamily: fonts.Medium, color: '#7f94a2'}}>
            Loyalty Point
          </Text>
          <View style={checkOutStyle.loyaltyPoints}>
            <Text style={checkOutStyle.loyaltyPointsText}>
              My Loyalty Points Balance:
            </Text>
            <Text style={checkOutStyle.loyaltyPointsText}>{RedeemPoints}</Text>
          </View>

          <View style={checkOutStyle.ReddemView}>
            <TextInput
              value={loyaltyPoints}
              onChangeText={value => setLoyaltyPoints(value)}
              style={{fontFamily: fonts.Medium, width: horizontalScale(150)}}
              placeholder="No of Loyalty Points..."
            />
            <TouchableOpacity
              onPress={() => {
                points();
              }}
              style={checkOutStyle.ReddemButton}>
              <Text style={checkOutStyle.ReddemButtonText}>
                Redeem Loyalty Points
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* Coupon Code */}
        {/* <View style={checkOutStyle.couponCode}>
          <Text style={{fontFamily: fonts.Medium, color: '#7f94a2'}}>
            Coupon Code
          </Text>

          <View style={checkOutStyle.couponCodeView}>
            <TextInput
              value={couponCode}
              onChangeText={value => setCouponCode(value)}
              style={{fontFamily: fonts.Medium, width: horizontalScale(150)}}
              placeholder="No of Loyalty Points..."
            />
            <TouchableOpacity style={checkOutStyle.ReddemButton}>
              <Text style={checkOutStyle.ReddemButtonText}>Add Coupon</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={checkOutStyle.offerView}>View Offers</Text>
            <View></View>
          </View>
        </View> */}

        {/* GST */}
        {/* <View style={checkOutStyle.contactView}>
          <Text style={checkOutStyle.contactMainText}>Gst No.</Text>
          <View style={checkOutStyle.inputView}>
            <TextInput
              value={GstNo}
              onChangeText={value => setGstNO(value)}
              style={{fontFamily: fonts.Medium}}
              placeholder="Enter GST No. here..."></TextInput>
          </View>
        </View> */}

        {/* Payment Method */}

        <View style={checkOutStyle.contactView}>
          <Text style={checkOutStyle.contactMainText}>Payment Method</Text>
          <View style={{marginTop: verticalScale(10)}}>
            <CustomDropdown
              data={data}
              labelField="name"
              valueField="name"
              value={payment}
              onChangeText={value => setPayment(value)}
              placeholder={!payment ? 'Select Payment Method' : payment}
              backgroundColor="white"
            />
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
              <Text style={checkOutStyle.informationRightText}>₹ {total}</Text>
            </View>
            {/* <View style={checkOutStyle.informationView}>
              <Text style={checkOutStyle.informationLeftText}>
                Loyalty Points Redeemed
              </Text>
              <Text style={checkOutStyle.informationRightText}>
                {' '}
                - ₹ {loyaltyPoints}
              </Text>
            </View> */}
            {/* <View style={checkOutStyle.informationView}>
              <Text style={checkOutStyle.informationLeftText}>
                Coupon Applied
              </Text>
              <Text style={checkOutStyle.informationRightText}> - ₹ 12.50</Text>
            </View> */}
            {/* <View style={checkOutStyle.informationView}>
              <Text style={checkOutStyle.informationLeftText}>
                Delivery Charge
              </Text>
              <Text style={checkOutStyle.informationRightText}>₹ 42.00</Text>
            </View> */}
          </View>
          <View style={{borderWidth: 0.3, width: horizontalScale(300)}} />

          <View style={checkOutStyle.totalAmount}>
            <Text style={checkOutStyle.totalAmountLeftText}>
              Total Amount Payable
            </Text>
            <Text style={checkOutStyle.totalAmountRightText}>₹ {total}</Text>
          </View>

          <TouchableOpacity
            onPress={handleCreateOrder}
            activeOpacity={1}
            style={checkOutStyle.ButtonStyle}>
            <Text style={checkOutStyle.ButtonTextStyle}>
              Proceed to Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CheckOutPage;
