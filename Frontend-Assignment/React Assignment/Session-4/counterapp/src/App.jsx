import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import LikeButton from "./Components/LikeButton";
import CartItem from "./Components/CartItem";
import SongVote from "./Components/SongVote";
import Rating from "./Components/Rating";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Like Button</h1>
      <LikeButton />
      <CartItem/>
      <SongVote/>
      <Rating/>
    </>
  );
}

export default App;
