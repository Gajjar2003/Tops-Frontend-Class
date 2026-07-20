import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SearchBar from './Components/SearchBar'
import LoginForm from './Components/LoginForm'
import AddToPlaylist from './Components/AddToPlaylist'
import FeedbackForm from './Components/FeedbackForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar/>
      <LoginForm/>
      <AddToPlaylist/>
      <FeedbackForm/>
    </> 
  )
}

export default App
