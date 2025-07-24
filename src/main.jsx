import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppMain from './Components/AppMain.jsx'
import First from './Components/First.jsx'
import Flex from './Components/FLEX.jsx'
import InputContainer from './Components/InputContainer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppMain /> */}
    {/* <Flex/> */}
    <InputContainer/>
    {/* <First/> */}
  </StrictMode>,
)
