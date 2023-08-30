import { configureStore } from '@reduxjs/toolkit'
import itinerariesReducer from './reducers/itinerariesReducers.js'
import citiesReducer from './reducers/citiesReducers.js'

const store = configureStore({
    reducer:{
        itinerariesReducer,
        citiesReducer
    }
})

export default store