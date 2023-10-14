import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import TimeIcon from '../../assets/time.png'
const dataFavorite = [
    {
        id:1,
        name:'Home',
        description:'Malang, Malang City, East Java, Indonesia'
    },
    {
        id:2,
        name:'Work',
        description:'Surabaya, East Java, Indonesia'
    }
]
const RecentUse = () => {
  return (
    <View className='mt-2'>
        <FlatList 
            data={dataFavorite}
            keyExtractor={item=>item.id}
            ItemSeparatorComponent={()=> <View className="h-[0.7px] bg-gray-300"></View>}
            renderItem={({item})=><TouchableOpacity className="flex-row items-center gap-4 py-4 ">
                <Image source={TimeIcon}/>
                <View className="flex-col">
                    <Text className="text-gray-500 font-semibold text-sm">{item.name}</Text>
                    <Text className="text-gray-500 font-semibold text-sm">{item.description}</Text>
                </View>
            </TouchableOpacity>}
         />
        
    </View>
  )
}

export default RecentUse