import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {server} from '../../utils/axios'

const getItinerary = createAsyncThunk('getItinerary', async ({ id }) => {
    try {
        server.get('itineraries')
    } catch (error) {
        console.log(error);
    }
})

const getItineraries = createAsyncThunk('getItineraries', async (id) => {
    try {
        const res = await server.get('/itineraries/' + id)
        return res.data.response
    } catch (error) {
        console.log(error)
        return[]
    }
})

export { getItineraries, getItinerary }