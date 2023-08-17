import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../../screens/mainScreen/cart/Cart';
import Home from '../../screens/mainScreen/home/Home';
import CategoriesScreen from '../../screens/mainScreen/categoriesScreen/CategoriesScreen';
import {fonts} from '../../utils/Theme';
import FeatureProducts from '../../screens/mainScreen/featureProducts/FeatureProducts';
import {RFValue} from 'react-native-responsive-fontsize';
import { horizontalScale } from '../../utils/Dimension';
import Search from '../../components/searchTab/Search';
import CheckOutPage from '../../screens/mainScreen/checkoutPage/CheckOutPage';
import ChangeAddress from '../../screens/mainScreen/changeAddress/ChangeAddress';
import ConfirmAddress from '../../screens/mainScreen/confirmAddress/ConfirmAddress';
import SingleProduct from '../../screens/mainScreen/singleProduct/SingleProduct';
import myOrders from '../../screens/drawerScreen/myOrders/myOrders';
const Stack = createNativeStackNavigator();








const Mainstack = () => {
  return (
    <View style={{flex:1}}>
      <Search/>
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
            <Stack.Screen name="Checkout & Options" component={CheckOutPage} />
            <Stack.Screen name="Change Address" component={ChangeAddress} />
            <Stack.Screen name="Confirm Address" component={ConfirmAddress} />
            <Stack.Screen name="Product" component={SingleProduct} />

    </Stack.Navigator>
    </View>
  );
};

export default Mainstack;
