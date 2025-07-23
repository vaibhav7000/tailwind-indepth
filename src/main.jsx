import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppMain from './Components/AppMain.jsx'
import First from './Components/First.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppMain /> */}
    <First/>
  </StrictMode>,
)
