import './index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './pages/auth/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
