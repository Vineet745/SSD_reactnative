import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    ActivityIndicator,
  } from 'react-native';
  import React, {useState} from 'react';
  import Button from '../../../components/Button';
  import Background from '../../../components/Background';
  import loginOtpStyle from './loginOtpStyle';
  import {colors, fonts} from '../../../utils/Theme';
  import {verticalScale} from '../../../utils/Dimension';
  // import Modal from '../../../components/modal/CustomModal';
  import CustomModal from '../../../components/modal/CustomModal';
  import {useDispatch} from 'react-redux';
  import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginWithOtp } from '../../../service/api/UserApi';
import { loginWithOtp } from '../../../redux/slice/authSlice';
  
  const LoginOtp = ({navigation}) => {
    const dispatch = useDispatch();
    const [loading, setloading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
  
    const [mobile, setMobile] = useState('');
  
    // For closing custommodal

    const closeModal = ()=>{
      setModalVisible(false)
    }
    

    // For login with Otp

    const handleLoginOtp = async()=>{
        try {
            const otpResponse = await LoginWithOtp({mobile})
            setModalVisible(prev => !prev);
            console.log("Otp send Successfully",otpResponse)

        } catch (error) {
            console.log("error",error)
        }
    }
  

  
    return (
      <View style={loginOtpStyle.registerMain}>
        <Background />
  
        {/* Loader */}
        <Modal visible={loading} transparent={true} animationType="none">
          <View style={loginOtpStyle.modalContainer}>
            <ActivityIndicator size="large" color="lightgreen" />
          </View>
        </Modal>
  
        <View style={loginOtpStyle.textArea}>
          <Text style={loginOtpStyle.registerTaintext}>Login With Otp,</Text>
          <View style={loginOtpStyle.inputHolder}>
            <TextInput
              value={mobile}
              onChangeText={value => setMobile(value)}
              style={loginOtpStyle.textInput}
              placeholder="Mobile No."
            />
          </View>
  
          
  
          <View>
            <Button
              pressData={handleLoginOtp}
              backgroundColor={colors.violetcolor}
              title="Send Otp"
            />
          </View>
          <View style={{borderWidth: 0.5}} />
          <View style={loginOtpStyle.alreadyCustomer}>
            <Text style={loginOtpStyle.textOne}>Not a member already? </Text>
            <TouchableOpacity
              activeOpacity={0}
              onPress={() => navigation.navigate('Register')}>
              <Text style={loginOtpStyle.textTwo}> Register </Text>
            </TouchableOpacity>
          </View>
          <View style={loginOtpStyle.otpLogin}>
            <Text style={{fontFamily: fonts.Bold}}>Or</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')} >
              <Text
                style={{
                  fontFamily: fonts.Bold,
                  color: colors.skyblue,
                  marginTop: verticalScale(10),
                }}>
                Login With password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <CustomModal modalVisible={modalVisible} closeModal={closeModal} mobile={mobile} />
      </View>
    );
  };
  
  export default LoginOtp;
  