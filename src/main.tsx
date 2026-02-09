import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FilterProvider } from './context/filtersContext.tsx'
import { TeamProvider } from './context/teamContext.tsx'
import { CartProvider } from './context/cartContext.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <TeamProvider>
    <CartProvider>
    <FilterProvider>
      <App/>
    </FilterProvider>
    </CartProvider>
    </TeamProvider>
  </StrictMode>,
)
