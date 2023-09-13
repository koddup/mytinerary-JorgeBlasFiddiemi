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
    LS.set('token', credentials.token)
    return {
        payload: reducerData
    }
})
const authenticate = createAsyncThunk('authenticate', async () => {
    try {
        const token = LS.getText('token')
        const { data } = await server.get('/auth/token', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        const reducerData = {
            user: data.userData,
        }
        return reducerData
    } catch (error) {
        console.log(error);
    }
})

const logout = createAction('logout', () => {
    LS.rm('token')
    const reducerData = {
        user: {},
        token: null
    }
    return reducerData
})
export { login, signup, authenticate, logout }