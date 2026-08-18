import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'yet-another-react-lightbox/styles.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
