import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/all.scss'
//import './index.css'
import App from './App.jsx'
// import "bootstrap"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
