import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './oficina_pro/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
