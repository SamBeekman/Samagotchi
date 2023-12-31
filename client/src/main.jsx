import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Chat from './pages/Chat'
import Friends from './pages/Friends'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Payment from './pages/Payment'
import PetSelector from './components/game/PetSelector'
import Profile from './pages/Profile'
import Logout from './pages/Logout'


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
        path: '/login',
        element: <Login />
      },
      {
        path: '/payment',
        element: <Payment />
      },
      {
        path: '/play',
        element: <PetSelector />
      },
      {
        path: '/profile/:username',
        element: <Profile />
      },
      {
        path: '/logout',
        element: <Logout />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
