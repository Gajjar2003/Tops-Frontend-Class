import { useState } from "react";

function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h2>🍽️ Zomato Rating</h2>

      <div style={{ fontSize: "40px", cursor: "pointer" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{
              color: star <= rating ? "gold" : "lightgray",
              margin: "5px",
            }}
          >
            ★
          </span>
        ))}
      </div>

      <h3>Your Rating: {rating} / 5</h3>
    </div>
  );
}

export default Rating;