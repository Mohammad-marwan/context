import React from 'react'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import UserContextProvider from './components/User.jsx'

import Root from './assets/Root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
const router = createBrowserRouter([
  {path:'/',element:<Root />,
    children:[
      {path:'/Home',element:<Home />},
      {path:'/Register',element:<Register />},
      {path:'/Login',element:<Login />}
    ]
  }
])
  return (
    <>
    <UserContextProvider>
      <RouterProvider router ={router} />
      </UserContextProvider>
     
    </>
  )
}
