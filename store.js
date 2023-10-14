import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './locationReducer'
export const store = configureStore({
  reducer: {
    locationState:locationReducer
  },
})