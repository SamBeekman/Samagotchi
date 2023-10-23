import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Chat from './pages/Chat'
import Friends from './pages/Friends'
import Gameplay from './pages/Gameplay'
import Homepage from './pages/Homepage'
import LoginSignup from './pages/LoginSignup'
import Payment from './pages/Payment'
import Profile from './pages/Profile'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 >Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/chat',
        element: <Chat />
      },
      {
        path: '/friends',
        element: <Friends />
      },
      {
        path: '/gameplay',
        element: <Gameplay />
      },
      {
        path: '/login',
        element: <LoginSignup />
      },
      {
        path: '/payment',
        element: <Payment />
      },
      {
        path: '/profile/:id',
        element: <Profile />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
