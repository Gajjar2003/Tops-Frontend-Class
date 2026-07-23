import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MovieList from './Components/MovieList'
import AddPlaylist from './Components/AddPlaylist'
import RestaurantSearch from './Components/RestaurantSearch'
import MovieList1 from './Components/MovieList1'
import AddComment from './Components/AddComment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieList/>
      <AddPlaylist/>
      <RestaurantSearch/>
      <MovieList1/>
      <AddComment/>
    </>
  )
}

export default App
