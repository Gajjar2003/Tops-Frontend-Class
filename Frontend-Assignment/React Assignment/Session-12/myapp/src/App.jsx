import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TrendingSongs from './Components/TrendingSongs'
import IPLScores from './Components/IPLScores'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  return (
    <>

      <TrendingSongs/>
      <IPLScores/>
      

      
    </>
  )
}

export default App
