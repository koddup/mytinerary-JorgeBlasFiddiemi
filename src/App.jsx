import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Cities from './pages/Cities'
import City from './pages/City'

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
      path: '*',
      element: <NotFound />
    }
  ]
},
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='mainApp'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
