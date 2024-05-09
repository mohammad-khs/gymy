import './index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Auth from './pages/auth/auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
