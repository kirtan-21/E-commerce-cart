import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './routes/Home.jsx'
import CartDetails from './routes/CartDetails.jsx'
import { Provider } from 'react-redux'
import ecommerceStore from './store/index.js'
import toast, { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path :"/",
    element: <App/>,
    children: [
      {path: "/", element: <Home />},
      {path: "/cart", element: <CartDetails />}
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {ecommerceStore}>
    <RouterProvider router = {router}/>
    <Toaster />
    </Provider>
  </React.StrictMode>,
)
