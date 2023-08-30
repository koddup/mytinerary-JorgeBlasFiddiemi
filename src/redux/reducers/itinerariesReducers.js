import { createReducer } from "@reduxjs/toolkit";
import { getItineraries } from "../actions/itinerariesActions";

const initialState = {
    itineraries: [],
    loading: false
}
const itinerariesReducer = createReducer(initialState,
    (builder) => builder
    .addCase(getItineraries, (state, action) => {
        const newState = { ...state, itineraries: action.payload, loading: false }
        return newState
    })
    .addCase(getItineraries.fulfilled, (state, action) => {
        console.log("fulfilled");
        console.log(action.payload);
        const newState = { ...state, itineraries: action.payload, loading: false }
        return newState
    })
    .addCase(getItineraries.pending, (state, action) => {
        console.log("pending");
        console.log(action.payload);
        const newState = { ...state, loading: true }
        return newState
    }).addCase(getItineraries.rejected, (state, action) => {
        console.log("rejected");
        console.log(action.payload);
        const newState = { ...state, loading: false }
        return newState
    })
    )

export default itinerariesReducer
