import { createReducer } from "@reduxjs/toolkit";
import { getItinerariesOfCity } from "../actions/itinerariesActions";

const initialState = {
    itineraries: [],
    loadingItineraries: false
}
const itinerariesReducer = createReducer(initialState,
    (builder) => builder
    .addCase(getItinerariesOfCity, (state, action) => {
        const newState = { ...state, itineraries: action.payload, loadingItineraries: false }
        return newState
    })
    .addCase(getItinerariesOfCity.fulfilled, (state, action) => {
        console.log(action.payload);
        const newState = { ...state, itineraries: action.payload, loadingItineraries: false }
        return newState
    })
    .addCase(getItinerariesOfCity.pending, (state, action) => {
        const newState = { ...state, loadingItineraries: true }
        return newState
    }).addCase(getItinerariesOfCity.rejected, (state, action) => {
        const newState = { ...state, loadingItineraries: false }
        return newState
    })
    )

export default itinerariesReducer
