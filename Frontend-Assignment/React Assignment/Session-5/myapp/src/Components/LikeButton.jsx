import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>👍 Like Button</h2>

      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Like
      </button>

      <h3>Likes: {count}</h3>
    </div>
  );
}

export default LikeButton;