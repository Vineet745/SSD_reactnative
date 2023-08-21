import {View, Text, TextInput, TouchableOpacity, Modal, ActivityIndicator,ScrollView} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../components/Button';
import Background from '../../../components/Background';
import registerStyle from './registerStyle';
import {colors} from '../../../utils/Theme';
import { RegisterUser } from '../../../service/api/UserApi';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/slice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verticalScale } from '../../../utils/Dimension';

const Register = ({navigation}) => {

  const dispatch = useDispatch()

  // All State
  const [loading, setloading] = useState(false)
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');



  // Register Process
  
  const handleRegister = async()=>{   
    try {
    setloading(true)
    const {data} = await RegisterUser({name,mobile,password,confirm_password})
    console.log(data.data.api_token)
    const token = data.data.api_token
    await AsyncStorage.setItem('TOKEN',token)
    navigation.navigate('Login')
    dispatch(registerUser(token))
    setloading(false)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View style={{flex:1}}>

    <View style={registerStyle.registerMain}>
      <View style={{flex:1}}>
      <Background />
      </View>
      <Modal visible={loading} transparent={true}  animationType="none">
        <View style={loginStyle.modalContainer}>
          <ActivityIndicator  size="large" color="lightgreen"/>
        </View>
      </Modal>
      <ScrollView style={{flex:1}}>
      <View style={registerStyle.textArea}>
        <Text style={registerStyle.registerTaintext}>Please Register,</Text>
        <View style={registerStyle.inputHolder}>
          <TextInput
            value={name}
            onChangeText={value => setName(value)}
            style={registerStyle.textInput}
            placeholder="Full Name"
          />
          <TextInput
            value={mobile}
            onChangeText={value => setMobile(value)}
            style={registerStyle.textInput}
            placeholder="Mobile No."
          />
          <TextInput
            value={password}
            onChangeText={value => setPassword(value)}
            style={registerStyle.textInput}
            placeholder="Password"
          />
          <TextInput
            value={confirm_password}
            onChangeText={value => setConfirm_Password(value)}
            style={registerStyle.textInput}
            placeholder="Confirm Password"
          />
        </View>

        <View style={registerStyle.termConditionTextContainer}>
          <Text style={registerStyle.termConditionText}>
            Registering means you agree to our
          </Text>
          <TouchableOpacity>
            <Text style={registerStyle.clickableText}> T & C.</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Button pressData={handleRegister} backgroundColor={colors.violetcolor} title="Register" />
        </View>
        <View style={{borderWidth: 0.5}} />
        <View>
          <TouchableOpacity
            activeOpacity={1}
            style={registerStyle.alreadyCustomer}
            onPress={() => navigation.navigate('Login')}>
            <Text style={registerStyle.textOne}>Already a member? </Text>
            <Text style={registerStyle.textTwo}>Log In </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
    </View>
  );
};

export default Register;
