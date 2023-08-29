import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Authstack from './Authstack';
import Mainstack from './Mainstack';
import {useSelector} from 'react-redux';

const Appstack = () => {
  const {usertoken} = useSelector(state => state.user);
  return (
    <NavigationContainer>
      {usertoken ? <Mainstack /> : <Authstack />}
    </NavigationContainer>
  );
};

export default Appstack;
