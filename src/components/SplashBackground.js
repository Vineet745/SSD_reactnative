import {View, Image} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../utils/Dimension';

const SplashBackground = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Image
        style={{position: 'absolute', left: horizontalScale(30)}}
        source={require('../assets/images/photo.png')}
      />
      <Image
        style={{
          width: horizontalScale(60),
          height: verticalScale(60),
          position: 'absolute',
          left: 160,
          top: 20,
        }}
        source={require('../assets/images/only_logo.png')}
      />
      <View
        style={{
          position: 'absolute',
          bottom: verticalScale(55),
          left: horizontalScale(40),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            objectFit: 'fill',
            width: horizontalScale(320),
            height: verticalScale(320),
          }}
          source={require('../assets/images/untitled2/drawable-hdpi/untitled2.png')}
        />
      </View>
    </View>
  );
};

export default SplashBackground;
