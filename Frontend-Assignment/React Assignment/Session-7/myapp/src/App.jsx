import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TrendingSongs from './Components/TrendingSongs'
import IPLScoreFetcher from './Components/IPLScoreFetcher'
import MovieSuggestions from './Components/MovieSuggestions'
import Users from './Components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrendingSongs/>
      <IPLScoreFetcher/>
      <MovieSuggestions/>
      <Users/>
      
    </>
  )
}

export default App
