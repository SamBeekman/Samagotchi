import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Chat from './pages/Chat'
import Friends from './pages/Friends'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Payment from './pages/Payment'
// import Play from './pages/Play'
// import Play from './components/game/oldPlay'
import PetSelector from './components/game/PetSelector'
import Profile from './pages/Profile'
import Signup from './pages/Signup'


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
        // element: <Play />
        element: <PetSelector />
      },
      {
        path: '/profile/:username',
        element: <Profile />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
