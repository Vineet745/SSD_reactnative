import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Dimension';

const SingleSwiper = ({Images}) => {
  
  const carouselRef = useRef(null);
  const sliderWidth = horizontalScale(367);
  const itemWidth = horizontalScale(250);
  const renderItem = ({item, index}) => {
    console.log("iterherek",item)
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginTop: verticalScale(10),
          borderRadius: moderateScale(10),
        }}>
        <View style={{height: verticalScale(230)}}>
          <Image source={item.file} style={{width: '100%', height: '100%'}} />
        </View>
      </View>

    
    
    );
  };

  return (
    <Carousel
      ref={carouselRef}
      data={Images}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      inactiveSlideOpacity={1}
      
    />
  );
};

export default SingleSwiper;


