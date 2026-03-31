import './src//theme/custom-theme.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './src/pages/home'
import { Header } from './src/components/molecules/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>
)