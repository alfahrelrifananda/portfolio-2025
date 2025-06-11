import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <HashRouter forceReload={true}>
    <StrictMode>
      <App />
    </StrictMode>,
  </HashRouter>
)
