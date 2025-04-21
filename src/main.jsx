import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'


import Product from "./product.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
