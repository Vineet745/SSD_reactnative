import { View, Text, ActivityIndicator, Modal } from 'react-native'
import React from 'react'

const Loader = ({loading}) => {
  return (
    <Modal visible={loading} transparent={true} animationType="none">
        <View style={categoriesScreenStyle.modalContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      </Modal>
  )
}

export default Loader