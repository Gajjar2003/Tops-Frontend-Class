import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Components/Login'
import CreatePlaylist from './Components/CreatePlaylist'
import AddReview from './Components/AddReview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      <CreatePlaylist/>
      <AddReview/>
    </>
  )
}

export default App
