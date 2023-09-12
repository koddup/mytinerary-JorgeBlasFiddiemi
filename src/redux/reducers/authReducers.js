import { createReducer } from "@reduxjs/toolkit"
import { authenticate, login, signup } from "../actions/authActions"


const initialState = {
    user: {},
    token: null
}

const authReducer = createReducer(initialState,
    (builder) => builder
        .addCase(login, (state, action) => {
            const newState = { ...state, ...action.payload }
            return newState
        })
        .addCase(signup, (state, action) => {
            const newState = { ...state, ...action.payload }
            return newState
        })
        .addCase(authenticate, (state, action) => {
            const newState = { ...state }
            return newState
        })
)

export default authReducer