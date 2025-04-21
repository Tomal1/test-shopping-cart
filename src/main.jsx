import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Product from "./product.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Product />
  </StrictMode>,
)
