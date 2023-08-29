import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {profileStyle} from './profileStyle';
import {horizontalScale} from '../../../utils/Dimension';
import {getUserProfile} from '../../../service/api/UserApi';
import {useDispatch} from 'react-redux';
import {userdata} from '../../../redux/slice/authSlice';

const Profile = () => {
  const [profiledata, setprofiledata] = useState('');

  const handleProfile = async () => {
    try {
      const {data} = await getUserProfile();
      setprofiledata(data?.data);
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  };

  useEffect(() => {
    handleProfile();
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: horizontalScale(18),
        }}>
        <View style={profileStyle.imageContainerMain}>
          <View style={profileStyle.roundedImageContainer}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../../../assets/images/profile_image.png')}
            />
          </View>
        </View>
        <View>
          <View style={profileStyle.bottomView}>
            <Text style={profileStyle.heading}>Customer No.</Text>
            <Text style={profileStyle.profileText}>1234567890</Text>
          </View>
          <View style={profileStyle.bottomView}>
            <Text style={profileStyle.heading}>Name</Text>
            <Text style={profileStyle.profileText}>{profiledata.name}</Text>
          </View>
          <View style={profileStyle.bottomView}>
            <Text style={profileStyle.heading}>Mobile No.</Text>
            <Text style={profileStyle.profileText}>{profiledata.mobile}</Text>
          </View>
          <View style={profileStyle.bottomView}>
            <Text style={profileStyle.heading}>Email</Text>
            <Text style={profileStyle.profileText}>{profiledata.email}</Text>
          </View>

          <View style={profileStyle.bottomView}>
            <Text style={profileStyle.heading}>Gender</Text>
            <Text style={profileStyle.profileText}>{profiledata.gender}</Text>
          </View>
          <View style={profileStyle.bottomView}>
            <Text style={profileStyle.heading}>Date Of Birth</Text>
            <Text style={profileStyle.profileText}></Text>
          </View>
          <View style={profileStyle.bottomView}>
            <Text style={profileStyle.heading}>Address</Text>
            <Text
              style={[
                profileStyle.profileText,
                {width: horizontalScale(160), alignSelf: 'flex-end'},
              ]}>
              111/A 3rd Floor,Galaxy Apartment Phase III, Near Hanuman Mandir
            </Text>
          </View>
          <View style={profileStyle.bottomView}>
            <Text style={profileStyle.heading}>City</Text>
            <Text style={profileStyle.profileText}>Mumbai,Maharashtra</Text>
          </View>
          <View style={profileStyle.bottomView}>
            <Text style={profileStyle.heading}>PIN Code</Text>
            <Text style={profileStyle.profileText}>110231</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
