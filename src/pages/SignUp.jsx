import React, { useState } from 'react'
import { server } from '../utils/axios.js'
import { GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import GoogleLoginButton from '../components/GoogleLoginButton.jsx'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/actions/authActions.js'

export const SignUp = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        photo: "",
        password: "",
        country: "",
    })
    const dispatch = useDispatch()

    const handleChangeData = (e) => {
        setData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleSubmitData = async (e) => {
        try {
            e.preventDefault()
            const userData = { ...data }
            const res = await server.post('/auth/up', userData)
            dispatch(signup(res.data))
            //window.location.href = "/"
        } catch (error) {
            console.log(error);
            //notifyError(error.response.data.message)
        }
    }

    const handleSubmitGoogle = async (data) => {
        try {
            const userData = { ...data }
            const res = await server.post('/auth/up', userData)
        } catch (error) {
            notifyError(error.response.data.message)
        }
    }
    
    const notifyError = (message) => toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <div className="flex flex-col flex-grow p-4">
            <ToastContainer />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-3" onSubmit={handleSubmitData}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                        <input onChange={handleChangeData} value={data.firstName} id="firstName" name="firstName" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                        <input onChange={handleChangeData} value={data.lastName} id="lastName" name="lastName" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div>
                        <label htmlFor="mail" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <input onChange={handleChangeData} value={data.mail} id="mail" name="mail" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div>
                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                        <input onChange={handleChangeData} value={data.photo} id="photo" name="photo" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div>
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Select an option</label>
                        <select onChange={handleChangeData} value={data.country} name='country' id="country" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
                            <option value="">- Select country -</option>
                            <option value="AR">Argentina</option>
                            <option value="US">United States</option>
                            <option value="EN">England</option>
                            <option value="ES">Spain</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                            <option value="IT">Italy</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <input onChange={handleChangeData} value={data.password} id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="text-center">
                        <button type='submit' className="flex justify-center w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">Sign up</button>
                    </div>
                    <div className="text-center font-bold align-middle leading-pro text-xs">
                        <span>- Or you also can  -</span>
                    </div>
                        <GoogleLoginButton fn={handleSubmitGoogle} />
                    <div className="flex justify-center text-center font-bold align-middle leading-pro text-xs">
                        {/* <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                                const infoUser = jwtDecode(credentialResponse.credential)
                                console.log(infoUser);
                                handleSubmitGoogle({
                                    firstName: infoUser.given_name,
                                    lastName: infoUser.family_name,
                                    mail: infoUser.email,
                                    photo: infoUser.picture,
                                    password: "AAAa1",
                                    country: "AR",
                                })
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        /> */}
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp