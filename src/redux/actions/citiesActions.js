import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from '../../utils/axios'

const getCity = createAsyncThunk('getCity', async (id) => {
    try {
        const res = await server.get('/cities/' + id)
        return res.data.response
    } catch (error) {
        console.log(error)
        return []
    }
})

const getCities = createAsyncThunk('getCities', async (searchCity) => {
    try {
        const res = await server.get('/cities', {
            params: {
                city: searchCity
            }
        })
        return res.data.response
    } catch (error) {
        console.log(error)
        return []
    }
})

export { getCity, getCities }