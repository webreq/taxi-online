import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestination } from '../../locationReducer'
import RecentUse from '../components/RecentUse'

const NavigateTo = ({navigation}) => {
    const dispatch = useDispatch()
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-lg font-semibold text-center">Choose a trip</Text>
      <GooglePlacesAutocomplete
            placeholder='Where To?'
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
                if(!text) dispatch(setDestination(null))
            }}}
            fetchDetails
            onPress={(data, details = null) => {
                dispatch(setDestination({location:details.geometry.location, description:data.description}))
                navigation.navigate('rideTo')
            }}
            enablePoweredByContainer={false}
            query={{
                key: process.env.GCP_TOKEN,
                language: 'en',
            }}
            />
        <RecentUse/>
    </View>
  )
}

export default NavigateTo