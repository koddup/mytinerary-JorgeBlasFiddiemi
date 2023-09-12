import { configureStore } from '@reduxjs/toolkit'
import itinerariesReducer from './reducers/itinerariesReducers.js'
import citiesReducer from './reducers/citiesReducers.js'
import authReducer from './reducers/authReducers.js'

const store = configureStore({
    reducer:{
        itinerariesReducer,
        citiesReducer,
        authReducer,
    }
})

export default store