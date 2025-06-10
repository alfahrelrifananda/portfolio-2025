import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='portfolio-2025'>
    <StrictMode>
      <App />
    </StrictMode>,
  </BrowserRouter>
)
