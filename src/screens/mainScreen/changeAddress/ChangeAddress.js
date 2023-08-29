import {View, Text, TouchableOpacity,FlatList} from 'react-native';
import React,{useEffect,useState} from 'react';
import {ChangeAddressStyle} from './changeAddressStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import { getAllAddress } from '../../../service/api/UserApi';
import { useSelector } from 'react-redux';

const ChangeAddress = ({route}) => {
  const {params:{userProfile}} = route
  const [address, setAddress] = useState([])
  





  // Get Address

  useEffect(() => {
    getAddress()
  }, [])
  

  const getAddress = async()=>{
    try {
      const {data} = await getAllAddress({userProfile})
      setAddress(data?.data)
    } catch (error) {
      console.log("error",error)
    }
  }
   




  const {navigate} = useNavigation();
  return (
<View style={{ flex: 1, backgroundColor: "white" }}>
  <FlatList
    style={{ flex: 1 }} 
    keyExtractor={(item, index) => index} 
    data={address}
    renderItem={({ item, index }) => (
      <View style={ChangeAddressStyle.changeAddressMain}>
        <View style={ChangeAddressStyle.AddressBox}>
          <View style={ChangeAddressStyle.addressHolder}>
            <Text style={ChangeAddressStyle.addressText}>
              {item.address}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigate('Confirm Address',{userProfile})}
              style={ChangeAddressStyle.buttonStyle}>
              <AntDesign name="right" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )}
  />
</View>

  );
};

export default ChangeAddress;
