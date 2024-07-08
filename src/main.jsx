import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SignUp } from './features/Sign-up/pages/SignUp.jsx'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
path: "/",
children : [
  {
    path: "sign-up",
    element : <SignUp/>
  }
]
}]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Toaster
     toastOptions={{
      success: {
        style: {
          background: '#058527',
          color: "#FFFFFF",
          opacity: "0.8"
        },
      },
      error: {
        style: {
          background: '#d1453b',
          color: "#FFFFFF",
          opacity: "0.8"
        },
      },
    }}
    />
  </React.StrictMode>,
)
