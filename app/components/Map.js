import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import MapViewDirections from 'react-native-maps-directions'
import { setTimeInformation } from '../../locationReducer'

const Map = () => {
    const refMap=useRef()
    const dispatch = useDispatch()
    const {current,destination} = useSelector(state=>state.locationState)
    const [marker,setMarker]=useState()
    const regionChange = (region)=>{
        if(!destination) setMarker(region)
    }
    useEffect(()=>{
        if(!current || !destination) return;
        refMap.current.fitToSuppliedMarkers(['current','destination'],{
            edgePadding:{
                top:50,
                left:50,
                bottom:50,
                right:50,
            }
        })
    },[current,destination,regionChange])
    useEffect(()=>{
        async function getTimeTravel(){
            const data = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination?.description}&origins=${current?.description}&units=imperial&key=${process.env.GCP_TOKEN}`)
            const docs = await data.json()
            dispatch(setTimeInformation(docs?.rows[0]?.elements))
        }
        getTimeTravel()
    },[current,destination])
  return (
    <MapView
        ref={refMap}
        mapType='terrain'
        style={{flex:1}}
        initialRegion={{
            latitude: marker?marker?.latitude:current?.location?.lat,
            longitude: marker?marker?.longitude:current?.location?.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        onRegionChange={regionChange}
    >
        {current&&destination&&<MapViewDirections
            origin={{
                latitude: current?.location?.lat,
                longitude: current?.location?.lng,
            }}
            destination={{
                latitude: destination?.location?.lat,
                longitude: destination?.location?.lng,
            }}
            apikey={process.env.GCP_TOKEN}
            strokeWidth={3}
            strokeColor='orange'
        />}
        {current&&<Marker coordinate={{
            latitude: marker?marker?.latitude:current?.location?.lat,
            longitude: marker?marker?.longitude:current?.location?.lng,
        }} identifier='current' />}
        {destination&&<Marker coordinate={{
            latitude: destination?.location?.lat,
            longitude: destination?.location?.lng,
        }} identifier='destination' />}
    </MapView>
  )
}

export default Map