import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../../screens/authScreen/register/Register';
import Login from '../../screens/authScreen/login/Login';
import Forgotpassword from '../../screens/authScreen/forgotPassword/Forgotpassword';
import Splash from '../../screens/authScreen/Splash';
import LoginOtp from '../../screens/authScreen/loginOtp/LoginOtp';

const Stack = createNativeStackNavigator();

const Authstack = () => {
  const [splashTimer, setSplashTimer] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashTimer(false);
    }, 3000);

    return ()=> clearTimeout(timer);
  }, []);
  if (splashTimer) {
    return <Splash />;
  }


  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginOtp"
        component={LoginOtp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot Password"
        component={Forgotpassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Authstack;
