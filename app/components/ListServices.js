import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CarIcon from '../../assets/car.png'
import PackageIcon from '../../assets/package.png'
import { useSelector } from 'react-redux'
const ListServices = ({navigation}) => {
    const {current} = useSelector(state=> state.locationState)
  return (
    <View className="flex-row flex-wrap gap-2 mt-2">
      <TouchableOpacity className={`bg-[#eee] rounded-xl p-8 flex-col justify-center items-center ${!current?'opacity-50':''}`} disabled={!current} onPress={()=>navigation.navigate('mapScreen')}>
        <Image className="w-24 h-16" source={CarIcon}/>
        <Text className="text-xl">Ride</Text>
      </TouchableOpacity>
      <TouchableOpacity className={`bg-[#eee] rounded-xl p-8 flex-col justify-center items-center ${!current?'opacity-50':''}`} disabled={!current}>
        <Image className="w-16 h-16" source={PackageIcon}/>
        <Text className="text-xl">Package</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListServices