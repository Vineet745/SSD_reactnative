import { View, Text, Image,ScrollView } from 'react-native'
import React from 'react'
import { profileStyle } from './profileStyle'
import { horizontalScale } from '../../../utils/Dimension'

const Profile = () => {
  return (
      <ScrollView>
    <View style={{flex:1,backgroundColor:"white",paddingHorizontal:horizontalScale(18)}}>
      <View style={profileStyle.imageContainerMain}>
      <View style={profileStyle.roundedImageContainer}>
        <Image style={{width:'100%',height:'100%'}} source={require('../../../assets/images/profile_image.png')}/>
      </View>
      </View>
      <View>
        <View style= {profileStyle.bottomView} >
          <Text style={profileStyle.heading}>Customer No.</Text>
          <Text style={profileStyle.profileText}>1234567890</Text>
        </View>
        <View style= {profileStyle.bottomView} >
          <Text style={profileStyle.heading}>Name</Text>
          <Text style={profileStyle.profileText}>Balwant Rai</Text>
        </View>
        <View style= {profileStyle.bottomView} >
          <Text style={profileStyle.heading}>Mobile No.</Text>
          <Text style={profileStyle.profileText}>987 654 3210</Text>
        </View>
        <View style= {profileStyle.bottomView} >
          <Text style={profileStyle.heading}>Email</Text>
          <Text style={profileStyle.profileText}>balwant123@gmail.com</Text>
        </View>
       
        <View style= {profileStyle.bottomView} >
          <Text style={profileStyle.heading}>Gender</Text>
          <Text style={profileStyle.profileText}>Male</Text>
        </View>
        <View style= {profileStyle.bottomView} >
          <Text style={profileStyle.heading}>Date Of Birth</Text>
          <Text style={profileStyle.profileText}>22 Aug 1990</Text>
        </View>
        <View style= {profileStyle.bottomView} >
          <Text style={profileStyle.heading}>Address</Text>
          <Text style={[profileStyle.profileText,{width:horizontalScale(160),alignSelf:'flex-end'}]}>111/A 3rd Floor,Galaxy Apartment Phase III, Near Hanuman Mandir</Text>
        </View>
        <View style= {profileStyle.bottomView} >
          <Text style={profileStyle.heading}>City</Text>
          <Text style={profileStyle.profileText}>Mumbai,Maharashtra</Text>
        </View>
        <View style= {profileStyle.bottomView} >
          <Text style={profileStyle.heading}>PIN Code</Text>
          <Text style={profileStyle.profileText}>110231</Text>
        </View>
        
      </View>
    </View>
    </ScrollView>
  )
}

export default Profile