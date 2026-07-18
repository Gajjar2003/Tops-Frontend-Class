import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={handleLike}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      >
        ❤️ {count}
      </button>
    </div>
  );
}

export default LikeButton;