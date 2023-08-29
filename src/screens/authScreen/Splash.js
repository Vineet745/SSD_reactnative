import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {registerUser} from '../../redux/slice/authSlice';
import SplashBackground from '../../components/SplashBackground';

const Splash = () => {
  const dispatch = useDispatch();

  const checklogin = async () => {
    try {
      const token = await AsyncStorage.getItem('TOKEN');
      dispatch(registerUser(token));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checklogin();
  }, []);

  return (
    <SplashBackground>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text
          style={{fontSize: 40, fontFamily: 'Geologica-Bold', color: 'black'}}>
          SSD
        </Text>
      </View>
    </SplashBackground>
  );
};

export default Splash;
