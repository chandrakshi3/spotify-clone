import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bottom from "./componets/bottom"
import Heading from './componets/heading'
import Navbar from './componets/navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Heading/> 
     <Bottom/>
      
      
    </>
  )
}

export default App
