import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//Páginas
import Inicio from './pages/Inicio/index'
import Carrinho from './pages/Carrinho/index'
import { ProductProvider } from './hooks/useProduct'


const router = createBrowserRouter([
  {
    
    element:(
    <ProductProvider>
        <App />
    </ProductProvider>  
    ),
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
