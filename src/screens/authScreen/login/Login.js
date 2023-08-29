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
import loginStyle from './loginStyle';
import {colors, fonts} from '../../../utils/Theme';
import {verticalScale} from '../../../utils/Dimension';
// import Modal from '../../../components/modal/CustomModal';
import {LoginUser} from '../../../service/api/UserApi';
import {loginUser, userdata} from '../../../redux/slice/authSlice';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  // Login User
  const handleLogin = async () => {
    try {
      setloading(true);
      const {data} = await LoginUser({mobile, password});
      const token = data.data.api_token;
      await AsyncStorage.setItem('TOKEN', token);
      dispatch(loginUser(token));
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  return (
    <View style={loginStyle.registerMain}>
      <Background />

      {/* Loader */}
      <Modal visible={loading} transparent={true} animationType="none">
        <View style={loginStyle.modalContainer}>
          <ActivityIndicator size="large" color="lightgreen" />
        </View>
      </Modal>

      <View style={loginStyle.textArea}>
        <Text style={loginStyle.registerTaintext}>Please Log In,</Text>
        <View style={loginStyle.inputHolder}>
          <TextInput
            value={mobile}
            onChangeText={value => setMobile(value)}
            style={loginStyle.textInput}
            placeholder="Mobile No."
          />
          <TextInput
            value={password}
            onChangeText={value => setPassword(value)}
            style={loginStyle.textInput}
            placeholder="Password"
          />
        </View>

        <View style={loginStyle.forgotView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Forgot Password')}>
            <Text style={loginStyle.forgotText}>I Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Button
            pressData={handleLogin}
            backgroundColor={colors.violetcolor}
            title="Login"
          />
        </View>
        <View style={{borderWidth: 0.5}} />
        <View style={loginStyle.alreadyCustomer}>
          <Text style={loginStyle.textOne}>Not a member already? </Text>
          <TouchableOpacity
            activeOpacity={0}
            onPress={() => navigation.navigate('Register')}>
            <Text style={loginStyle.textTwo}> Register </Text>
          </TouchableOpacity>
        </View>
        <View style={loginStyle.otpLogin}>
          <Text style={{fontFamily: fonts.Bold}}>Or</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginOtp')}>
            <Text
              style={{
                fontFamily: fonts.Bold,
                color: colors.skyblue,
                marginTop: verticalScale(10),
              }}>
              Login With OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
