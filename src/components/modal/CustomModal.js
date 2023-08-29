import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Dimension';
import {colors, fonts} from '../../utils/Theme';
import Button from '../Button';
import {modalStyle} from './modalStyle';
import {verifyUserWithOtp} from '../../service/api/UserApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {VerifyWithOtp} from '../../redux/slice/authSlice';

const CustomModal = ({modalVisible, closeModal, mobile}) => {
  
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();


  const handleVerify = async () => {
    const token = await AsyncStorage.getItem('TOKEN');
    try {
      const {data} = await verifyUserWithOtp({mobile, otp});
      const token = data.data.api_token;
      await AsyncStorage.setItem('TOKEN', token);
      dispatch(VerifyWithOtp(token));
      setOtp('');
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      backdropOpacity={1}
      onBackdropPress={closeModal}
      isVisible={modalVisible}>
      <View style={modalStyle.modalmain}>
        <View style={modalStyle.modalTopTextContainer}>
          <Text style={modalStyle.modalTextSubmit}>Submit OTP</Text>
          <Text style={modalStyle.modalText}>
            An OTP has been sent to your Mobile No.
          </Text>
          <Text style={modalStyle.modalText}>{mobile}</Text>
        </View>
        <TextInput
          defaultValue={otp}
          onChangeText={value => setOtp(value)}
          style={{
            backgroundColor: colors.greycolor,
            borderRadius: moderateScale(10),
            paddingLeft: verticalScale(10),
            width: '100%',
            marginTop: verticalScale(9),

            fontFamily: fonts.SemiBold,
            fontSize: verticalScale(10),
          }}
          placeholder="Enter OTP here..."
        />
        <View style={{width: '100%'}}>
          <Button
            backgroundColor={colors.black}
            pressData={handleVerify}
            title="Submit OTP"
          />
        </View>
        <View style={modalStyle.modalbottomtext}>
          <Text style={modalStyle.modalText}>01:58 min </Text>
          <Text style={[modalStyle.modalText, {color: colors.skyblue}]}>
            {' '}
            Resend OTP{' '}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
