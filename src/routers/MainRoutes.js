import Login from '~/pages/auth/Login'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    comments: <Login />
  }
])
export default router