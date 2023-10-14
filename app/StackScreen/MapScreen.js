import { View, Text } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateTo from './NavigateTo'
import RideTo from './RideTo'
const Stack = createNativeStackNavigator()
const MapScreen = () => {
  return (
    <View>
      <View className="h-1/2">
        {/* map */}
        <Map/>
      </View>
      <View className="h-1/2">
        {/* panel stack */}
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='navigateTo' component={NavigateTo} />
            <Stack.Screen name='rideTo' component={RideTo} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen