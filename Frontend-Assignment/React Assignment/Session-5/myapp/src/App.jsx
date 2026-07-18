import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LikeButton from './Components/LikeButton'
import SearchBar from './Components/SearchBar'
import LoginForm from './Components/LoginForm'
import PlaylistAdder from './Components/PlaylistAdder'
import From from './Components/From'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LikeButton/>
      <SearchBar/>
      <LoginForm/>
      <PlaylistAdder/>
      <From/>
      
          

    </>
  )
}

export default App
