import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer theme='[#f6f6f6]'  toastStyle={{ backgroundColor: 'white', color: 'black' }} position='top-right' autoClose={3000} closeOnClick pauseOnHover={false} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);