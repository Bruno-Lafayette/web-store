import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//Páginas
import Inicio from './pages/Inicio/index'
import Carrinho from './pages/Carrinho/index'


const router = createBrowserRouter([
  {
    element:<App />,
    children:[
      {
        path: '/',
        element: <Inicio />
      },
      {
        path: '/carrinho',
        element: <Carrinho />

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
