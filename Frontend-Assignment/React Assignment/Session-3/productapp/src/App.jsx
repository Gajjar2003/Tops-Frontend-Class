import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Product from './Componets/Product'
import Instagram from './Componets/Instagram'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Product product ={{name : "laptop",price : 50000}}/>
        <Instagram instagram = {{username : "jenil_000",followers : 1000}}/>
        
      
    </>
  )
}

export default App
