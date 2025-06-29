import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bottom from "./components/Bottom"
import Heading from './components/Heading'
import Navbar from './components/Navbar'
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
