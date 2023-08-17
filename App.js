import { View, Text } from 'react-native'
import React from 'react'
import Appstack from './src/navigation/stack/Appstack'

const App = () => {
  return (
    <View style={{flex:1}}>
      <Appstack/>
    </View>
  )
}

export default App