import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { server } from "../../utils/axios"
import { LS } from "../../utils/LS"

const login = createAction('login', (credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token
    }
    LS.set('token', credentials.token)
    return {
        payload: reducerData
    }
})
const signup = createAction('signup', (credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token
    }
    console.log(credentials.token);
    LS.set('token', credentials.token)
    return {
        payload: reducerData
    }
})
const authenticate = createAsyncThunk('authenticate', async() => {
    const token = LS.getText('token')
    const {data} = await server.get('/auth/token', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    const reducerData = {
        user: data.userData,
        token: data.token,
    }
    return reducerData
})

export { login, signup, authenticate }