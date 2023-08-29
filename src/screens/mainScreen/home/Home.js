import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils/Theme';
import homeStyle from './homeStyle';
import CustomSwiper from '../../../components/CustomSwiper';
import Categories from '../../../components/categoriesComponent/categories/Categories';
import ProductMain from '../../../components/productComponent/productMain/ProductMain';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { DrawerActions } from '@react-navigation/native';
import CartIcon from '../../../navigation/component/CartIcon';
import { horizontalScale } from '../../../utils/Dimension';


const Home = ({navigation}) => {
  const {navigate} = useNavigation();
  return (
    <View style={homeStyle.homemain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={homeStyle.locationHolder}>
          <View style={homeStyle.locationHolderLeft}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../../../assets/images/icon_gps.png')}
            />
            <Text style={{fontFamily: fonts.SemiBold, color: colors.black}}>
              {' '}
              111/A Satyagrah Marg..
            </Text>
          </View>
          <View style={homeStyle.locationHolderRight}>
            <TouchableOpacity>
              <Image source={require('../../../assets/images/icon_bell.png')} />
            </TouchableOpacity>
            <View style={{marginLeft:horizontalScale(12)}}>
           <CartIcon/>
           </View>
            <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} >
              <Entypo name="menu" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={homeStyle.swipperView}>
          <CustomSwiper />
        </View>
        <View>
          <Categories />
        </View>

        <View>
          <ProductMain title="Featured Products" touchableButton="View All" />
        </View>

        <View>
          <ProductMain title="Fresh Arrival" touchableButton="View All" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
