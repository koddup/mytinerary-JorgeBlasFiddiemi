import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Cities from './pages/Cities'

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
      path: '*',
      element: <NotFound />
    }
  ]
},
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App
