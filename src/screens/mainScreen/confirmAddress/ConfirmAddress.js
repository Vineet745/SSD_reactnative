import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import confirmAddressStyle from './confirmAddressStyle';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Dimension';
import Button from '../../../components/Button';
import {colors, fonts} from '../../../utils/Theme';
import CustomDropdown from '../../../components/dropDown/CustomDropdown';
import {
  addAddress,
  getCity,
  getPincode,
  getState,
} from '../../../service/api/UserApi';
import { useDispatch, useSelector} from 'react-redux';
import {selectedCityId, selectedStateId} from '../../../redux/slice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfirmAddress = ({route,navigation}) => {
  const dispatch = useDispatch()
  const {
    params: {userProfile},
  } = route;

  const {stateId} = useSelector(state => state.user);
  const {cityId} = useSelector(state => state.user);

  // All states
  const [address, setaddress] = useState();
  const [landmark, setLandmark] = useState();
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [pincode, setpincode] = useState();

  // GettingState
  const handleGetState = async () => {
    try {
      const {data} = await getState();
      setState(data?.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    handleGetState();
  }, []);

  // Getting City
  const handleCity = async value => {
    try {
      const {data} = await getCity(value);
      dispatch(selectedStateId(value));
      setCity(data?.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  //  handle Pincode

  const Pincode = async value => {
    setpincode(value)
    if (value.length === 6) {
      try {
        const data = await getPincode(value);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  };

  // Add Address

  const handleAddAddress = async () => {
    try {
      const {data} = await addAddress(
        {address, landmark, pincode, stateId, cityId},
        userProfile,
      );
      await AsyncStorage.setItem("address",address)
      navigation.navigate("Change Address")
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View
      style={{flex: 1, backgroundColor: 'white', padding: moderateScale(15)}}>
      <View style={{flex: 1}}>
        <TextInput
          value={address}
          onChangeText={value => setaddress(value)}
          style={confirmAddressStyle.textInputbox}
          placeholder="Address Line 1"
        />
        <TextInput
          value={landmark}
          onChangeText={value => setLandmark(value)}
          style={confirmAddressStyle.textInputbox}
          placeholder="Landmark"
        />
        <View style={confirmAddressStyle.viewOne}>
          <View
            style={{
              width: horizontalScale(160),
              marginBottom: verticalScale(10),
            }}>
            <CustomDropdown
              style={{fontFamily: fonts.Medium}}
              data={state}
              onChangeText={value => {
                handleCity(value);
              }}
              labelField="name"
              valueField="id"
              placeholder={'Select State'}
            />
          </View>
          <View
            style={{
              width: horizontalScale(160),
              marginBottom: verticalScale(10),
            }}>
            <CustomDropdown
              data={city}
              labelField="name"
              valueField="id"
              onChangeText={value => dispatch(selectedCityId(value))}
              placeholder={'Select City'}
            />
          </View>
        </View>
        <TextInput
          value={pincode}
          onChangeText={value => Pincode(value)}
          style={confirmAddressStyle.textInputbox}
          placeholder="PIN Code"
        />
      </View>
      <Button
        pressData={handleAddAddress}
        title={
          userProfile.address
            ? 'Save as a Delivery Address'
            : 'Add Delivery Address'
        }
        backgroundColor={colors.black}
      />
    </View>
  );
};

export default ConfirmAddress;
