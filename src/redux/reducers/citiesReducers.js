import { createReducer } from "@reduxjs/toolkit";
import { getCity, getCities } from "../actions/citiesActions";

const initialState = {
    cities: [],
    loading: false,
    city: {},
}
const citiesReducer = createReducer(initialState,
    (builder) => builder
        .addCase(getCity, (state, action) => {
            const newState = { ...state, city: action.payload, loading: false }
            return newState
        })
        .addCase(getCity.fulfilled, (state, action) => {
            console.log("fulfilled");
            console.log(action.payload);
            const newState = { ...state, city: action.payload, loading: false }
            return newState
        })
        .addCase(getCity.pending, (state, action) => {
            console.log("pending");
            console.log(action.payload);
            const newState = { ...state, loading: true }
            return newState
        })
        .addCase(getCity.rejected, (state, action) => {
            console.log("rejected");
            console.log(action.payload);
            const newState = { ...state, loading: false }
            return newState
        })

        
        .addCase(getCities.fulfilled, (state, action) => {
            console.log("fulfilled");
            console.log(action.payload);
            const newState = { ...state, cities: action.payload, loading: false }
            return newState
        })
        .addCase(getCities.pending, (state, action) => {
            console.log("pending");
            console.log(action.payload);
            const newState = { ...state, loading: true }
            return newState
        })
        .addCase(getCities.rejected, (state, action) => {
            console.log("rejected");
            console.log(action.payload);
            const newState = { ...state, loading: false }
            return newState
        })
        

        .addDefaultCase(() => {
            return initialState
        })
)

export default citiesReducer
