import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Cities from './pages/Cities'
import City from './pages/City'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { useDispatch } from 'react-redux'
import { authenticate } from './redux/actions/authActions'

const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/cities',
      element: <Cities />
    },
    {
      path: '/about/:miVariable',
      element: <About />
    },
    {
      path: '/cities/:id',
      element: <City />
    },
    {
      path: '/signin',
      element: <SignIn />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
},
])

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authenticate())
  }, [])

  return (
    <div id='mainApp'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
