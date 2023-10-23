import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Chat from './pages/Chat'
import Friends from './pages/Friends'
import Homepage from './pages/Homepage'
import LoginSignup from './pages/LoginSignup'
import Payment from './pages/Payment'
import Play from './pages/Play'
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
        path: '/login-signup',
        element: <LoginSignup />
      },
      {
        path: '/payment',
        element: <Payment />
      },
      {
        path: '/play',
        element: <Play />
      },
      {
        path: '/profile/:username',
        element: <Profile />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
