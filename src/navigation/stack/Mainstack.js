import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../../screens/mainScreen/cart/Cart';
import Home from '../../screens/mainScreen/home/Home';
import CategoriesScreen from '../../screens/mainScreen/categoriesScreen/CategoriesScreen';
import {colors, fonts} from '../../utils/Theme';
import FeatureProducts from '../../screens/mainScreen/featureProducts/FeatureProducts';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Dimension';
import Search from '../../components/searchTab/Search';
import CheckOutPage from '../../screens/mainScreen/checkoutPage/CheckOutPage';
import ChangeAddress from '../../screens/mainScreen/changeAddress/ChangeAddress';
import ConfirmAddress from '../../screens/mainScreen/confirmAddress/ConfirmAddress';
import SingleProduct from '../../screens/mainScreen/singleProduct/SingleProduct';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyOrder from '../../screens/drawerScreen/myOrders/MyOrder';
import Profile from '../../screens/drawerScreen/profile/Profile';
import LuckyDrawContest from '../../screens/drawerScreen/luckyDraw/LuckyDrawContest';
import LoyaltyPoints from '../../screens/drawerScreen/loyaltyPoints/LoyaltyPoints';
import Report_Contact from '../../screens/drawerScreen/report/Report_Contact';
import LocateStore from '../../screens/drawerScreen/locateStore/LocateStore';
import Ordertrack from './myOrderScreen/Ordertrack';
import CustomHeader from '../component/CustomHeader';
import Report from './Report_contactScreen/Report';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

//Stack with Search Tab

const SearchStack = () => {
  return (
    <View style={{flex: 1}}>
      <Search />
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontFamily: fonts.SemiBold,
            fontSize: RFValue(14, 667),
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="My Cart" component={Cart} />
        <Stack.Screen
          name="Featured Products"
          component={FeatureProducts}
          options={{
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/icon_cart.png')}
                  style={{marginRight: horizontalScale(10)}}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

// Drawer Stack

const Drawerstack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontFamily: fonts.Bold,
          marginLeft: horizontalScale(-15),
        },
        drawerPosition: 'right',
        drawerContentStyle: {
          fontFamily: fonts.SemiBold,
          
        },
      }}>
      <Drawer.Screen
        name="Searchstack"
        component={SearchStack}
        options={{
          drawerLabelStyle: {
            fontFamily: fonts.SemiBold,
          },
        }}
      />
      <Drawer.Screen
        name="My Orders"
        component={MyOrder}
        options={{
          headerShown: true,
          drawerIcon: () => {
            return (
              <Image source={require('../../assets/images/icon_order.png')} />
            );
          },
          header: () => {
            return <CustomHeader headerText="My Orders" iconname="filter" />;
          },
        }}
      />
      <Drawer.Screen
        name="My Loyalty Points"
        component={LoyaltyPoints}
        options={{
          headerShown: true,
          drawerIcon: () => {
            return (
              <Image source={require('../../assets/images/icon_loyalty.png')} />
            );
          },
          header: () => {
            return <CustomHeader headerText="My Loyalty Points" />;
          },
        }}
      />
      <Drawer.Screen
        name="Lucky Draw Contest"
        component={LuckyDrawContest}
        options={{
          headerShown: true,
          drawerIcon: () => {
            return (
              <Image source={require('../../assets/images/icon_lucky.png')} />
            );
          },
        }}
      />
      <Drawer.Screen
        name="My Profile"
        component={Profile}
        options={{
          headerShown: true,
          drawerIcon: () => {
            return (
              <Image source={require('../../assets/images/icon_user.png')} />
            );
          },
          header: () => {
            return <CustomHeader headerText="My Profile" iconname="edit-2" />;
          },
        }}
      />
      <Drawer.Screen
        name="Report & Contact Us"
        component={Report_Contact}
        
        options={{
          headerShown:true,
          drawerIcon: () => {
            return (
              <Image source={require('../../assets/images/icon_help.png')} />
            );
          },
          header:()=>{
            return <CustomHeader headerText="Contact Us"/>
          }
        }}
      />
      <Drawer.Screen
        name="Locate Store"
        component={LocateStore}
        options={{
          drawerIcon: () => {
            return (
              <Image source={require('../../assets/images/icon_Store.png')} />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

// Mainstack

const Mainstack = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{
          headerTitleStyle: {
            fontFamily: fonts.SemiBold,
            fontSize: RFValue(14, 667),
          },
        }}>
        <Stack.Screen
          name="Drawer"
          component={Drawerstack}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/icon_cart.png')}
                  style={{marginRight: horizontalScale(10)}} // Adjust the margin as needed
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen name="Checkout & Options" component={CheckOutPage} />
        <Stack.Screen name="Change Address" component={ChangeAddress} />
        <Stack.Screen name="Confirm Address" component={ConfirmAddress} />
        <Stack.Screen name="Product" component={SingleProduct} />
        <Stack.Screen
          name="Orders"
          component={Ordertrack}
          options={{
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#5e7c91',
                    paddingVertical: verticalScale(8),
                    paddingHorizontal: horizontalScale(18),
                    borderRadius: moderateScale(8),
                  }}>
                  <Text
                    style={{fontFamily: fonts.SemiBold, color: colors.white}}>
                    Cancel Order
                  </Text>
                </TouchableOpacity>
              );
            },
          }}
        />
        
      </Stack.Navigator>
    </View>
  );
};

export default Mainstack;
