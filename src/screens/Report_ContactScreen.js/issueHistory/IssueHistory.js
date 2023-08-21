import {View, Text} from 'react-native';
import React from 'react';
import issueHistroyStyle from './issueHistroyStyle';
import {horizontalScale, verticalScale} from '../../../utils/Dimension';
import {fonts} from '../../../utils/Theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const IssueHistory = () => {
  const {navigate} = useNavigation();
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(10),
      }}>
      <View style={issueHistroyStyle.issueHistoryCard}>
        <View style={issueHistroyStyle.issueHistoryCardTopView}>
          <View style={issueHistroyStyle.issueDetails}>
            <Text style={issueHistroyStyle.numberHeading}>Issue No.:</Text>
            <Text style={issueHistroyStyle.number}> 123ISS7890</Text>
          </View>

          <View>
            <Text style={issueHistroyStyle.statusText}>Open</Text>
          </View>

        </View>


        <View>
          <Text style={issueHistroyStyle.dateText}>26 Aug 2021</Text>
        </View>

        <View style={issueHistroyStyle.issueHistoryCardBottomView}>
          <View style={issueHistroyStyle.issueDetails}>
            <Text style={issueHistroyStyle.numberHeading}>Order Id:</Text>
            <Text style={issueHistroyStyle.number}> 123ORD7890</Text>
          </View>
          <TouchableOpacity>
            <View style={issueHistroyStyle.buttonView}>
              <AntDesign name="right" size={26} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

export default IssueHistory;
