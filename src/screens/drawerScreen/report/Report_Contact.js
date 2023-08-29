import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OrderInfo from '../../../screens/drawerScreen/orderTrack/orderInfo/OrderInfo';
import PaymentInfo from '../../../screens/drawerScreen/orderTrack/paymentInfo/PaymentInfo';
import Items from '../../../screens/drawerScreen/orderTrack/items/Items';
import {fonts} from '../../../utils/Theme';
import ReportIssue from '../../Report_ContactScreen.js/reportIssue/ReportIssue';
import IssueHistory from '../../Report_ContactScreen.js/issueHistory/IssueHistory';
import ContactInfo from '../../Report_ContactScreen.js/contactInfo/ContactInfo';
const Tab = createMaterialTopTabNavigator();

const Report = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontFamily: fonts.Medium,
        },
      }}>
      <Tab.Screen name="Report an" component={ReportIssue} />
      <Tab.Screen name="Issue History" component={IssueHistory} />
      <Tab.Screen name="Contact Info" component={ContactInfo} />
    </Tab.Navigator>
  );
};

export default Report;
