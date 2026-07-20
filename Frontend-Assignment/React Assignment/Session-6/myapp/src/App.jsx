import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Playlist from './Components/Playlist'
import OrderStatus from './Components/OrderStatus'
import FollowerList from './Components/FollowerList'
import CartSummary from './Components/CartSummary'



function App() {
  const songs = [
    { title: "Shape of You", artist: "Ed Sheeran" },
    { title: "Perfect", artist: "Ed Sheeran" },
    { title: "Blinding Lights", artist: "The Weeknd" },
    { title: "Believer", artist: "Imagine Dragons" },
  ];

  const followers = ["jenil", "rahul", "priya"];

    const cartItems = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 700 },
    { name: "Keyboard", price: 1500 },
  ];


  return (
    <div>
      <Playlist songs={songs} />
        <OrderStatus  isDelivered={true}/>
        <OrderStatus isDelivered={false}/>
        <FollowerList followers={followers}/>
        <CartSummary cartItems={cartItems}/>
    </div>
    
  );
}


export default App
