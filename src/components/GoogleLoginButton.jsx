import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/actions/authActions'

const GoogleLoginButton = ({ fn }) => {
    const dispatch = useDispatch()
    const log = useGoogleLogin({
        onSuccess: async tokenResonse => {
            const { data } = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    Authorization: "Bearer " + tokenResonse.access_token
                }
            })
            //const infoUser = jwtDecode(tokenResonse.credentials)
            fn({
                firstName: data.given_name,
                lastName: data.family_name,
                mail: data.email,
                photo: data.picture,
                password: "AAAa1",
                country: "AR",
            })
            dispatch(signup(data))
        }

    })

    return (<div onClick={() => log()} className="px-7 py-2 text-white font-medium text-xs leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        style={{ backgroundColor: "#3b5998" }}>
        <img className="pr-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="" style={{ height: "2rem" }} />
        Continue with Google
    </div>
    )
}

export default GoogleLoginButton