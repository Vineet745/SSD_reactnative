import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Dimension';

const SingleSwiper = () => {
  const entries = [
    {image: require('../assets/images/product_img_details.png')},
    {image: require('../assets/images/product_img_details.png')},
    {image: require('../assets/images/product_img_details.png')},
    {image: require('../assets/images/product_img_details.png')},
    {image: require('../assets/images/product_img_details.png')},
    {image: require('../assets/images/product_img_details.png')},
  ];
  const carouselRef = useRef(null);
  const sliderWidth = horizontalScale(367);
  const itemWidth = horizontalScale(250);
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginTop: verticalScale(10),
          borderRadius: moderateScale(10),
        }}>
        <View style={{height: verticalScale(230)}}>
          <Image source={item.image} style={{width: '100%', height: '100%'}} />
        </View>
      </View>

    
    
    );
  };

  return (
    <Carousel
      ref={carouselRef}
      data={entries}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      inactiveSlideOpacity={1}
      
    />
  );
};

export default SingleSwiper;



