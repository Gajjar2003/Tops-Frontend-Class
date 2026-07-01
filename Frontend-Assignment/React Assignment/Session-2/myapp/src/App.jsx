import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from './Componets/User'
import Userclass from './Componets/Userclass'
import Userprofile from './Componets/Userprofile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <h1>Welcome To Vite</h1>
    <User user={{username : "JEnil Gajjar"}}/>
    <Userclass user ={{username : "Gajjar Jenil"}}/>
    <Userprofile/>
   
  

     
    </>
  )
}

export default App
