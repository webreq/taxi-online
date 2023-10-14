import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import ArrowLeft from '../../assets/chevronLeft.png'
import CarIcon from '../../assets/car.png'
import CarBigIcon from '../../assets/carBig.png'
import { useSelector } from 'react-redux'
const dataCar = [
    {
      id:1,
      name:'WB-Reguler',
      priceMultipler:1.5,
      img:CarIcon,
    },
    {
      id:2,
      name:'WB-Premium',
      priceMultipler:2.5,
      img:CarBigIcon,
    },
    {
      id:3,
      name:'WB-XL',
      priceMultipler:2,
      img:CarBigIcon
    },
  ]
const RideTo = ({navigation}) => {
    const [select,setSelect]=useState()
    const {timeInformation} = useSelector(state=>state.locationState)
    const convertDistance = Math.ceil(parseInt(timeInformation[0]?.distance?.text)*1.6)
    const getPrice =(duration,multipler)=>{
        return new Intl.NumberFormat('en',{
            style:'currency',
            currency:'IDR'
        }).format((duration*multipler*100))
        
    }
  return (
    <View className="bg-white flex-1 p-2">
      <Text className="text-lg font-semibold text-center">Select a Ride {convertDistance+' Km'}</Text>
      <TouchableOpacity className="absolute top-2 left-2" onPress={()=>navigation.navigate('navigateTo')}>
        <Image source={ArrowLeft} className="w-6 h-6"/>
      </TouchableOpacity>
      <FlatList 
        data={dataCar}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
            return <TouchableOpacity onPress={()=>setSelect(item)} className={`${item.id===select?.id?'bg-gray-100':''} mt-2`}>
                {item.id==1?
                <View className={`w-full ${item.id===select?.id?'border-gray-100':'border-gray-300'} border py-2 px-4 rounded-3xl`}>
                    <Image source={item.img} className="h-24 w-36 self-center"/>
                    <View className='flex-row justify-between'>
                        <View>
                            <Text className="font-semibold">{item.name}</Text>
                            <Text className="text-xs text-gray-500">{timeInformation[0]?.duration?.text}</Text>
                        </View>
                        <View>
                            <Text className="font-semibold">{getPrice(timeInformation[0]?.duration?.value,item.priceMultipler)}</Text>
                            <Text className="text-sm text-white bg-green-500 text-center font-semibold rounded-sm">Promo</Text>
                        </View>
                    </View>
                </View>
                :<View className="flex-row justify-between items-start mt-3">
                    <View className="flex-row gap-4">
                        <Image source={item.img}/>
                        <View>
                            <Text className="font-semibold">{item.name}</Text>
                            <Text className="text-xs text-gray-500">{timeInformation[0]?.duration?.text}</Text>
                        </View>
                    </View>
                    <Text className="font-semibold">{getPrice(timeInformation[0]?.duration?.value,item.priceMultipler)}</Text>
                </View>      }      
            </TouchableOpacity>
        }}
       />
       <TouchableOpacity className={`mt-2 w-full bg-gray-800 py-2 ${!select?'opacity-50':''}`} disabled={!select}>
        <Text className='text-white font-semibold text-center'>Choose {select?.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RideTo