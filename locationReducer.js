import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current:null,
  destination:null,
  timeInformation:null
}

export const locationReducer = createSlice({
  name: 'locationState',
  initialState,
  reducers: {
    setCurrent: (state,action) => {
        state.current=action.payload
    },
    setDestination: (state,action) => {
        state.destination=action.payload
    },
    setTimeInformation: (state, action) => {
        state.timeInformation=action.payload
    },
  },
})

export const { setCurrent, setDestination, setTimeInformation } = locationReducer.actions

export default locationReducer.reducer