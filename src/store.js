import { configureStore } from '@reduxjs/toolkit'
import countryReducer from './components/features/countries/countrySlice'
import userReducer from './components/features/user/userSlice'

export const store = configureStore({
  reducer: {
    countries: countryReducer,
    user: userReducer
  }
})
