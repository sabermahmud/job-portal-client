import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import RootLayout from './rootLayout/RootLayout.jsx'
import { router } from './Routers.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <RootLayout />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
