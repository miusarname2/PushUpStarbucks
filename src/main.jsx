import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Num1 } from "./views/Num1.jsx";
import { Num2 } from "./views/num2.jsx";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: '/opc2',
    element: <Num1 />
  },
  {
    path: "/opc3",
    element: <Num2 />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
