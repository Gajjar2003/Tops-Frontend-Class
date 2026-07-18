import { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h2>🛒 Flipkart Cart</h2>

      <h3>Product: Apple iPhone 16</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={decreaseQty}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          -
        </button>

        <h2>{quantity}</h2>

        <button
          onClick={increaseQty}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;