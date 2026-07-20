import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import HomePage from "./components/HomePage";
import DealsPage from "./components/DealsPage";
import CartPage from "./components/CartPage";
import Navbar from "./components/Navbar";
import NotFound from './Components/NotFound';


function App() {
  const [count, setCount] = useState(0)

  function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

  return (
    <>
    <div>
      <Navbar/>
      <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
       <Route path="/" element={<HomePage />} />
      <Route path="/deals" element={<DealsPage />} />
      <Route path="/cart" element={<CartPage />} /> 

       <Route path="*" element={<NotFound />} />

     
    </Routes>
    </div>
   
    
    </>
  )
}

export default App
