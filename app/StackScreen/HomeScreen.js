import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../../locationReducer';
import ListServices from '../components/ListServices';
import RecentUse from '../components/RecentUse';

const HomeScreen = (props) => {
    const dispatch = useDispatch()
  return (
    <View className="w-full h-full bg-white p-6">
        <View className="flex-row">
            <Text className="text-[40px] text-orange-500 font-bold" >WB</Text>
            <Text className="text-[40px] text-blue-950 font-bold">Car</Text>
        </View>
        <Text className="mt-8 text-2xl text-gray-700 font-semibold">Go anywhere, get anything</Text>
        <GooglePlacesAutocomplete
            placeholder='Where From?'
            nearbyPlacesAPI='GooglePlacesSearch'
            styles={{
            container:{
                marginTop:8,
                flex:0
            },
            textInput:{
                backgroundColor:'#e1e1e3',
                fontSize:20
            }
            }}
            debounce={500}
            textInputProps={{onChangeText:(text)=>{
                if(!text) dispatch(setCurrent(null))
            }}}
            fetchDetails
            onPress={(data, details = null) => {
                dispatch(setCurrent({location:details.geometry.location, description:data.description}))
            }}
            enablePoweredByContainer={false}
            query={{
                key: process.env.GCP_TOKEN,
                language: 'en',
            }}
            />
        <ListServices {...props} />
        <RecentUse/>
    </View>
  )
}

export default HomeScreen