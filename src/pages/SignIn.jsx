import React, { useState } from 'react'
import { server } from '../utils/axios.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import GoogleLoginButton from '../components/GoogleLoginButton.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/authActions.js'
import { Navigate } from 'react-router-dom';

const SignIn = () => {
  const { user } = useSelector(store => store.authReducer)
  const [data, setData] = useState({
    mail: "",
    password: "",
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
      const res = await server.post('/auth/in', userData)
      dispatch(login(res.data))
      console.log(res.data);
      notifySuccess("Welcome " + res.data.userData.firstName)
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message)
    }
  }

  const handleSubmitGoogle = async (data) => {
    try {
      const userData = { ...data }
      const res = await server.post('/auth/in', userData)
      console.log(res);
      dispatch(login(res.data))
      notifySuccess("Welcome " + res.data.userData.firstName)
    } catch (error) {
      notifyError(error.response.data.message)
    }
  }

  const notifySuccess = (message) => toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

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

  if (Object.keys(user).length != 0) return <Navigate to="/" />

  return (
    <div className="flex flex-col flex-grow p-4">
      <ToastContainer />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-3" onSubmit={handleSubmitData}>
          <div>
            <label htmlFor="mail" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <input onChange={handleChangeData} value={data.mail} id="mail" name="mail" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <input onChange={handleChangeData} value={data.password} id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div className="justify-center flex text-center">
            <button type='submit' className="flex justify-center w-1/2 px-6 py-3 mt-2 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">Sign in</button>
          </div>
          <div className="text-center font-bold align-middle leading-pro text-xs mt-0">
            <span>- Or you also can  -</span>
          </div>
          <div className="justify-center flex text-center">
            <div className="w-1/2">
              <GoogleLoginButton fn={handleSubmitGoogle} />
            </div>
          </div>
          <div className="flex justify-center items-center text-center font-bold align-middle leading-pro text-xs pt-4">
            <span>Don't have an account yet?</span><a href="/signup" className="flex justify-center mx-4 px-6 py-2 mt-2 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-500 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">Sign Up here!</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn