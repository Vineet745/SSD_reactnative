import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils/Theme'
import { horizontalScale } from '../../utils/Dimension'

const Search = () => {
  return (
    <View style={{backgroundColor:colors.greycolor,paddingHorizontal:horizontalScale(10)}}> 
        <TextInput style={{fontFamily:fonts.Bold}} placeholder='Search Products'>
        </TextInput>
    </View>
  )
}

export default Search