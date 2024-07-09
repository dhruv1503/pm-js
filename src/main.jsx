import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SignUp } from './features/Sign-up/pages/SignUp.jsx'
import { Toaster } from 'react-hot-toast'
import { SignIn } from './features/Sign-in/pages/SignIn.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'

const router = createBrowserRouter([
  {
path: "/",
children : [
  {
    path: "sign-up",
    element : <SignUp/>
  },
  {
    path: "sign-in",
    element : <SignIn/>
  },
]
}]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
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
  </Provider>
  </React.StrictMode>
  ,
)
