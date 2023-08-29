import Modal from "react-native-modal";

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomCalendar from "../calendar/CustomCalendar";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/Dimension";
import { fonts } from "../../utils/Theme";

const CalendarModal = ({visible,onClose}) => {
  return (
      <Modal  isVisible={visible} onBackdropPress={onClose}>
        <View style={{backgroundColor: 'white',
            borderRadius: moderateScale(10),
            padding: moderateScale(15),
            elevation: 5,}}>
        <CustomCalendar/>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <TouchableOpacity onPress={onClose}>
            <Text style={{fontFamily:fonts.SemiBold,color:"green"}}>Select</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={{marginLeft:horizontalScale(50)}}>
            <Text style={{fontFamily:fonts.SemiBold,color:"red"}}>Cancel</Text>
          </TouchableOpacity>
          </View>
          </View>
      </Modal>
  )
}

export default CalendarModal