import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Dimension';
import {colors, fonts} from '../../utils/Theme';
import Button from '../Button';
import {modalStyle} from './modalStyle';
const CustomModal = ({modalVisible, toggleModal}) => {
  return (
    <Modal
      backdropOpacity={1}
      onBackdropPress={toggleModal}
      isVisible={modalVisible}>
      <View style={modalStyle.modalmain}>
        <View style={modalStyle.modalTopTextContainer}>
          <Text style={modalStyle.modalTextSubmit}>Submit OTP</Text>
          <Text style={modalStyle.modalText}>
            An OTP has been sent to your Mobile No.
          </Text>
          <Text style={modalStyle.modalText}>9583723090</Text>
        </View>
        <TextInput
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
          <Button backgroundColor={colors.black} title="Submit OTP" />
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
