import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import RootLayout from './rootLayout/RootLayout.jsx'
import { router } from './Routers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}>
      <RootLayout/>
    </RouterProvider>
  </StrictMode>,
)
